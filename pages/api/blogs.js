import fs from "fs";

export default async function handler(req, res) {
  let data = await fs.promises.readdir("./blogdata");
  let myfile;
  let allblogs = [];
  for (let i = 0; i < data.length; i++) {
    const file = data[i];
    myfile = await fs.promises.readFile(`./blogdata/${file}`, "utf8");
    allblogs.push(JSON.parse(myfile));
  }

  res.status(200).json(allblogs);
}
