import express from "express";
import htmlRenderer from "./middlewares/htmlRenderer.js";
import { SSR } from "./utils/config.js";
import { resolve } from "path";
import { __dirname } from "./utils/config.js";

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

app.use(express.static(resolve(__dirname, "dist/client/")));


export default app;
