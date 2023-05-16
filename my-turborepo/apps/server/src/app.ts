import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";


const app = express()
const corsOptions = {
  origin: 'http://localhost:5173'
};

app.use(cors(corsOptions))
app.use(cookieParser())
app.use(bodyParser.json())

app.get("/", (req, res) => res.send("Boston"));

if (import.meta.env.PROD)
  app.listen(3000);

export const viteNodeApp = app;