import express from "express";
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express();

app.use(express.static(join(__dirname, "build")));

const port = 3000;

const apiBasePath = "/api";

app.get(`${apiBasePath}/hello`, (req, res) => {
    res.send({hello: "world"});
})

app.listen(port, () => console.log(`listening on port ${port}...`));
