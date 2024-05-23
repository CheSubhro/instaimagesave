import mongoose, { Schema } from "mongoose";

// Define the schema for the Image
const imageSchema = new Schema(
    {
        // Image field
        image: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },        
    },
    // Additional options
    {
        timestamps: true // Adds createdAt and updatedAt fields
    }
);


// Create and export the User model
export const Image = mongoose.model("Image", imageSchema);
