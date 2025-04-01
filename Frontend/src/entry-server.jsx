import { renderToString } from "react-dom/server";
import App from "./App";

/**
 * @param {string} url 
 * @returns {{html: string}}
 */
export const render = (url) => {
    return {
        html: renderToString(
            <App />
        )
    };
};
