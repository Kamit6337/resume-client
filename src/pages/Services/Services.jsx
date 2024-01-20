import { useEffect } from "react";
import Header from "../../components/Header";

const Services = () => {
  useEffect(() => {
    document.title = "Resume | Services";
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header to={"service"} />
    </>
  );
};

export default Services;
