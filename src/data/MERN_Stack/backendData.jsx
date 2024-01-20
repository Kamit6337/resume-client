import ReactIcons from "../../assets/icons";
import CustomImages from "../../assets/images/index";

const backendData = [
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
    title: "Socket.io",
    icon: ReactIcons.socketIO,

    points: [
      "Familiar with Socket.io for real-time, bidirectional communication between clients and servers, enhancing the responsiveness and interactivity of web applications.",
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
  {
    title: "Hashing Password using bcryptjs",
    icon: (
      <img
        src={CustomImages.hashing}
        alt="rest-api"
        className="w-10 mobile:w-8"
      />
    ),

    points: [
      " Proficient in employing bcryptjs for secure password hashing, enhancing user account security and protecting sensitive information.",
    ],
  },
  {
    title: "Google OAuth using Passport.js",
    icon: (
      <img
        src={CustomImages.google}
        alt="rest-api"
        className="w-10 mobile:w-8"
      />
    ),

    points: [
      "Skilled in integrating Google OAuth authentication using Passport.js",
      "providing users with a seamless and secure login experience through their Google accounts.",
    ],
  },
];

export default backendData;
