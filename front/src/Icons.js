function SearchIcon({ size }) {
  return (
    <svg viewBox="0 0 512 512" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}
function CollectionIcon({ size }) {
  return (
    <svg viewBox="0 0 512 512" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <path d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z" fill="currentColor" />
    </svg>
  );
}
function PlusIcon({ size }) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <path d="M14 7H9V2H7v5H2v2h5v5h2V9h5z" fill="currentColor" />
      <path fill="none" d="M0 0h16v16H0z" />
    </svg>
  );
}

function DownloadIcon({ size }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M11.5 0C5.149 0 0 5.148 0 11.5 0 17.851 5.149 23 11.5 23S23 17.851 23 11.5C23 5.148 17.851 0 11.5 0zm0 22C5.71 22 1 17.29 1 11.5S5.71 1 11.5 1 22 5.71 22 11.5 17.29 22 11.5 22zm.499-6.842V5h-1v10.149l-3.418-3.975-.758.652 4.678 5.44 4.694-5.439-.757-.653-3.439 3.984z" />
    </svg>
  );
}

function DownDirIcon({ size }) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M3 6l5 5.794L13 6z" />
    </svg>
  );
}

function ExternalIcon({ size }) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M15 7V1H9v1h4.29L7.11 8.18l.71.71L14 2.71V7h1zM1 15h12V9h-1v5H2V4h5V3H1v12z" />
    </svg>
  );
}
function PrevIcon({ size }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <polyline stroke="currentColor" points="16 4 7 12 16 20" fill="none" />
    </svg>
  );
}
function NextIcon({ size }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <polyline stroke="currentColor" points="8 4 17 12 8 20" fill="none" />
    </svg>
  );
}
function TasksIcon({ size }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={size} height={size}>
      <path fill="#185abd" d="M24.48,29.316l-9.505,9.505L1.588,25.434c-0.784-0.784-0.784-2.054,0-2.838l6.667-6.667	c0.784-0.784,2.054-0.784,2.838,0L24.48,29.316z" />
      <linearGradient id="5qKAcydctVb3hkGT27jhwa" x1="14.572" x2="43.188" y1="38.199" y2="9.583" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#4191fd" />
        <stop offset="1" stop-color="#55acfd" />
      </linearGradient>
      <path fill="url(#5qKAcydctVb3hkGT27jhwa)" d="M17.797,41.642l-6.667-6.667c-0.784-0.784-0.784-2.054,0-2.838L36.907,6.358	c0.784-0.784,2.054-0.784,2.838,0l6.667,6.667c0.784,0.784,0.784,2.054,0,2.838L20.634,41.642	C19.851,42.425,18.58,42.425,17.797,41.642z" />
    </svg>
  );
}
function NotesIcon({ size }) {
  return (
    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={size} height={size}>
      <path d="M 42.019531 4 C 41.350297 3.998125 40.569828 4.0454531 39.611328 4.1269531 L 8.3945312 6.4140625 C 5.8765313 6.6300625 5 8.2646562 5 10.222656 L 5 44.193359 C 5 45.718359 5.5463281 47.022625 6.8613281 48.765625 L 14.199219 58.238281 C 15.404219 59.762281 16.500734 60.089469 18.802734 59.980469 L 55.056641 57.800781 C 58.122641 57.585781 59 56.169391 59 53.775391 L 59 15.558594 C 59 14.251594 58.450641 13.926516 56.806641 12.728516 L 46.841797 5.7597656 C 45.035047 4.4547656 44.027234 4.005625 42.019531 4 z M 41.373047 6.9882812 C 43.348223 7.0202598 44.474406 7.7785 45.347656 8.453125 L 50.556641 12.201172 C 50.777641 12.311172 51.332016 12.970703 50.666016 12.970703 L 19.298828 14.845703 C 15.971828 15.067703 15.306156 15.176141 13.535156 13.744141 L 9.2128906 10.326172 C 8.7708906 9.8841719 8.9926094 9.3336094 10.099609 9.2246094 L 40.472656 7.0214844 C 40.791156 6.9939844 41.090879 6.9837129 41.373047 6.9882812 z M 53.671875 17.009766 C 54.582299 17.101627 55 17.84175 55 19.078125 L 55 51.304688 C 55 52.720687 54.7795 53.920344 52.8125 54.027344 L 18.839844 55.988281 C 16.872844 56.095281 16 55.442219 16 53.699219 L 16 21.257812 C 16 19.842813 16.437047 19.186125 17.748047 19.078125 L 53.251953 17.011719 C 53.402328 16.997969 53.541814 16.996643 53.671875 17.009766 z M 50 22.5 L 43 23 C 41.359 23.196 40.5 24 40.5 25 L 43.5 25.5 L 43.5 40.5 L 32 23.5 L 24.201172 24.1875 C 22.662172 24.3795 22.12375 25.7085 22.34375 26.6875 L 25 27 L 25 48 L 24 48.5 C 22 49 22.5 50 22.5 50.5 L 30.5 50 C 33 49.5 33 48 33 48 L 29 47 L 29 31 L 39.935547 47.970703 C 41.244547 49.599703 41.751 50.5 43.5 50.5 C 45 50.5 46.5 50 47.5 49 L 47.5 25 L 48.892578 24.732422 C 49.999578 24.500422 50.5 23.5 50 22.5 z" />
    </svg>
  );
}
function AccountsIcon({ size }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={size} height={size}>
      <linearGradient id="NqAl5bicO~9wmXV3Tvu1Ra" x1="24.5" x2="24.5" y1="7.032" y2="22.852" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#0571bf" />
        <stop offset="1" stop-color="#0268ba" />
      </linearGradient>
      <path fill="url(#NqAl5bicO~9wmXV3Tvu1Ra)" d="M24.5,7C16.492,7,10,13.492,10,21.5S16.492,36,24.5,36S39,29.508,39,21.5S32.508,7,24.5,7	L24.5,7z" />
      <linearGradient id="NqAl5bicO~9wmXV3Tvu1Rb" x1="14.228" x2="14.228" y1="14.219" y2="32.761" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#1684da" />
        <stop offset="1" stop-color="#107cd4" />
      </linearGradient>
      <path fill="url(#NqAl5bicO~9wmXV3Tvu1Rb)" d="M16.155,14.972c-1.32-0.505-2.753-0.781-4.25-0.781C5.33,14.191,0,19.521,0,26.096	c0,2.476,0.757,4.774,2.05,6.678c0.061-0.026,16.445-6.889,26.406-10.888C22.952,18.568,17.903,15.641,16.155,14.972z" />
      <linearGradient id="NqAl5bicO~9wmXV3Tvu1Rc" x1="38.228" x2="38.228" y1="18.746" y2="34.097" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#138cdd" />
        <stop offset="1" stop-color="#0c7dd4" />
      </linearGradient>
      <path fill="url(#NqAl5bicO~9wmXV3Tvu1Rc)" d="M48,28.373c0-5.317-4.31-9.627-9.627-9.627c-0.997,0-1.958,0.152-2.863,0.433	c-0.996,0.31-3.652,1.342-7.054,2.708c8.377,5.05,17.79,10.996,18.252,11.288C47.525,31.76,48,30.123,48,28.373z" />
      <linearGradient id="NqAl5bicO~9wmXV3Tvu1Rd" x1="17.13" x2="31.145" y1="24.083" y2="41.333" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#27a7ea" />
        <stop offset="1" stop-color="#1c94e3" />
      </linearGradient>
      <path fill="url(#NqAl5bicO~9wmXV3Tvu1Rd)" d="M46.709,33.175c-0.463-0.292-9.875-6.238-18.252-11.288	C18.495,25.885,2.111,32.748,2.05,32.774C2.467,33.388,5.627,38,11.904,38c5.03,0,16.176,0,26.354,0	C43.669,38,46.148,34.146,46.709,33.175z" />
    </svg>
  );
}

