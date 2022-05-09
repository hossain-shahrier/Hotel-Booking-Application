import express from "express";
// Cookie Parser
import cookieParser from "cookie-parser";
// DB
import connect from "./connection.js";

// routes
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";
const app = express();

//middlewares
app.use(express.json());
app.use(cookieParser());
// routes
app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);

// Error Handleing
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something bad happened!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});
// Listening application
app.listen(8800, () => {
  connect();
  console.log("Server is running...");
});
