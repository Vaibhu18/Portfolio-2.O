import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    }
})

const userModel = mongoose.models.users || mongoose.model('users', userSchema);
export default userModel;