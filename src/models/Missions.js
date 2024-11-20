import { Schema } from "mongoose";

export const MissionsSchema = new Schema(
    {
        codename: { type: String, minLength: 1, maxLength: 50, required: true },
        objective: { type: String, minLength: 1, maxLength: 1000, required: true },
        year: { type: String, minLength: 1, maxLength: 25, required: true },
        locationId: { type: Schema.ObjectId, required: true, ref: 'Locations' },
        ratId: { type: Schema.ObjectId, required: true, ref: 'Rats' },
        completed: { type: Boolean, default: false, required: true }

    },
    {
        timestamps: true,
        toJSON: { virtuals: true }
    }
)

MissionsSchema.virtual('location', {
    localField: 'locationId',
    ref: 'Locations',
    foreignField: '_id',
    justOne: true
})

MissionsSchema.virtual('rat', {
    localField: 'ratId',
    ref: 'Rats',
    foreignField: '_id',
    justOne: true
})