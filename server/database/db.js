import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const connection = () => {
  const MONGODB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-1n0od1p-shard-00-00.rp2gmvg.mongodb.net:27017,ac-1n0od1p-shard-00-01.rp2gmvg.mongodb.net:27017,ac-1n0od1p-shard-00-02.rp2gmvg.mongodb.net:27017/?ssl=true&replicaSet=atlas-huuwdn-shard-0&authSource=admin&retryWrites=true&w=majority`;
  mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

  mongoose.connection.on("connected", () => {
    console.log("database connected Successfully");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("database disconnected");
  });

  mongoose.connection.on("error", () => {
    console.log("Error while connecting with the database", error.message);
  });
};

export default connection;
