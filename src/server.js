import { createServer } from "node:http";
import "dotenv/config";
import { log } from "node:console";
import { quote, root, quotes, random } from "./routes.js";

let port = process.env.PORT;

let server = createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    root(req, res);
  } else if (req.url === "/quote" && req.method === "GET") {
    quote(req, res);
  } else if (req.url === "/quotes" && req.method === "GET") {
    quotes(req, res);
  } else if (req.url === "/random" && req.method === "GET") {
    random(req, res);
  } else {
    res.statusCode = 404;
    res.end("page not found");
  }
});

server.listen(port, () => {
  log(`server running on:http://localhost:${port}`);
});
