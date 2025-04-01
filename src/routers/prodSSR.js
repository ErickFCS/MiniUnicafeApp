import { Router } from "express";
import { readFile } from "fs/promises";
import compression from 'compression';
import sirv from "sirv";

const prodSSR = Router();

prodSSR.use(compression());
prodSSR.use("/", sirv("./dist/client", { extensions: [] }));

prodSSR.use("/{*all}", async (req, res) => {
    try {
        const url = req.originalUrl.replace("/", "");
        const template = await readFile("./dist/client/index.html", "utf8");
        const { render } = await import("../../dist/server/entry-server.js");
        const rendered = await render(url);
        const html = template.replace("<!--app-html-->", rendered.html);
        res.status(200).setHeader("Content-Type", "text/html").end(html);
    } catch (e) {
        console.error(e);
        res.status(500).end("Internal Server Error");
    }
});

export default prodSSR;