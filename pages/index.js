import MeetupList from '../components/meetups/MeetupList';

const MOCK_MEETUPS = [
  {
    id: 1,
    title: 'First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Istana_%28Singapore%29.jpg/1280px-Istana_%28Singapore%29.jpg',
    address: '123 Lane Way, Singapore 12345',
    description: 'This is our very first meetup!',
  },
  {
    id: 2,
    title: 'Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Singapore_Merlion-at-Marina-Bay-01.jpg/1280px-Singapore_Merlion-at-Marina-Bay-01.jpg',
    address: '4th Street N, Singapore 98765',
    description: "This is our second meetup. It just keeps gettin' better!",
  },
];

function HomePage() {
  return <MeetupList meetups={MOCK_MEETUPS} />;
}

export default HomePage;
