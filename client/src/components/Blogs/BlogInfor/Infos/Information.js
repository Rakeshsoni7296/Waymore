import "./Information.css";
import Navigation from "../../../Base/Auxiliary/NativeNav/Navigation";
import BlogContent from "./BlogContent/BlogContent";
import UserProfile from "./UserProfile/UserProf";

const Information = (props) => {
  const ar = [props.info.title];
  return (
    <div className="blgou9yg7">
      <Navigation menus={ar} />
      <div className="hfusdgf">
        <UserProfile user={props.info.user} blogId={props.info.id} />
        <BlogContent review={props.info.reviews} blog={props.info} />
      </div>
    </div>
  );
};

export default Information;
