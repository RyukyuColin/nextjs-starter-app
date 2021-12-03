// import mongoClient from '../lib/db/index';
import connectToDb from '../lib/db/index';

const COLLECTION = 'meetups';

const fetchOne = async (query = {}, options = {}) => {
  const { db } = await connectToDb();
  const collection = db.collection(COLLECTION);
  const result = await collection.findOne(query, options);
  return result;
};

const fetchAll = async (query = {}, options = {}) => {
  const { db } = await connectToDb();
  const collection = db.collection(COLLECTION);
  const result = await collection
    .find(query, options)
    .sort({ _id: -1 })
    .toArray();
  return result;
};

const createOne = async (data) => {
  const { db } = await connectToDb();
  const collection = db.collection(COLLECTION);
  const result = await collection.insertOne(data);
  return result;
};

export default {
  fetchOne,
  fetchAll,
  createOne,
};
