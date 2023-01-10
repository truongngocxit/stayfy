import styles from "./SearchSuggestion.module.scss";
import LocationIcon from "../../UI/SVG/LocationIcon";
export default function SearchSuggestion({ search }) {
  const { searchSuggestion } = styles;
  return (
    <li className={searchSuggestion}>
      <LocationIcon />
      <span>{search}</span>
    </li>
  );
}
