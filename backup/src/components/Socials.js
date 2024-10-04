import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Socials.scss";

function Socials() {
  return (
    <div className="socials-component">
      <h1>Socials</h1>
      <div className="socials-container">
        {/* FONT ICON  */}
        <i>
          <FontAwesomeIcon icon={["fab", "facebook"]} />
        </i>
        {/* FONT ICON  */}
        <i>
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </i>
        {/* FONT ICON  */}
        <i>
          <FontAwesomeIcon icon={["fab", "instagram"]} />
        </i>
      </div>

      <div className="copyright">
        <FontAwesomeIcon icon="fa-copyright" />
        Jacob Malmberg
      </div>
    </div>
  );
}

export default Socials;
