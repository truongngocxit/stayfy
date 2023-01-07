import styles from "./MainLogo.module.scss";

export default function MainLogo() {
  const { mainLogo, mainLogo__Text } = styles;
  return (
    <div className={mainLogo}>
      <Logo />
      <h2 className={mainLogo__Text}>Stayfy</h2>
    </div>
  );
}

function Logo({ className }) {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="22" cy="22" r="22" fill="#00B4D8" />
      <path
        d="M31.5625 33H13.7407C13.7407 33 13.3485 32.9732 13.1894 32.8088C13.0428 32.6573 13.0068 32.2986 13.0068 32.2986L13.0068 18.7599C13.0068 18.7599 12.9721 18.3809 13.0592 18.163C13.1467 17.9443 13.4262 17.7153 13.4262 17.7153L21.7605 11.2985C21.7605 11.2985 22.08 11 22.2847 11C22.4894 11 22.8613 11.2985 22.8613 11.2985L31.1432 17.7153C31.1432 17.7153 31.38 17.9541 31.4577 18.163C31.5394 18.3828 31.5625 18.7599 31.5625 18.7599V25.7305C31.5625 25.7305 29.4518 24.2952 26.8974 24.4372C24.6835 24.5603 23.182 26.226 21.0267 25.7305C19.1414 25.2971 17.4099 24.4372 17.4099 24.4372"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
