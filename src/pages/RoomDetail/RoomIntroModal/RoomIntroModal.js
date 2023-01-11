import styles from "./RoomIntroModal.module.scss";
import CloseIcon from "../../../components/UI/SVG/CloseIcon";

const RoomIntroModal = function () {
  const { introModal, introModal__CloseBtn, introModal__Content } = styles;
  return (
    <div className={introModal}>
      <button className={introModal__CloseBtn}>
        <CloseIcon />
      </button>
      <div className={introModal__Content}>
        <h1>About this place</h1>
        <p>
          Enjoy your stay in Dalat on the second floor of a 20th century French
          colonial mansion. It features self check-in, a private bathroom,
          kitchenette, and washing machine. Located in the heart of Dalat, the
          studio is merely steps away from an abundance of shops, restaurants,
          and bars. The studio can host 2 people, perfect for solo travellers or
          couples. The space The building that houses this lovely studio was
          built during the French colonization period in the 20th century. A
          recent renovation has just been completed to refurnish the apartment
          and bring its facilities up to today's standards. The charm of the
          French Colonial architectural style is still lovingly reserved as a
          reminiscence of the city's history. The studio is on the second floor
          of the building (2 floors above the entrance). ✻ Self Check-in with
          Keypad Lock ✻ Easily check yourself in with the keypad lock, at any
          time during your stay. Simply enter a passcode and you are in. No more
          having to share or look after keys. ✻ Fully Furnished ✻ - Kitchenette:
          Basic kitchen appliances, tools, and tableware are provided for light
          cooking inside the apartment. Please clean up after use. - Laundry:
          There is a washing machine for your use in the room. A drying rack,
          iron and ironing board are also included. - Private bathroom with hot
          water available in both shower and sink. - 50-inch TV & TV box with
          Netflix and ClipTV subscription - WiFi Internet Access ✻ Amenities ✻
          We provide towels, linen, washing detergent, soap, shampoo, hairdryer,
          toothbrush and toothpaste. ✻ Sleeping Arrangements ✻ 1 queen size bed
          with spring mattress. ✻ Shared Balcony ✻ There is a shared balcony
          with seating just outside the room. ✻ Parking ✻ Parking on premise is
          only available for motorbikes. We are unable to provide parking space
          for cars. There are paid parking lots within 1 kilometer of the house.
          Guest access From check-in to check-out, the studio is entirely yours
          to enjoy. You will also have 24/7 access with no curfew. Other things
          to note This is a self check-in unit. Detailed instructions will be
          sent out prior to check-in. Please follow the instructions to make
          sure you will be able to access the place. All guests are required to
          disclose their IDs or passports before check-in. The cleaning fee only
          covers the cost of cleaning the apartment after you have checked out.
          It does not include daily cleaning service, which is available for
          additional charges. Children must be under active supervision by a
          parent or guardian, at all times. All responsibility and duty of care
          for them must be provided by you, including their personal equipment
          and needs.
        </p>
      </div>
    </div>
  );
};

export default RoomIntroModal;
