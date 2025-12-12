import mongoose from "mongoose";
import { time } from "motion";

const FormDataSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    timestamp: {
        type: Date,
        default: () => time.now(),
    },
});

export default mongoose.model("FormData", FormDataSchema);

//explain the above code over here 
// The code defines a Mongoose schema and model for storing form data in a MongoDB database.
// It imports the necessary modules, defines the schema with fields for name, email, message, and a timestamp that defaults to the current time.
// Finally, it exports the model for use in other parts of the application.
