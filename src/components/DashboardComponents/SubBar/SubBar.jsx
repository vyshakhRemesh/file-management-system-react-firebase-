import "./SubBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileArrowUp,
  faFileCirclePlus,
  faFolderPlus,
} from "@fortawesome/free-solid-svg-icons";

const SubBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light mt-2 py-2 bg-white px-4">
      <p>Root</p>

      <ul className="navbar-nav ms-auto">
        <li className="nav-item mx-2">
          <button className="btn btn-outline-dark">
            <FontAwesomeIcon icon={faFileArrowUp} className="me-2" />
            Upload File
          </button>
        </li>
        <li className="nav-item mx-2">
          <button className="btn btn-outline-dark">
            <FontAwesomeIcon icon={faFileCirclePlus} className="me-2" />
            Create File
          </button>
        </li>
        <li className="nav-item mx-2">
          <button className="btn btn-outline-dark">
            <FontAwesomeIcon icon={faFolderPlus} className="me-2" />
            Create Folder
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default SubBar;
