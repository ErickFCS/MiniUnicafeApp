import dotenv from "dotenv";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";


export const __dirname = resolve(dirname(fileURLToPath(import.meta.url)), "../../");
console.log(__dirname);
dotenv.config({ path: resolve(__dirname, ".env") });
export const PORT = process.env.PORT || 3000;
export const SSR = process.env.SSR === "true" || false;
export default { __dirname, PORT, SSR };
