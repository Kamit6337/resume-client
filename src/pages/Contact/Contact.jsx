import ReactIcons from "../../assets/icons";
import MapComponent from "../../lib/MapComponent";

const location = { latitude: 25.266497, longitude: 82.989469 };
const EMAIL = "amitprofessional007@gmail.com";

const Contact = () => {
  return (
    <div className="flex justify-between p-10">
      <div className="flex-1 self-end gap-1">
        <p className="underline underline-offset-4 mb-4">Contact</p>
        <p className="text-lg text-gray-600">Amit Kumar</p>
        <p className="text-gray-600 text-sm">{EMAIL}</p>
        <p className="text-gray-500 text-sm">
          Banaras Hindu University, Varanasi
        </p>
        <p className="text-gray-500 text-sm">Uttar Pradesh, India (221005)</p>
        <div className="flex items-center gap-5 text-3xl mt-2">
          <button>
            <a
              href="https://www.linkedin.com/in/amit-kumar-505084259/"
              target="_blank"
              rel="noreferrer"
            >
              {ReactIcons.linkedIn}
            </a>
          </button>
          <button>
            <a
              href="https://github.com/Kamit6337"
              target="_blank"
              rel="noreferrer"
            >
              {ReactIcons.github}
            </a>
          </button>
          <button>
            <a href={`mailto:${EMAIL}`} target="_blank" rel="noreferrer">
              {ReactIcons.mail}
            </a>
          </button>
        </div>
      </div>
      <div className="h-[500px] w-[60%]">
        <MapComponent
          latitude={location.latitude}
          longitude={location.longitude}
        />
      </div>
    </div>
  );
};

export default Contact;
