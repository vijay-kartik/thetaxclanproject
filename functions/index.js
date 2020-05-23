// app.prepare()
//     .then(() => {
//         const server = express();
//         server.get("/hello", (req, res) => {
//             console.log('yayy');
//             res.send("Hello from the other side..");
//             return handle(req, res);
//         });
//     });


// const server = express()
// server.get("*", (req, res) => {
//     console.log('yayyy');
//     res.send('helle');
// })
// server.listen(port, err => {
//     if(err) throw err;
//     console.log('ready at > ${PORT}');
// })
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

const functions = require("firebase-functions")
const next = require("next")

var dev = process.env.NODE_ENV !== "production"
var app = next({ dev, conf: { distDir: "out" } })
var handle = app.getRequestHandler()

exports.app = functions.https.onRequest((req, res) => {
  console.log("File: " + req.originalUrl) // log the page.js file that is being requested
  return app.prepare().then(() => handle(req, res))
})