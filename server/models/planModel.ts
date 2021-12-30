import mongoose, { Schema } from 'mongoose';

const planSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
});

const Plan = mongoose.model('Plan', planSchema);

export default Plan;
