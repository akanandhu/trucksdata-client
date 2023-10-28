import Link from "next/link";
import { categorieMegaMenuItems } from "../../data/mainMenuData";
import CategoriesMegaMenu from "./CategoriesMegaMenu";
import { useRouter } from "next/router";
import { truckList } from "../../data/truckList";

const MainMenu = ({ style = "", vehicleData }) => {
  const router = useRouter();
  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        <li className={router.pathname === "/" ? "current" : ""}>
          <Link href="/">Home</Link>
        </li>
        {vehicleData?.map((vehicle) =>
          vehicle["status"] === "active" ? (
            <li
              className="menu-item-has-children -has-mega-menu"
              key={vehicle["id"]}
            >
              <a href="#">
                <span className="mr-10">{vehicle["name"]}</span>
                <i className="icon icon-chevron-sm-down" />
              </a>
              <div className="mega">
                <CategoriesMegaMenu
                  itemList={truckList}
                  categorieMegaMenuItems={categorieMegaMenuItems}
                />
              </div>
            </li>
          ) : null
        )}
        <li className={router.pathname === "/contact" ? "current" : ""}>
          <Link href="/compare">Compare</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
