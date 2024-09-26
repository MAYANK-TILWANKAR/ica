import mongoose from 'mongoose';

const enquiryExcelDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  moblile:String,
  message: String,
}, {
  timestamps: true
});

export default mongoose.models.EnquiryExcelData || mongoose.model('EnquiryExcelData', enquiryExcelDataSchema);