function ProjectsIcon({ size }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={size} height={size}>
      <path fill="#6c19ff" d="M28,17.5c0,3.038-1.791,5.5-4,5.5s-4-2.462-4-5.5s1.791-5.5,4-5.5S28,14.462,28,17.5z M24,23 c-3.314,0-6,4.029-6,9s2.686,9,6,9s6-4.029,6-9S27.314,23,24,23z" />
      <path fill="#6c19ff" d="M28.6,23H40c0-13-4-19-4-19s1,6,1,16h-3c0,0,0-11-5-18c2,9,2,18,2,18s-3.699,0-7,0s-7,0-7,0 s0-9,2-18c-5,7-5,18-5,18h-3c0-10,1-16,1-16s-4,6-4,19h11.4L6,27c0,14,7,19,7,19s-4-7-4-16l3-1c0,0,0,11,5,16c0,0-2-11-2-17l9-3 l9,3c0,6-2,17-2,17c5-5,5-16,5-16l3,1c0,9-4,16-4,16s7-5,7-19L28.6,23z" />
      <path fill="#2100c4" d="M27.56,20c-1.109,0-2.36,0-3.56,0s-2.451,0-3.56,0c0.662,1.78,2.006,3,3.56,3 S26.897,21.78,27.56,20z" />
      <path fill="#2100c4" d="M28.79,26.597C27.695,24.416,25.96,23,24,23s-3.695,1.416-4.79,3.597L24,25L28.79,26.597z" />
    </svg>
  );
}

function WatchlistIcon({ size }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={size} height={size}>
      <path fill="#424242" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z" />
      <path fill="#b71c1c" d="M31,12h-5v23.5c2.5,0,4.986,0.512,5,0.5S31,12,31,12z" />
      <path fill="#b71c1c" d="M17,12h5v23.5c-2.5,0-4.986,0.512-5,0.5S17,12,17,12z" />
      <path fill="#e53935" d="M22,12h-5l9,23.5c2.5,0,4.986,0.512,5,0.5S22,12,22,12z" />
    </svg>
  );
}

const Icon = ({ name, size = 24 }) => {
  const icons = {
    watchlist: WatchlistIcon,
    projects: ProjectsIcon,
    accounts: AccountsIcon,
    notes: NotesIcon,
    tasks: TasksIcon,
    search: SearchIcon,
    collection: CollectionIcon,
    plus: PlusIcon,
    download: DownloadIcon,
    prev: PrevIcon,
    next: NextIcon,
    downDir: DownDirIcon,
    external: ExternalIcon,
  };

  const Component = icons[name];
  return <Component size={size} name={name} />;
};

export { Icon };
