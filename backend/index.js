import express from "express";
import cors from "cors";
import morgan from "morgan";
import groceryRoute from "./routes/grocery.js";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/grocery", groceryRoute);

app.listen(PORT, () =>
	console.log(`It's alive on port http://localhost:${PORT}`)
);
