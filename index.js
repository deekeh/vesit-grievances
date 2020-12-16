require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const nodemailer = require("nodemailer");

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

// get posts
app.post("/student/get-posts", (req, res) => {
  const accessToken = req.body.accessToken;
  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(401);
    try {
      MongoClient.connect(
        process.env.DB_URL,
        { useUnifiedTopology: true },
        async (err, client) => {
          if (err) return console.log(err);
          const db = client.db("vesit");
          const collection = db.collection("studentPosts");
          const posts = collection.find({
            creator: user.email,
          });
          var responsePost = [];
          await posts.forEach((post) => {
            responsePost.push({
              subject: post.subject,
              description: post.description,
              message: post.messages,
              category: post.category,
              status: post.status,
            });
          });
          res.status(200).send(responsePost);
          client.close();
        }
      );
    } catch (e) {
      console.log(e);
    }
  });
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
      category: req.body.category,
      creator: user.email,
      status: "pending",
      level:
        req.body.level === "Department"
          ? 1
          : req.body.level === "College"
          ? 2
          : 3,
      messages: "",
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

app.post("/admin/get-posts", (req, res) => {
  const accessToken = req.body.accessToken;
  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(401);
    // let users = [];
    MongoClient.connect(
      process.env.DB_URL,
      { useUnifiedTopology: true },
      async (err, client) => {
        if (err) return console.log(err);
        const db = client.db("vesit");
        db.collection("studentPosts")
          .find({ status: "pending" })
          .toArray((err, result) => {
            let posts = [];
            result.forEach((post) =>
              posts.push({
                subject: post.subject,
                description: post.description,
                category: post.category,
                department: post.department,
                creator: post.creator,
                status: post.status,
                level: post.level,
              })
            );
            if (err) return console.log(err);
            if (result == null) res.send({ status: "no posts found" });
            res.send(posts);
          });
      }
    );
  });
});

// admin - add message
app.post("/admin/send-message", (req, res) => {
  const accessToken = req.body.accessToken;
  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(401);
    MongoClient.connect(
      process.env.DB_URL,
      { useUnifiedTopology: true },
      async (err, client) => {
        const db = client.db("vesit");
        const query = { creator: req.body.email };
        const newValues = {
          $set: { messages: req.body.message, status: "success" },
        };
        db.collection("studentPosts").updateOne(
          query,
          newValues,
          async (err, resp) => {
            if (err) return console.log(err);

            //NodeMailer

            // let testAccount = await nodemailer.createTestAccount();

            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
              host: "smtp.gmail.com",
              port: 587,
              secure: false, // true for 465, false for other ports
              auth: {
                user: "alex440x@gmail.com", //this
                pass: "amazarashi004june", // this
              },
            });

            // send mail with defined transport object
            let info = await transporter.sendMail({
              from: "Vesit Admin<alex440x@gmail.com>", // sender address
              to: req.body.email, // list of receivers
              subject: "you have got a new mail from VESIT ADMIN", // Subject line
              text: req.body.message, // plain text body
            });

            console.log("Message sent: %s", info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

            res.send({ status: "done" });
          }
        );
      }
    );
  });
});

const PORT = 2000 || process.env.PORT;
app.listen(PORT, console.log(`Server started at port ${PORT}`));
