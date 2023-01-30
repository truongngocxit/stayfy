import styles from "./TripItemDetails.module.scss";
import StarIcon from "../../../../components/UI/SVG/StarIcon";
import LocationIcon from "../../../../components/UI/SVG/LocationIcon";
import PhoneIcon from "../../../../components/UI/SVG/PhoneIcon";
import { useState, useEffect } from "react";
import axios from "axios";

const TripItemDetails = function ({ review, location, name, bookedDate }) {
  const {
    tripDetails,
    tripDetails__Head,
    tripDetails__Head__Heading,
    tripDetails__Head__Review,
    tripDetails__Footer,
    tripDetails__Footer__Details,
    tripDetails__Footer__Details__Item,
    tripDetails__Footer__BookedDate,
  } = styles;
  return (
    <div className={tripDetails}>
      <div className={tripDetails__Head}>
        <h3 className={tripDetails__Head__Heading}>{name}</h3>
        <div className={tripDetails__Head__Review}>
          <StarIcon />
          <span>{review}</span>
        </div>
      </div>
      <div className={tripDetails__Footer}>
        <div className={tripDetails__Footer__Details}>
          <div className={tripDetails__Footer__Details__Item}>
            <LocationIcon />
            <span>{location}</span>
          </div>
          <div className={tripDetails__Footer__Details__Item}>
            <PhoneIcon />
            <span>323123123312</span>
          </div>
        </div>
        <p className={tripDetails__Footer__BookedDate}>
          Booked on:{" "}
          <strong>{new Date(bookedDate).toLocaleDateString("vi-vn")}</strong>
        </p>
      </div>
    </div>
  );
};

export default TripItemDetails;
