import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
const base = process.env.DATABASE_URL;
if (!base) {
  console.log('NO_DATABASE_URL');
  process.exit(1);
}

const candidates = [
  { name: 'base', url: base },
  { name: 'tls-true', url: `${base}&tls=true` },
  { name: 'tls-allow-invalid', url: `${base}&tls=true&tlsAllowInvalidCertificates=true` },
  { name: 'direct', url: base.replace('mongodb+srv://', 'mongodb://') },
];

for (const candidate of candidates) {
  const client = new MongoClient(candidate.url, {
    serverSelectionTimeoutMS: 15000,
    tlsAllowInvalidCertificates: candidate.name.includes('invalid'),
    tls: true,
  });

  try {
    await client.connect();
    const result = await client.db('admin').command({ ping: 1 });
    console.log(`${candidate.name}: SUCCESS`);
    console.log(JSON.stringify(result));
    await client.close();
    process.exit(0);
  } catch (error) {
    console.log(`${candidate.name}: FAIL`);
    console.log(error?.message || String(error));
    await client.close();
  }
}

console.log('ALL_MONGO_CANDIDATES_FAILED');
process.exit(1);
