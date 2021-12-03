// import { MongoClient } from 'mongodb';
import meetupModel from './api/src/models/meetup';
import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  // fetch all meetups
  const meetups = await meetupModel.fetchAll({});

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
