const http = require("http");
var fs = require("fs");

const PORT = 8080;

http
	.createServer((req, res) => {
		console.log(`${req.method} request for ${req.url}`);
		if (req.url === "/") {
			fs.readFile("./home.html", "UTF-8", function (err, content) {
				if (err) console.log(err);
				res.writeHead(200, { "Content-Type": "text/html" });
				res.end(content, "utf-8");
			});
		} else if (req.url === "/contact") {
			fs.readFile("./contact.html", "UTF-8", function (err, content) {
				if (err) console.log(err);
				res.writeHead(200, { "Content-Type": "text/html" });
				res.end(content, "utf-8");
			});
		} else if (req.url === "/home") {
			res.writeHead(302, {
				location: "/",
			});
			res.end();
		} else if (req.url === "/about") {
			fs.readFile("./about.html", "UTF-8", function (err, content) {
				if (err) console.log(err);
				res.writeHead(200, { "Content-Type": "text/html" });
				res.end(content, "utf-8");
			});
		}
	})
	.listen(8080);
console.log(`Listening on port ${8080}...`);
