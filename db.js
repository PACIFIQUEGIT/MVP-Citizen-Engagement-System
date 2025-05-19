const mongoose = require("mongoose")
const { config } = require("dotenv")
config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, { autoIndex: false})

        console.log("Database connected successfully");
    } catch (error) {
        console.log("ERROR CONNECTING TO DATABASE", error);
        await mongoose.disconnect();
        process.exit(1);
    };
};

module.exports = connectDB