import meetupModel from '../api/src/models/meetup';

import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetailsPage() {
  return <MeetupDetail />;
}

export async function getStaticPaths() {
  const meetups = await meetupModel.fetchAll({}, { _id: 1 });

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}
export async function getStaticProps(context) {
  // fetch data for single meetup
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {},
    },
  };
}
export default MeetupDetailsPage;
