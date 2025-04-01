import express from 'express';
import prodSSR from './routers/prodSSR.js';

const app = express();

app.get("/ping", (req, res) => {
    res.send("pong");
});

app.use(prodSSR)

export default app;