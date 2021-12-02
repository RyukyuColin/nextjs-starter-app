import mongoClient from '../db/index';

const COLLECTION = 'meetups';

const createOne = async (data) => {
  const client = await mongoClient;
  const db = client.db();
  const collection = db.collection(COLLECTION);
  const result = await collection.insertOne(data);
  client.close();
  return result;
};

export default {
  createOne,
};
