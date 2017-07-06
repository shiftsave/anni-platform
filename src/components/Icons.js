import React from "react";
import PropTypes from "prop-types";

export const Icons = props => {
  const { name, size } = props;
  let pathArray;
  let polylinePoints;
  let transform;

  // Extract svg paths per icon into an array and provide a unique name
  switch (name) {
    case "add":
      pathArray = ["M24.5 8L24.5 40M8 24.5L40 24.5"];
      break;

    case "arrow-back":
      pathArray = [
        "M14.3479659,20 L28.8934222,4.76190299 L23.1065778,-0.761902987 L-0.529784118,24 L23.1065778,48.761903 L28.8934222,43.238097 L14.3479659,28 L48,28 L48,20 L14.3479659,20 Z"
      ];
      break;

    case "audio":
      pathArray = [
        "M24,4 C21.2710636,4 19.0588235,6.31548236 19.0588235,9.17177459 L19.0588235,22.9631735 C19.0588235,25.8194657 21.2710636,28.1349481 24,28.1349481 C26.7289364,28.1349481 28.9411765,25.8194657 28.9411765,22.9631735 L28.9411765,9.17177459 C28.9411765,6.31548236 26.7289364,4 24,4 L24,4 Z",
        "M36 19.2249135L36 22.6727632C35.9999999 29.337445 30.6274169 34.7402371 24 34.7402371 17.3725831 34.7402371 12.0000001 29.337445 12 22.6727632L12 19.2249135M24 35.83391L24 41.5531389M16.4470588 42.5294118L31.0689076 42.5294118"
      ];
      break;

    case "cancel":
      pathArray = ["M9 9L39.7461162 39.7461162M39.7461162 9L9 39.7461162"];
      break;

    case "confirm":
      polylinePoints = ["44 12 17.286 36 4 21.818"];
      break;

    case "delete":
      pathArray = [
        "M8,12.8 L11.5555556,12.8 L40,12.8 L8,12.8 Z M36.4444444,12.8 L36.5,40 L11.5,40 L11.5555556,12.8 L36.4444444,12.8 Z M16.5,12.8 L16.5,8 L30.7222222,8 L30.7222222,12.8 L16.5,12.8 Z"
      ];
      break;

    case "logo":
      pathArray = [
        "M4.84502033,26.511738 C4.62705793,26.511738 4.45,26.3231855 4.45,26.091073 L4.45,19.020665 C4.45,18.7885525 4.62705793,18.6 4.84502033,18.6 L6.35497967,18.6 C6.57294207,18.6 6.75,18.7885525 6.75,19.020665 L6.75,26.091073 C6.75,26.3231855 6.57294207,26.511738 6.35497967,26.511738 L4.84502033,26.511738 Z M43.1549797,26.511738 L41.6450203,26.511738 C41.4270579,26.511738 41.25,26.3238078 41.25,26.091073 L41.25,19.020665 C41.25,18.7885525 41.4270579,18.6 41.6450203,18.6 L43.1549797,18.6 C43.3729421,18.6 43.55,18.7885525 43.55,19.020665 L43.55,26.091073 C43.55,26.3238078 43.3729421,26.511738 43.1549797,26.511738 Z",
        "M23.9997506,34.125 C14.506386,34.125 6.75,29.5566204 6.75,28.8869346 L6.75,15.2137232 C6.75,14.5433796 7.30888821,14 7.99919984,14 L40.0008002,14 C40.6911118,14 41.25,14.5433796 41.25,15.2137232 L41.25,28.8869346 C41.25,29.5566204 33.4931152,34.125 23.9997506,34.125 Z",
        "M12.7875,23.775 C12.3111544,23.775 11.925,23.3888456 11.925,22.9125 C11.925,22.4361544 12.3111544,22.05 12.7875,22.05 C13.2638456,22.05 13.65,22.4361544 13.65,22.9125 C13.65,23.3888456 13.2638456,23.775 12.7875,23.775 Z M35.2125,23.775 C34.7361544,23.775 34.35,23.3888456 34.35,22.9125 C34.35,22.4361544 34.7361544,22.05 35.2125,22.05 C35.6888456,22.05 36.075,22.4361544 36.075,22.9125 C36.075,23.3888456 35.6888456,23.775 35.2125,23.775 Z",
        "M4.45,21.292 L5.3,22.142 C5.3,22.611442 4.91944204,22.992 4.45,22.992 L1,22.992 C0.530557963,22.992 0.15,22.611442 0.15,22.142 C0.15,21.672558 0.530557963,21.292 1,21.292 L4.45,21.292 Z M43.55,22.992 L42.7,22.142 C42.7,21.672558 43.080558,21.292 43.55,21.292 L47,21.292 C47.469442,21.292 47.85,21.672558 47.85,22.142 C47.85,22.611442 47.469442,22.992 47,22.992 L43.55,22.992 Z"
      ];
      break;

    case "more":
      pathArray = [
        "M24,45 C35.5979797,45 45,35.5979797 45,24 C45,18.6984213 43.0354327,13.855692 39.7945803,10.160094 C35.9455934,5.77103021 30.2964011,3 24,3 C12.4020203,3 3,12.4020203 3,24 C3,35.5979797 12.4020203,45 24,45 Z",
        "M25,23 L25,18 L25,17 L23,17 L23,18 L23,23 L18,23 L17,23 L17,25 L18,25 L23,25 L23,30 L23,31 L25,31 L25,30 L25,25 L30,25 L31,25 L31,23 L30,23 L25,23 Z"
      ];
      break;

    case "notification":
      pathArray = [
        "M15.0509936,27.4087798 C14.8920962,27.6524173 15.1306021,27.9590316 15.4077933,27.8671109 L21.0206746,26.7481595 C21.2617382,26.6680072 21.4912921,26.8960596 21.4113638,27.1361984 L16.8864659,43.5941348 C16.7732875,43.9338278 17.2362319,44.1590176 17.4363722,43.8616271 L32.9466086,19.5404969 C33.1087031,19.2990858 32.8756323,18.9892909 32.5971623,19.0764406 L27.4596942,19.3922788 C27.2295009,19.4641614 27.0088989,19.2577374 27.0674064,19.024596 L31.0666962,4.38344483 C31.1511005,4.04661439 30.6974277,3.85036851 30.5078379,4.14171571 L15.0509936,27.4087798 Z"
      ];
      break;

    case "popout":
      polylinePoints = ["29.333 8 40 8 40 18.667", "18.667 40 8 40 8 29.33"];
      pathArray = ["M40 8L27.5555556 20.4444444M8 40L20.4444444 27.5555556"];
      break;

    case "resize":
      pathArray = [
        "M17.333 10 30.667 10 30.667 27 30.667 38 17.333 38z",
        "M30.667 10 39.5 10 44 10 44 38 30.667 38z",
        "M4 10 17.333 10 17.333 38 4 38 4 20z"
      ];
      break;

    case "share":
      pathArray = [
        "M27.1099686,38.2704941 C27.0992877,35.7746359 27.0779258,30.7829195 27.0779258,30.7829195 C16.6675172,30.7145825 5.63493776,37.4563169 4.71283499,37.863406 C3.79073221,38.270495 4.02716881,37.0001076 4.02716881,37.0001076 C4.02716881,37.0001076 12.7253557,19.3003088 27.1194508,16.4325496 C27.1194508,16.4325496 27.1194508,12.0625138 27.1194508,9.87749592 C27.1194508,9.11036941 28.2923193,8.69891055 28.8787535,9.26030763 C33.0313325,13.2355969 40.8850931,20.6552529 43.6303,23.2832563 C44.288071,23.9129445 43.9262099,24.4396997 43.6303,24.7220868 C41.1380509,27.1004429 35.9569757,32.0259277 35.9569757,32.0259277 L29.0254683,38.6615751 C28.3901291,39.2697959 27.1131293,39.0090752 27.1099686,38.2704941 Z"
      ];
      break;

    case "video":
      pathArray = [
        "M37.423 19.018 31 23.571 43.091 32.143 43.091 15z",
        "M5 12 19 12 30.909 12 30.909 36 5 36z"
      ];
      break;

    case "view":
      pathArray = [
        "M24,31.3705357 C27.8839246,31.3705357 31.0324675,28.2944921 31.0324675,24.5 C31.0324675,22.6427777 30.2781919,20.9576694 29.0525953,19.7211144 C27.7741748,18.4312631 25.9829294,17.6294643 24,17.6294643 C20.1160754,17.6294643 16.9675325,20.7055079 16.9675325,24.5 C16.9675325,28.2944921 20.1160754,31.3705357 24,31.3705357 Z",
        "M5,24.5 C5,24.5 11.9090909,11 24,11 C28.9864091,11 33.091485,13.2961046 36.1940712,15.9944418 C40.6145515,19.8389593 43,24.5 43,24.5 C43,24.5 36.0909091,38 24,38 C11.9090909,38 5,24.5 5,24.5 Z"
      ];
      break;

    default:
      break;
  }

  // Map the paths of the selected svg into a readable SVG path element
  const paths = pathArray &&
    pathArray.map((path, index) => {
      return (
        <path d={path} key={`${path.length}-${index}`} transform={transform} />
      );
    });

  const polyline = polylinePoints &&
    polylinePoints.map(path => {
      return <polyline points={path} key={path.length} />;
    });

  // Turn names into readable titles
  const iconTitle = `${name.replace(/-/g, " ")} icon`;

  // Return the mapped path elements into a <svg /> element
  return (
    <svg
      viewBox="0 0 48 48"
      id={name}
      className={name}
      width={size}
      height={size}
      {...props}
    >
      <title>{iconTitle}</title>
      {paths}
      {polyline}
    </svg>
  );
};

// Define Icon Prop Types
Icons.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.number
};

Icons.defaultProps = {
  name: "",
  size: 48
};
