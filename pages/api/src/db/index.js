import { MongoClient } from 'mongodb';

const MONGODB_USER = process.env['MONGODB_USER'];
const MONGODB_PW = process.env['MONGODB_PW'];

export default (async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://${MONGODB_USER}:${MONGODB_PW}@nextjs-demo.iflv5.mongodb.net/meetups?retryWrites=true&w=majority`
  );

  return client;
})();
