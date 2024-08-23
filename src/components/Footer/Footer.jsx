import { PiHeartbeatBold } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full text-center p-4 bg-gray-200">
      <p className="flex justify-center items-center text-lg"> 
        Made with
        <span>
          <PiHeartbeatBold className="mx-1"></PiHeartbeatBold>{" "}
        </span>
        by Jamil Aktar Ifat
      </p>
    </div>
  );
};

export default Footer;
