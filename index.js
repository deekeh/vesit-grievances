require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();

const MongoClient = require("mongodb").MongoClient;
// const client = new MongoClient(process.env.DB_URL);
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

const jwt = require("jsonwebtoken");

app.post("/register", async (req, res) => {
  const userData = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    department: req.body.department,
    batch: req.body.batch,
  };

  try {
    MongoClient.connect(
      process.env.DB_URL,
      { useUnifiedTopology: true },
      (err, client) => {
        if (err) return console.log(err);
        const db = client.db("vesit");
        const collection = db.collection("students");
        collection.insertOne(userData, (err, result) => {
          if (err) return console.log(err);
        });
        res.status(201).json({
          msg: "Done",
        });
      }
    );
  } catch (e) {
    console.log(e);
  }
});

app.post("/student/login", (req, res) => {
  const loginData = {
    email: req.body.email,
    password: req.body.password,
  };
  MongoClient.connect(
    process.env.DB_URL,
    { useUnifiedTopology: true },
    (err, client) => {
      if (err) return console.log(err);
      const db = client.db("vesit");
      db.collection("students").findOne(
        { email: loginData.email },
        (err, result) => {
          if (err) return console.log(err);
          if (result == null) res.send({ status: "user does not exist" });
          else {
            let db = client.db("vesit");
            db.collection("students").findOne(
              { email: loginData.email, password: loginData.password },
              (err, result) => {
                if (err) return console.log(err);
                if (result == null) res.send({ status: "invalid login" });
                else {
                  const accessToken = jwt.sign(
                    { email: loginData.email },
                    process.env.ACCESS_TOKEN_SECRET
                  );
                  res.send({ status: "success", accessToken });
                }
                client.close();
              }
            );
          }
        }
      );
    }
  );
});

//Add-Post
app.post("/student/add-post", async (req, res) => {
  const accessToken = req.body.accessToken;
  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(401);
    const postData = {
      subject: req.body.subject,
      description: req.body.description,
      department: req.body.department,
      creator: user.email,
    };
    try {
      MongoClient.connect(
        process.env.DB_URL,
        { useUnifiedTopology: true },
        (err, client) => {
          if (err) return console.log(err);
          const db = client.db("vesit");
          const collection = db.collection("studentPosts");
          collection.insertOne(postData, (err) => {
            if (err) return console.log(err);
          });
          res.status(201).json({
            msg: "Done",
          });
        }
      );
    } catch (e) {
      console.log(e);
    }
  });
});

// admin
app.post("/admin/login", (req, res) => {
  const loginData = {
    email: req.body.email,
    password: req.body.password,
  };
  MongoClient.connect(
    process.env.DB_URL,
    { useUnifiedTopology: true },
    (err, client) => {
      if (err) return console.log(err);
      const db = client.db("vesit");
      db.collection("admins").findOne(
        { email: loginData.email },
        (err, result) => {
          if (err) return console.log(err);
          if (result == null) res.send({ status: "user does not exist" });
          else {
            let db = client.db("vesit");
            db.collection("admins").findOne(
              { email: loginData.email, password: loginData.password },
              (err, result) => {
                if (err) return console.log(err);
                if (result == null) res.send({ status: "invalid login" });
                else {
                  const accessToken = jwt.sign(
                    { email: loginData.email },
                    process.env.ACCESS_TOKEN_SECRET
                  );
                  res.send({
                    status: "success",
                    accessToken,
                    name: result.name,
                  });
                }
                client.close();
              }
            );
          }
        }
      );
    }
  );
});

const PORT = 2000 || process.env.PORT;
app.listen(PORT, console.log(`Server started at port ${PORT}`));
