import { Link } from "react-router-dom";
import SocialIcon from "./SocialIcon";
import { mdiGithub, mdiFacebook, mdiTwitter } from "@mdi/js";

const DropdownDialog = () => {
  return (
    <>
      <div className="flex flex-col gap-2 w-[200px] h-auto bg-primary-transparent p-8 rounded-xl z-10">
        <Link
          to="/"
          className="hover:ml-2 active:underline underline-offset-2 transition-all active:opacity-50 "
        >
          <span className="hover:after:content-['↗'] transition-all">
            Projects
          </span>
        </Link>
        <Link
          to="/"
          className="hover:ml-2 active:underline underline-offset-2 transition-all active:opacity-50"
        >
          <span className="hover:after:content-['↗'] transition-all">
            Services
          </span>
        </Link>
        <Link
          to="/"
          className="hover:ml-2 active:underline underline-offset-2  transition-all active:opacity-50"
        >
          <span className="hover:after:content-['↗'] transition-all">Blog</span>
        </Link>
      </div>
    </>
  );
};

export default DropdownDialog;
