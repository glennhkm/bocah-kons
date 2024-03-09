import mongoose from "mongoose";

export const databaseConnection = () => {
  mongoose.connect(process.env.MONGO_URL);

  const db = mongoose.connection;

  db.on("error", (e) => {
    console.log("error : ", e);
  });

  db.once("open", () => {
    console.log("Database Connected");
  });
};
