import mongoClient from '../db/index';

const COLLECTION = 'meetups';

const fetchAll = async (query, options) => {
  const client = await mongoClient;
  const db = client.db();
  const collection = db.collection(COLLECTION);
  const result = await collection.find(query, options).toArray();
  client.close();
  return result;
};

const createOne = async (data) => {
  const client = await mongoClient;
  const db = client.db();
  const collection = db.collection(COLLECTION);
  const result = await collection.insertOne(data);
  client.close();
  return result;
};

export default {
  fetchAll,
  createOne,
};
