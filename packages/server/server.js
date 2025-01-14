import { createApp } from "./src/app.js";

const app = createApp();
const PORT = 5000 || process.env.PORT;


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
