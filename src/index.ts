import TelegramBot from "./telegram/index";
import cors from "cors";
import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = process.env.PORT;
app.use(express.json());
app.use(cors());
app.post("/get-call-back", (req: Request, res: Response) => {
  TelegramBot.sendMessage(JSON.stringify(req.body));
  res.send("success");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

TelegramBot.sendMessage("Hi");
