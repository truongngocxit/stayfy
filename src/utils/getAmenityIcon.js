import AirConditioning from "../components/UI/RoomFeaturesIcon/AirConditioning";
import Balcony from "../components/UI/RoomFeaturesIcon/Balcony";
import Barbecue from "../components/UI/RoomFeaturesIcon/Barbecue";
import Breakfast from "../components/UI/RoomFeaturesIcon/Breakfast";
import CityView from "../components/UI/RoomFeaturesIcon/CityView";
import Dryer from "../components/UI/RoomFeaturesIcon/Dryer";
import Essentials from "../components/UI/RoomFeaturesIcon/Essentials";
import ExtraBedware from "../components/UI/RoomFeaturesIcon/ExtraBedware";
import FireExtinguisher from "../components/UI/RoomFeaturesIcon/FireExtinguisher";
import FireAlarm from "../components/UI/RoomFeaturesIcon/FireAlarm";
import FirstAidKit from "../components/UI/RoomFeaturesIcon/FirstAidKit";
import FreeParking from "../components/UI/RoomFeaturesIcon/FreeParking";
import Fridge from "../components/UI/RoomFeaturesIcon/Fridge";
import Garden from "../components/UI/RoomFeaturesIcon/Garden";
import HairDryer from "../components/UI/RoomFeaturesIcon/HairDryer";
import HotKettle from "../components/UI/RoomFeaturesIcon/HotKettle";
import HotTub from "../components/UI/RoomFeaturesIcon/HotTub";
import HotWater from "../components/UI/RoomFeaturesIcon/HotWater";
import IndoorFireplace from "../components/UI/RoomFeaturesIcon/IndoorFireplace";
import Kitchen from "../components/UI/RoomFeaturesIcon/Kitchen";
import LongtermStay from "../components/UI/RoomFeaturesIcon/LongtermStay";
import MosquitoNet from "../components/UI/RoomFeaturesIcon/MosquitoNet";
import MountainView from "../components/UI/RoomFeaturesIcon/MountainView";
import NearBeach from "../components/UI/RoomFeaturesIcon/NearBeach";
import Pets from "../components/UI/RoomFeaturesIcon/Pets";
import Pool from "../components/UI/RoomFeaturesIcon/Pool";
import Safe from "../components/UI/RoomFeaturesIcon/Safe";
import SecurityCamera from "../components/UI/RoomFeaturesIcon/SecurityCamera";
import SecurityStaff from "../components/UI/RoomFeaturesIcon/SecurityStaff";
import SelfCheckin from "../components/UI/RoomFeaturesIcon/SelfCheckin";
import Shampoo from "../components/UI/RoomFeaturesIcon/Shampoo";
import ShowerGel from "../components/UI/RoomFeaturesIcon/ShowerGel";
import Smoking from "../components/UI/RoomFeaturesIcon/Smoking";
import TV from "../components/UI/RoomFeaturesIcon/TV";
import Washer from "../components/UI/RoomFeaturesIcon/Washer";
import Wifi from "../components/UI/RoomFeaturesIcon/Wifi";
import Workspace from "../components/UI/RoomFeaturesIcon/Workspace";

