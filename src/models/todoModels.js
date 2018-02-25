import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const TodoSchema = new Schema({
  firstName: {
    type: String,
    required: "Enter a first name"
  },
  lastName: {
    type: String,
    required: "Enter a Last name"
  },
  email: {
    type: String,
  },
  company: {
    type: String,
  },
  phone: {
    type: Number,
  },
  created_data:{
    type: Date,
    default: Date.now
  }
}) 