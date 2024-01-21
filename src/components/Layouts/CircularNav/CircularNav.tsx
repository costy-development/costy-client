import NavItem from "./components/NavItem";
import * as Styled from "./circularNav.styled";
// import Compass from "./components/Compass";

import { CircularNavItemT } from "@/interface/config.types";

type CircularNavT = {
  sub: Array<CircularNavItemT>;
  parent: Array<CircularNavItemT>;
};

const CircularNav: React.FC<CircularNavT> = ({ sub, parent }) => {
  return (
    <Styled.CircularNav className="container">
      <div className="menu-wrapper">
        <div className="arch white-arch" />
        <div className="center" />

        {/* <Compass /> */}

        <div className="menu">
          {parent.map((item, index) => (
            <NavItem item={item} index={index} key={`${item.label}-${index}`} />
          ))}
        </div>

        {sub.length > 0 && (
          <div className="nested-menu">
            {sub.map((item, index) => (
              <NavItem
                item={item}
                nested={true}
                index={index}
                key={`${item.label}-${index}`}
              />
            ))}
          </div>
        )}

        <span className="title">
          ქოსთის <br /> ხელსაწყოები
        </span>
      </div>
    </Styled.CircularNav>
  );
};

export default CircularNav;
