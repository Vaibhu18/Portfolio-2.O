import mongoose from "mongoose";

const connection = {};

export const dbConnection = async () => {
    if (connection.isConnected) {
        console.log("mongodb is already connected...");
        return;
    }
    try {
        const db = await mongoose.connect(process.env.MONGODB_ATLAS_URI);
        connection.isConnected = db.connections[0].readyState;
        console.log("mongodb is connected...");
    } catch (error) {
        console.log("database connection failed : ", error);
        process.exit(1);
    }
};