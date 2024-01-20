import ReactIcons from "../assets/icons";
import CustomImages from "../assets/images";

const PortfolioData = [
  {
    title: "OnClick",
    category: "Chat Application",
    tech: "React JS, Socket.io, Redux, React-Query, Tailwind-CSS, Node JS, Express JS, MongoDB, Mongoose, Passport.js, JsonWebToken",
    image: CustomImages.chat,
    details: [
      "where you can chat with individual or form a group to chat",
      "send messages, images, files and videos while chatting",
      "custom and OAuth login/signup functionality",
    ],
    icons: [
      {
        icon: ReactIcons.reactjs,
        name: "React JS",
      },
      {
        icon: ReactIcons.socketIO,
        name: "Socket IO",
      },
      {
        icon: ReactIcons.redux,
        name: "Redux",
      },
      {
        icon: (
          <img
            src={CustomImages.reactQuery}
            className="w-10 sm_lap:w-8 tablet:w-6"
          />
        ),
        name: "React-Query",
      },
      {
        icon: ReactIcons.tailwind,
        name: "Tailwind CSS",
      },
      {
        icon: ReactIcons.nodejs,
        name: "Node JS",
      },
      {
        icon: ReactIcons.express,
        name: "Express JS",
      },
      {
        icon: ReactIcons.mongodb,
        name: "MongoDB",
      },
      {
        icon: (
          <img
            src={CustomImages.mongoose}
            alt="mongoose"
            className="w-20 sm_lap:w-16 target:w-12"
          />
        ),
        name: "Mongoose",
      },
      {
        icon: ReactIcons.jsonwebtoken,
        name: "JWT",
      },
    ],
  },
  {
    title: "Notable",
    category: "CRUD based Application",
    tech: "React JS,React-Quill, Socket.io, React-Query, Tailwind-CSS, Node JS, Express JS, MongoDB, Mongoose, Passport.js, JsonWebToken",
    image: CustomImages.notable,
    details: [
      "here you can make notes and create notebook to categorise",
      "save notes with text, images and file in it",
      "you can also download the notes in pdf",
      "enabling text-editor to highlight or cutomise your text",
    ],
    icons: [
      {
        icon: ReactIcons.reactjs,
        name: "React JS",
      },
      {
        icon: (
          <img
            src={CustomImages.reactQuery}
            className="w-10 sm_lap:w-8 tablet:w-6"
          />
        ),
        name: "React-Query",
      },

      {
        icon: ReactIcons.redux,
        name: "Redux",
      },

      {
        icon: ReactIcons.tailwind,
        name: "Tailwind CSS",
      },
      {
        icon: ReactIcons.socketIO,
        name: "Socket IO",
      },
      {
        icon: ReactIcons.nodejs,
        name: "Node JS",
      },
      {
        icon: ReactIcons.express,
        name: "Express JS",
      },
      {
        icon: ReactIcons.mongodb,
        name: "MongoDB",
      },
      {
        icon: (
          <img
            src={CustomImages.mongoose}
            alt="mongoose"
            className="w-20 sm_lap:w-16 target:w-12"
          />
        ),
        name: "Mongoose",
      },
      {
        icon: ReactIcons.jsonwebtoken,
        name: "JWT",
      },
    ],
  },
  {
    title: "VwFlex",
    category: "Video Streaming Application",
    tech: "Next JS, Tailwind-CSS, Next-Auth, MongoDB, Mongoose, JsonWebToken",
    image: CustomImages.vwflex,
    details: [
      "It is like Netflix, Amazon Prime, Hotstar where a list of different categories/genres of movies/tv shows are provided",
      "watch whichever like, whenever have free time",
      "gives recommendation based on movie/tv shows which is currently watching",
      "create own watchlist to watch later",
      "get access after paying subscription fee for a year, cancel anytime",
    ],
    icons: [
      {
        icon: ReactIcons.nextjs,
        name: "Next JS",
      },
      {
        icon: ReactIcons.tailwind,
        name: "Tailwind CSS",
      },
      {
        icon: (
          <img
            src={CustomImages.axios}
            className="w-12 tablet:w-10 mobile:w-8"
          />
        ),
        name: "Axios",
      },
      {
        icon: (
          <img
            src={CustomImages.reactQuery}
            className="w-10 sm_lap:w-8 tablet:w-6"
          />
        ),
        name: "React-Query",
      },
      {
        icon: (
          <img
            src={CustomImages.nextAuth}
            className="w-8 tablet:w-6 mobile:w-4"
          />
        ),
        name: "Next-Auth",
      },
      {
        icon: ReactIcons.mongodb,
        name: "MongoDB",
      },
      {
        icon: (
          <img
            src={CustomImages.mongoose}
            alt="mongoose"
            className="w-20 sm_lap:w-16 target:w-12"
          />
        ),
        name: "Mongoose",
      },
      {
        icon: ReactIcons.jsonwebtoken,
        name: "JWT",
      },
    ],
  },
  {
    title: "AddToCart",
    category: "E-Commerce Application",
    tech: "Next JS, Tailwind-CSS, Next-Auth, RazorPay API, MongoDB, Mongoose, JsonWebToken",
    image: CustomImages.addtocart,
    details: [
      "like Amazon, Flipkart or any other e-Commerce platform, see a collections of products",
      "filter products based on categories, rating, gender",
      "sort product list based on rating or price",
      "payment mechanism using RazorPay which accept Debit and Credit card, Net Banking and UPI Payment",
      "create wtachlist of products to buy them later",
      "admin can add new product, update existing product and delete product from Frontend page",
    ],
    icons: [
      {
        icon: ReactIcons.nextjs,
        name: "Next JS",
      },
      {
        icon: ReactIcons.tailwind,
        name: "Tailwind CSS",
      },
      {
        icon: (
          <img
            src={CustomImages.axios}
            className="w-12 tablet:w-10 mobile:w-8"
          />
        ),
        name: "Axios",
      },
      {
        icon: (
          <img
            src={CustomImages.reactQuery}
            className="w-10 sm_lap:w-8 tablet:w-6"
          />
        ),
        name: "React-Query",
      },
      {
        icon: (
          <img
            src={CustomImages.nextAuth}
            className="w-8 tablet:w-6 mobile:w-4"
          />
        ),
        name: "Next-Auth",
      },
      {
        icon: ReactIcons.mongodb,
        name: "MongoDB",
      },
      {
        icon: (
          <img
            src={CustomImages.mongoose}
            alt="mongoose"
            className="w-20 sm_lap:w-16 target:w-12"
          />
        ),
        name: "Mongoose",
      },
      {
        icon: ReactIcons.jsonwebtoken,
        name: "JWT",
      },
    ],
  },
];

export default PortfolioData;
