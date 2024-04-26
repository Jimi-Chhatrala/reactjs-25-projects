import { Outlet, Link } from "react-router-dom";
import "./style.css";
import data from "./data";

const Links = () => {
  const dataList = data.map((element) => {
    return (
      <li>
        <Link className="Link" to={"/reactjs-25-projects/" + element.link}>
          {element.label}
        </Link>
      </li>
    );
  });

  return (
    <>
      <h3>Explore below ReactJS Projects</h3>
      <hr />
      <nav>
        <ul>{dataList}</ul>
      </nav>

      <hr />
      <Outlet />
    </>
  );
};

export default Links;
