import mongoose from "mongoose";
const ticketSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        require: true
    },
    contact: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    }
}, { timestamps: true })

export default mongoose.model("Ticket", ticketSchema)