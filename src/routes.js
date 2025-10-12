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
  res.statusCode = 200;
  res.end("random");
}
