import express, { Response } from "express";
import { cats } from "./utils/cats";

const PORT = process.env.PORT || 3000;

const app = express();
app.get("/", (_, res: Response) => {
    return res.send("Hello");
});
app.get("/cats", async (_, res: Response) => {
    return res.json(await cats());
});
app.listen(PORT, () => {
    console.log(`App is alive at http://localhost:${PORT}`);
});
