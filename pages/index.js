import MeetupList from "@component/components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "NextJS meetup",
    image:
      "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/11/21/1051/Hyatt-Ahmedabad-P074-Exterior.jpg/Hyatt-Ahmedabad-P074-Exterior.16x9.jpg?imwidth=1280",
    address: "Next to Alpha One Mall, Vastrapur",
    description: "This is meetup for nextjs",
  },
  {
    id: "m2",
    title: "React meetup",
    image:
      "https://www.tajhotels.com/content/dam/luxury/hotels/taj-ahmedabad/Lobby%20Lounge.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg",
    address:
      "The Taj Skyline, Sindhu Bhavan Marg, PRL Colony, Thaltej, Ahmedabad",
    description: "This is meetup for reactjs",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups}></MeetupList>;
};

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

export default HomePage;
