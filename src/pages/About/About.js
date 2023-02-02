import styles from "./About.module.scss";
import FactItem from "./FactItem/FactItem";
import useFetchData from "../../custom-hooks/useFetchData";
import FounderItem from "./FounterItem/FounderItem";

const About = function () {
  const {
    about,
    about__Hero,
    about__Intro,
    about__Intro__Heading,
    about__Intro__Content,
    about__Facts,
    about__Facts__Heading,
    about__Facts__Items,
    about__Founders,
    about__Founders__Heading,
    about__Founders__List,
  } = styles;

  const {
    data: factItems,
    isLoading: isLoadingFacts,
    error: factsRequestError,
  } = useFetchData(
    "https://stayfy-d4fc1-default-rtdb.asia-southeast1.firebasedatabase.app/facts.json"
  );

  const {
    data: founders,
    isLoading: isLoadingFounders,
    error: foundersRequestError,
  } = useFetchData(
    "https://stayfy-d4fc1-default-rtdb.asia-southeast1.firebasedatabase.app/founders.json"
  );

  return (
    <div className={about}>
      <div className={about__Hero}>
        <img
          src={require("../../assets/about-background.webp")}
          alt="about-hero"
        />
      </div>
      <div className={about__Intro}>
        <h2 className={about__Intro__Heading}>About Stayfy</h2>
        <p className={about__Intro__Content}>
          Stayfy was born in 2018 when two Hosts welcomed three guests to their
          Da Lat home, and has since grown to over 4 million Hosts who have
          welcomed more than 1 billion guest arrivals in almost every country
          across the globe. Every day, Hosts offer unique stays and experiences
          that make it possible for guests to connect with communities in a more
          authentic way.
        </p>
      </div>
      <div className={about__Facts}>
        <h2 className={about__Facts__Heading}>Fast facts</h2>
        <div className={about__Facts__Items}>
          {!isLoadingFacts &&
            factItems.map((item) => <FactItem key={item.id} {...item} />)}
        </div>
      </div>
      <div className={about__Founders}>
        <h2 className={about__Founders__Heading}>Founders</h2>
        <div className={about__Founders__List}>
          {!isLoadingFounders &&
            founders.map((founder) => (
              <FounderItem
                key={founder.id}
                src={founder.image}
                name={founder.name}
                title={founder.title}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default About;
