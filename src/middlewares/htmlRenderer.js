import renderer from "../utils/renderer.js";


const htmlRenderer = async (req, res, next) => {
    const html = await renderer(req.originalUrl);
    if (!html) return next();
    res.status(200).setHeader("Content-Type", "text/html").end(html);
};

export default htmlRenderer;
