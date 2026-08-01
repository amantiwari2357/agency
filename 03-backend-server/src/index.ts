import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const PORT = process.env.PORT || 5003;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://amankumartiwari5255_db_user:AUqek2bcMSN1sn3x@cluster0.quzkmzg.mongodb.net/aexagenvcy?appName=Cluster0';

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB - Database: aexagenvcy'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
