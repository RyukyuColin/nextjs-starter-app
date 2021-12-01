import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

const MONGODB_PW = process.env['MONGODB_PW'];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  // connect to DB
  const client = await MongoClient.connect(
    `mongodb+srv://admin-demo:${MONGODB_PW}@nextjs-demo.iflv5.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();
  // get collection
  const meetupsCollection = db.collection('meetups');
  // fetch meetups
  const meetups = await meetupsCollection.find().toArray();

  // close db connection
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
      })),
    },
    revalidate: 10,
  };
}
export default HomePage;
