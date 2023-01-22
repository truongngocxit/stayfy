import L from "leaflet";

const customLeafletMarker = L.divIcon({
  html: `<svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="22" cy="22" r="22" fill="#00B4D8"/>
  <path d="M22.7844 11.3964C22.2559 10.8679 21.3989 10.8679 20.8704 11.3964L11.3964 20.8704C10.8679 21.3989 10.8679 22.2559 11.3964 22.7844C11.925 23.3129 12.7819 23.3129 13.3104 22.7844L13.7068 22.388V31.3014C13.7068 32.0489 14.3128 32.6548 15.0603 32.6548H17.7671C18.5146 32.6548 19.1205 32.0489 19.1205 31.3014V28.5945C19.1205 27.847 19.7265 27.2411 20.474 27.2411H23.1808C23.9283 27.2411 24.5342 27.847 24.5342 28.5945V31.3014C24.5342 32.0489 25.1402 32.6548 25.8877 32.6548H28.5945C29.342 32.6548 29.9479 32.0489 29.9479 31.3014V22.388L30.3444 22.7844C30.8729 23.3129 31.7299 23.3129 32.2584 22.7844C32.7869 22.2559 32.7869 21.3989 32.2584 20.8704L22.7844 11.3964Z" fill="white"/>
  </svg>
  `,
  className: "customLeafletMarker",
});

export default customLeafletMarker;