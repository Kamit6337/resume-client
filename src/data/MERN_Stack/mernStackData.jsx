import ReactIcons from "../../assets/icons";
import CustomImages from "../../assets/images";

const mernStackData = [
  {
    title: "javascript",
    icon: ReactIcons.javascript,

    points: [
      "strong proficiency in JavaScript with expertise in ES6+ features",
      "understanding of asynchronous programming using async/await",
      "knowledge of higher order function and closure dfgsdhgdfd loream ipsum vfkvnja vskvnbsuadi skanui",
    ],
  },
  {
    title: "react js",
    icon: ReactIcons.reactjs,

    points: [
      "experienced in building efficient UI using React JS",
      "leveraging components, hooks and state management for scalable front-end Web Apps",
    ],
  },
  {
    title: "React router",
    icon: ReactIcons.reactRouter,

    points: [
      "Knowledgeable in implementing client-side routing in React App",
      "enabling seamless navigation and a smooth user experience",
    ],
  },
  {
    title: "redux",
    icon: ReactIcons.redux,

    points: [
      "Proficient in global state management with Redux",
      "Enabling centralised store for every data flow in complex React App",
    ],
  },
  {
    title: "react-query",
    icon: (
      <img
        src={CustomImages.reactQuery}
        className="w-12 tablet:w-10 mobile:w-8"
      />
    ),

    points: [
      "Familier with React-Query for efficient data fetching",
      "Using cached data for better performance and a seamless user experience",
    ],
  },
  {
    title: "tailwing css",
    icon: ReactIcons.tailwind,

    points: [
      "Competent in using Tailwind-CSS for rapid and utility-first styling",
      "creating consistent and responsive UIs with minimal CSS code",
    ],
  },
  {
    title: "Socket.io",
    icon: ReactIcons.socketIO,

    points: [
      "skilled in real-time communication",
      "Enabling bi-directional event-based communication between client and server",
    ],
  },
  {
    title: "node js",
    icon: ReactIcons.nodejs,
    points: [
      "Proficient in server-side JavaScript programming using Node.js",
      "enabling efficient and scalable application development.",
    ],
  },
  {
    title: "express js",
    icon: ReactIcons.express,
    points: [
      "Skilled in utilizing Express.js to create robust and maintainable server-side applications,",
      "simplifying routing, and enhancing middleware functionality to prevent unauthorized data access",
    ],
  },
  {
    title: "MongoDB",
    icon: ReactIcons.mongodb,

    points: [
      "Experienced in working with MongoDB, a NoSQL database",
      "seamless data storage and retrieval, ensuring efficient handling of large-scale data.",
    ],
  },
  {
    title: "REST-API",
    icon: (
      <img
        src={CustomImages.restApi}
        alt="rest-api"
        className="w-10 mobile:w-8 "
      />
    ),
    points: [
      "Proficient in designing and implementing RESTful APIs",
      "facilitating seamless communication between client and server for effective data exchange..",
    ],
  },
  {
    title: "Authentication/Authorization",

    icon: (
      <img
        src={CustomImages.authentication}
        alt="rest-api"
        className="w-10 mobile:w-8"
      />
    ),

    points: [
      "Well-versed in implementing secure user authentication and authorization mechanisms, ensuring data integrity and user privacy.",
    ],
  },
  {
    title: "Multimedia File Handling",
    icon: ReactIcons.multimedia,

    points: [
      "Skilled in handling multimedia files uploaded from clients",
      "ensuring proper storage, processing, and retrieval within the application.",
    ],
  },
  {
    title: "Mongoose",
    icon: (
      <img
        src={CustomImages.mongoose}
        alt="rest-api"
        className="w-10 mobile:w-8"
      />
    ),

    points: [
      "Proficient in using Mongoose to model application data and interact with MongoDB",
      "streamlining database operations and ensuring data consistency.",
    ],
  },
  {
    title: "Jsonwebtoken",
    icon: ReactIcons.jsonwebtoken,

    points: [
      " Experienced in implementing JSON Web Tokens (JWT) for secure and stateless authentication, enhancing the overall security of web applications.",
    ],
  },
  {
    title: "User/Admin Based Data",
    icon: ReactIcons.userAdmin,

    points: [
      " Capable of managing user and admin-specific data structures, ensuring proper segregation and access control within the application.",
    ],
  },
];

export default mernStackData;
