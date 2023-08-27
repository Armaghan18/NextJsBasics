import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First MeetUp",
    image:
      "https://www.muenchen.de/sites/default/files/styles/3_2_w320/public/2022-06/MARIENPLATZ%20OBEN%2043.jpg.webp",
    address: "Some Address , some city 12345",
    descripttion: "This is my fisrt tour,",
  },
  {
    id: "m2",
    title: "A Second MeetUp",
    image:
      "https://www.muenchen.de/sites/default/files/styles/3_2_w320/public/2022-06/MARIENPLATZ%20OBEN%2043.jpg.webp",
    address: "Some Address , some city 1eajraoenf2345",
    descripttion: "This is another amaizing tour,",
  },
];

function HomePage(props) {

  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
