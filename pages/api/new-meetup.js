import { MongoClient } from 'mongodb';

/*
  /api/new-meetup

  POST /api/new-meetup
*/

const MONGODB_PW = process.env['MONGODB_PW'];

async function handler(req, res) {
  if (req.method === 'POST') {
    // handle req
    const data = req.body;
    // connect to DB
    const client = await MongoClient.connect(
      `mongodb+srv://admin-demo:${MONGODB_PW}@nextjs-demo.iflv5.mongodb.net/meetups?retryWrites=true&w=majority`
    );
    const db = client.db();
    // get collection
    const meetupsCollection = db.collection('meetups');
    // attempt resource write
    const result = await meetupsCollection.insertOne(data);
    // close DB client
    client.close();
    // send response
    res.status(201).json({ message: 'Meetup created' });
  }
}

export default handler;
