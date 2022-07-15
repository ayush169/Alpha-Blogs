import fs from "fs";

// http://localhost:3000/api/getblog?slug=how-to-learn-nextjs

export default function handler(req, res) {
  fs.readFile(`./blogdata/${req.query.slug}.json`, "utf8", (err, data) => {
    console.log(req.query);
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json(JSON.parse(data));
    }
  });
}
