import mongoose from 'mongoose';

const planSchema = new mongoose.Schema({
  id: Number,
  planType: String,
  planPrice: Number,
  maxProjects: Number,
  icons: [String],
  title: String,
  content: [String],
});

export default mongoose.model('Plan', planSchema);