const getAmenityIcon = function (identifier) {
  switch (identifier) {
    case "hasAirCont":
      return {
        icon: <AirConditioning />,
        text: "Air conditioner",
        category: "Heating and cooling",
      };
    case "hasBalcony":
      return { icon: <Balcony />, text: "Balcony", category: "Outdoor" };
    case "hasBarbecue":
      return { icon: <Barbecue />, text: "Barbecue", category: "Outdoor" };
    case "hasBreakfast":
      return {
        icon: <Breakfast />,
        text: "Free breakfast",
        category: "Services",
      };
    case "hasDryer":
      return {
        icon: <Dryer />,
        text: "Dryer",
        category: "Bedroom and Laundry",
      };
    case "hasEssentials":
      return {
        icon: <Essentials />,
        text: "Essentials",
        category: "Essentials",
      };
    case "hasExtraBedware":
      return {
        icon: <ExtraBedware />,
        text: "Extra bedwares",
        category: "Bedroom and Laundry",
      };
    case "hasCityView":
      return {
        icon: <CityView />,
        text: "City skyline",
        category: "Scenic Views",
      };
    case "hasFireAlarm":
      return {
        icon: <FireAlarm />,
        text: "Fire alarms",
        category: "Home Safety",
      };
    case "hasFireExtinguisher":
      return {
        icon: <FireExtinguisher />,
        text: "Fire extinguisher",
        category: "Home Safety",
      };
    case "hasFirstAid":
      return {
        icon: <FirstAidKit />,
        text: "First aid kit",
        category: "Home Safety",
      };
    case "hasFreeParking":
      return {
        icon: <FreeParking />,
        text: "Free parking on-premises",
        category: "Services",
      };
    case "hasFridge":
      return {
        icon: <Fridge />,
        text: "Refrigerator",
        category: "Kitchen and Dining",
      };
    case "hasGarden":
      return { icon: <Garden />, text: "Floral garden", category: "Outdoor" };
    case "hasHairDryer":
      return { icon: <HairDryer />, text: "Hair dryer", category: "Bathroom" };
    case "hasHotKettle":
      return {
        icon: <HotKettle />,
        text: "Hot kettle",
        category: "Kitchen and Dining",
      };
    case "hasHotTub":
      return { icon: <HotTub />, text: "Hot tub", category: "Bathroom" };
    case "hasHotWater":
      return { icon: <HotWater />, text: "Hot water", category: "Bathroom" };
    case "hasIndoorFireplace":
      return {
        icon: <IndoorFireplace />,
        text: "Indoor fireplace",
        cateogry: "Indoor",
      };
    case "hasKitchen":
      return {
        icon: <Kitchen />,
        text: "Kitchen",
        category: "Kitchen and Dining",
      };
    case "hasLongtermStay":
      return {
        icon: <LongtermStay />,
        text: "Long-term stays allowed",
        category: "Services",
      };
    case "hasMosquitoNet":
      return {
        icon: <MosquitoNet />,
        text: "Mosquito nets",
        category: "Essentials",
      };
    case "hasMountainView":
      return {
        icon: <MountainView />,
        text: "Mountain views",
        category: "Scenic Views",
      };
    case "hasNearBeach":
      return {
        icon: <NearBeach />,
        text: "Beach views",
        category: "Scenic Views",
      };
    case "hasPets":
      return { icon: <Pets />, text: "Pets allowed", category: "Essentials" };
    case "hasPool":
      return { icon: <Pool />, text: "Pools on-premises", category: "Outdoor" };
    case "hasSafe":
      return { icon: <Safe />, text: "Safe", category: "Essentials" };
    case "hasSecurityCamera":
      return {
        icon: <SecurityCamera />,
        text: "Security cameras",
        category: "Home Safety",
      };
    case "hasSecurityStaff":
      return {
        icon: <SecurityStaff />,
        text: "Security staffs",
        category: "Home Safety",
      };
    case "hasSelfCheckin":
      return {
        icon: <SelfCheckin />,
        text: "Self check-in",
        category: "Services",
      };
    case "hasShampoo":
      return { icon: <Shampoo />, text: "Shampoo", category: "Bathroom" };
    case "hasShowerGel":
      return { icon: <ShowerGel />, text: "Shower gels", category: "Bathroom" };
    case "hasSmoking":
      return {
        icon: <Smoking />,
        text: "Smoking areas",
        category: "Essentials",
      };
    case "hasTV":
      return { icon: <TV />, text: "HDTV", category: "Living Room" };
    case "hasWasher":
      return {
        icon: <Washer />,
        text: "Washing Machine",
        category: "Bedroom and Laundry",
      };
    case "hasWifi":
      return {
        icon: <Wifi />,
        text: "High-speed Wifi",
        category: "Essentials",
      };
    case "hasWorkspace":
      return {
        icon: <Workspace />,
        text: "Workspaces",
        category: "Living Room",
      };

    default:
      throw new Error("Invalid icon key");
  }
};

export default getAmenityIcon;
