import express from "express";
import cors from "cors"; // Import the cors middleware
import connectDB from "./dataBase/DB.js";
import userRouter from "./router/userRouter.js";

const app = express();
const PORT = 5000;

// Use cors middleware to enable CORS
app.use(cors());

// Parse JSON requests
app.use(express.json());
// Parse URL-encoded requests
app.use( express.urlencoded({ extended: true }));

app.use(`/api/user`, userRouter);
app.get("/", (req, res) => {
  res.send("server started!!!");
});

const server = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`sever is running on port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`connecting to mongoDB database ${error.meassage}`);
  }
};
server();
