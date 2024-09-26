import express from "express";

import { connect } from "./db.js";
import authRoutes from "./routes/auth.js";
// import { notesRoutes } from "./routes/notes.js";

const app = express();
const port = 3004;

app.use(express.json());

app.use("/api/auth", authRoutes);
// app.use('/api/notes', notesRoutes);

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await connect();
  console.log("MongoDB connected");
});
