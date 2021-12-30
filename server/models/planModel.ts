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
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Plan = mongoose.model('Plan', planSchema);

export default Plan;
