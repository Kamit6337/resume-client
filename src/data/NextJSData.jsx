import ReactIcons from "../assets/icons";
import CustomImages from "../assets/images";

const NextJSData = [
  {
    title: "Next JS",
    icon: ReactIcons.nextjs,
    points: [
      "React JS framework to enable developers to build fast, user-friendly web applications and static websites with ease",
      "Next.js allows for server-side rendering, this improves performance and SEO since search engines can index the content more effectively.",
      "supports static site generation, where pages are pre-rendered at build time. This can lead to faster load times and better performance",
      "a file-based routing system, where the file structure in the pages directory maps directly to the routes of the application.",
    ],
  },
  {
    title: "Next Auth",
    icon: (
      <img
        src={CustomImages.nextAuth}
        className="w-12 tablet:w-10 mobile:w-8"
      />
    ),
    points: [
      "a complete authentication solution for Next.js applications",
      "supports a wide range of authentication providers out of the box, including OAuth providers (like Google, Facebook, Twitter), email/password authentication, and custom authentication mechanisms",
      "includes security best practices by default, such as Cross-Site Request Forgery (CSRF) protection, secure cookies, and encryption",
      "provides built-in mechanisms to handle user sign-up, sign-in, and sign-out processes",
      "leverages Next.js API routes to create secure authentication endpoints, making it easy to integrate authentication in a full-stack Next.js application",
      "can customize NextAuth.js to fit our needs, including custom pages for sign-in, error handling, and more",
    ],
  },
  {
    title: "SEO Optimization",
    icon: ReactIcons.seo,
    points: [
      "Next.js involves using various techniques and features provided by the framework to improve the visibility and ranking of your website in search engine results",
      "pre-renders the page on each request, providing fully rendered HTML, which search engines can easily index",
      "Next.js generates HTML at build time, which can be served to users quickly and efficiently. This is useful for static content pages",
      "pre-fetching of pages through <Link> component help faster page loading",
      "other components like next/head to includ <head> section, use next/image component for optimized image loading, these are features given by framework for making SEO-friendly",
    ],
  },
  {
    title: "Server Side Rendering",
    icon: (
      <img src={CustomImages.ssr} className="w-12 tablet:w-10 mobile:w-8" />
    ),
    points: [
      "faster loading of initial page as complete HTML is send by the server",
      "SEO friendly as search engines can easily index the fully rendered HTML content",
      "devices with slower internet connections can benefit from SSR as the browser does less work.",
    ],
  },
  {
    title: "Server Actions",
    icon: ReactIcons.seo,

    points: [
      "a feature that allows developers to perform certain tasks or actions directly on the server, typically during the server-side rendering process or during API requests",
      "used to fetch data from databases, third-party APIs, or other external sources. All these happen in server, enhanced security of sensitive information",
      "form submissions by handling the form data on the server",
      "By keeping sensitive operations on the server, Server Actions help protect against client-side attacks and reduce the risk of exposing sensitive data",
      "feature takes away need of Route Handlers, no api calling to server is needed",
    ],
  },
];

export default NextJSData;
