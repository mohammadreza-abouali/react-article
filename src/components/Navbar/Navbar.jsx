import styled from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar(props) {


  return (
    <div className={styled.headerWrapper}>
      <div className="container">
        <div className={styled.header}>
          <h3>{props.title}</h3>
          <ul>
            <li>
              <Link to="/">List Of Articles</Link>
            </li>
            <li>
              <Link to="/create-article">Article Creation</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
