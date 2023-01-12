import styles from "./Profile.module.scss";
import TopNav from "../../components/TopNav/TopNav";
import StaticFooter from "../../components/Footer/StaticFooter";
import ProfileNav from "./ProfileNav/ProfileNav";
import ProfileSettings from "./ProfileSettings/ProfileSettings";
const Profile = function () {
  const { profile, profile__Nav } = styles;
  return (
    <>
      <TopNav />
      <div className={profile}>
        <ProfileNav className={profile__Nav} />
        <ProfileSettings items={[]} />
      </div>
      <StaticFooter />
    </>
  );
};

export default Profile;
