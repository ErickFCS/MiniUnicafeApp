import { readFile } from "fs/promises";
import { __dirname } from "./config.js";
import { resolve } from "path";

const renderer = async (urlPath) => {
    let template = await readFile(resolve(__dirname, "./dist/client/index.html"), "utf-8");
    const { render } = await import(resolve(__dirname, "./dist/server/entry-server.js"));
    const rendered = render(urlPath);
    if (!rendered) return false;
    const html = template
        .replace("<!--app-html-->", rendered.html)
        .replace("<!--app-head-->", rendered.head);
    return html;
};

export default renderer;
