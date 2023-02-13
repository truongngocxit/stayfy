import styles from "./TripItemDetails.module.scss";
import StarIcon from "../../../../components/UI/SVG/StarIcon";
import LocationIcon from "../../../../components/UI/SVG/LocationIcon";
import PhoneIcon from "../../../../components/UI/SVG/PhoneIcon";

const TripItemDetails = function ({ review, location, name, bookedDate }) {
  return (
    <div className={tripDetails}>
      <div className={tripDetails__UpperContainer}>
        <h3 className={tripDetails__Heading}>{name}</h3>

        <div className={tripDetails__Review}>
          <StarIcon />
          <span>{review}</span>
        </div>
      </div>
      <div className={tripDetails__LowerContainer}>
        <div className={tripDetails__Details}>
          <div className={tripDetails__Details__Item}>
            <LocationIcon />
            <span>{location}</span>
          </div>
          <div className={tripDetails__Details__Item}>
            <PhoneIcon />
            <span>323123123312</span>
          </div>
        </div>

        <p className={tripDetails__BookedDate}>
          Booked on:{" "}
          <strong>{new Date(bookedDate).toLocaleDateString("vi-vn")}</strong>
        </p>
      </div>
    </div>
  );
};

export default TripItemDetails;

const {
  tripDetails,
  tripDetails__UpperContainer,
  tripDetails__Heading,
  tripDetails__Review,
  tripDetails__LowerContainer,
  tripDetails__Details,
  tripDetails__Details__Item,
  tripDetails__BookedDate,
} = styles;
