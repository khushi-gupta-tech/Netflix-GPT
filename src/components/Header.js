import { useNavigate } from "react-router-dom";
import { LOGO, USER_AVATAR } from "../utils/constants";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
      navigate("/error")
      });
  };
  return (
    <div className="absolute w-full  px-7 py-1  bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-40" src={LOGO} alt="logo" />
      <div className="flex p-2">
        <img className="w-12 h-12 " src={USER_AVATAR} alt="userIcon" />
        <button onClick={handleSignOut} className="font-bold text-white">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
