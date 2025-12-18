import app from "./src/app.js";
import { PORT } from "./src/utils/config.js";


app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
