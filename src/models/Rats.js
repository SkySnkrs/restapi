import { Schema } from "mongoose";

export const RatsSchema = new Schema(
    {
        name: { type: String, minLength: 1, maxLength: 25, required: true },
        callsign: { type: String, minLength: 1, maxLength: 25, required: true },
        picture: { type: String, minLength: 1, maxLength: 500, required: true },
        specialties: { type: [String], required: true }
    },
    {
        timestamps: true,
        toJSON: { virtuals: true }
    }
)