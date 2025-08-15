import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema({
  name: String,
  content: String,
});

const projectSchema = new mongoose.Schema({
  id: String,
  name: String,
  icon: String,
  isFavorite: Boolean,
  isShared: Boolean,
  isDeleted: Boolean,
  isRecent: Boolean,
  isSave: Boolean,
  files: [fileSchema],
});

const storageSchema = new mongoose.Schema({
  limit: Number,
  unit: String,
});

const categorySchema = new mongoose.Schema({
  name: String,
  icon: String,
});

const dashboardSchema = new mongoose.Schema({
  projects: [projectSchema],
  storage: [storageSchema],
  categories: [categorySchema],
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: String,
  phone: String,
  profileImage: String,
  subscription: Number,
  dashboard: [dashboardSchema],
});

export default mongoose.model('User', userSchema);