import { grabRandomData } from "./logic.js";
export function root(req, res) {
  res.statusCode = 200;
  res.end("hello");
}
export function quote(req, res) {
  res.statusCode = 200;
  res.end("quote");
}

export function quotes(req, res) {
  res.statusCode = 200;
  res.end("quotes");
}

export function random(req, res) {
  let data = grabRandomData();
  res.setHeader("Content-Type", "text/plain");
  res.statusCode = 200;
  res.end(JSON.stringify(data));
}
