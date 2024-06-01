import { useEffect } from "react";
import ReactIcons from "../../assets/icons";
import MapComponent from "../../lib/MapComponent";
import Header from "../../components/Header";

const location = { latitude: 25.266497, longitude: 82.989469 };
const EMAIL = "amitprofessional007@gmail.com";

const social_profile = [
  {
    title: "LinkedIn",
    icon: ReactIcons.linkedIn,
    link: "https://www.linkedin.com/in/amit-kumar-505084259/",
  },
  {
    title: "Github",
    icon: ReactIcons.github,
    link: "https://github.com/Kamit6337",
  },
  {
    title: "Mail",
    icon: ReactIcons.mail,
    link: `mailto:${EMAIL}`,
  },
];

const Contact = () => {
  useEffect(() => {
    document.title = "Resume | Contact";
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <Header to={`contact`} />
      <div className="flex justify-between p-10 tablet:py-20 tablet:flex-col tablet:gap-10">
        <div className="flex-1 self-end gap-1 tablet:self-start">
          <p className="underline underline-offset-4 mb-4">Contact</p>
          <p className="text-lg text-gray-600">Amit Kumar</p>
          <p className="text-gray-600 text-sm">{EMAIL}</p>
          <p className="text-gray-500 text-sm">
            Banaras Hindu University, Varanasi
          </p>
          <p className="text-gray-500 text-sm">Uttar Pradesh, India (221005)</p>
          <div className="flex items-center gap-5 text-3xl mt-2">
            {social_profile.map((obj, i) => {
              const { icon, link } = obj;

              return (
                <button
                  key={i}
                  className="hover:scale-125 transition-transform duration-300 hover:text-my_bg"
                >
                  <a href={link} target="_blank" rel="noreferrer">
                    {icon}
                  </a>
                </button>
              );
            })}
          </div>
        </div>
        <div className="h-[500px] w-[60%] tablet:w-full">
          <MapComponent
            latitude={location.latitude}
            longitude={location.longitude}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
