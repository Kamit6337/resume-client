import ReactIcons from "../../assets/icons";
import CustomImages from "../../assets/images";

const frontend = [
  {
    title: "html",
    icon: ReactIcons.html,
    points: [
      "proficient in creating well-structured and semantic markup using HTML",
      "ensure accessibility and SEO optimization",
    ],
  },
  {
    title: "css",
    icon: ReactIcons.css,

    points: [
      "skilled in crafting responsive and visually appealing UI with CSS",
      "experience with flexbox, grid layout and media query",
    ],
  },
  {
    title: "javascript",
    icon: ReactIcons.javascript,

    points: [
      "strong proficiency in JavaScript with expertise in ES6+ features",
      "understanding of asynchronous programming using async/await",
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
    title: "Socket.io",
    icon: ReactIcons.socketIO,

    points: [
      "skilled in real-time communication",
      "Enabling bi-directional event-based communication between client and server",
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
];
export default frontend;
