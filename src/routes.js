import { grabRandomData, grabTodayData } from "./logic.js";
export function root(req, res) {
  res.statusCode = 200;
  res.end("hello");
}
export function quote(req, res) {
  grabTodayData().then((data) => {
    res.setHeader("Content-Type", "text/plain");
    res.statusCode = 200;
    res.end(JSON.stringify(data));
  });
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
