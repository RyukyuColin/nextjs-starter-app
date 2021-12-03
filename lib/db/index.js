import { MongoClient } from 'mongodb';

const url = `${process.env['DB_HOST']}://${process.env['DB_USER']}:${process.env['DB_PW']}${process.env['DB_URI']}`;

export default async () => {
  const client = await MongoClient.connect(url, { useUnifiedTopology: true });
  return client;
};
