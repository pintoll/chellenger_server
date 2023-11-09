import express from "express";

import morgan from "morgan";
import cors from "cors";

const PORT = process.env.PORT || 4007;

const app = express();

//For server log
app.use(morgan("dev"));

//For Cors
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

//For body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routers

//Start
app.listen(PORT, () => {
  console.log(`Server Listening on http://localhost:${PORT}`);
});
