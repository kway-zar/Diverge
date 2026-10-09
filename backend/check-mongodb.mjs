import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
const url = process.env.DATABASE_URL;
console.log('DATABASE_URL present:', Boolean(url));
if (!url) {
  process.exit(1);
}

const client = new MongoClient(url, { serverSelectionTimeoutMS: 15000 });

try {
  await client.connect();
  const admin = client.db('admin');
  const result = await admin.command({ ping: 1 });
  console.log('PING_OK', JSON.stringify(result));
} catch (error) {
  console.error('MONGO_CONNECT_ERROR');
  console.error(error);
  process.exitCode = 1;
} finally {
  await client.close();
}
