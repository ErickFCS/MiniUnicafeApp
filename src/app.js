import express from "express";
import htmlRenderer from "./middlewares/htmlRenderer.js";
import { SSR } from "./utils/config.js";
import sirv from "sirv";
import { resolve } from "path";
import compression from "compression";

const app = express();

app.get("/ping", (_req, res) => {
    res.send("pong");
});

app.get("/health", (_req, res) => {
    res.send("ok");
});

if (SSR) {
    app.use(htmlRenderer);
}

app.use(compression);
app.use(sirv(resolve(__dirname, "/dist/client/", { extensions: [] })));


export default app;
