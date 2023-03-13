import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  }
}

export async function getStaticProps(context) {

  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
        image: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/11/21/1051/Hyatt-Ahmedabad-P074-Exterior.jpg/Hyatt-Ahmedabad-P074-Exterior.16x9.jpg?imwidth=1280",
        title: "ReactJS meetup",
        address: "Next to Alpha One Mall, Vastrapur",
        description: "This is meetup for nextjs",
      }
    }
  }
}

export default MeetupDetails;
