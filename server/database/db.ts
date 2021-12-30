import dotenv from 'dotenv';
import mongoose, { ConnectOptions } from 'mongoose';

dotenv.config();
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions;

const { MONGODB_URI } = process.env;

const connect = async () => {
  try {
    if (!MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined');
    }

    await mongoose.connect(MONGODB_URI, options);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Failed to connect to MongoDB');
  }
};

export default connect;
