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

export default mongoose.model('Project', projectSchema, 'deletedProjects');