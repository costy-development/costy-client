import ReactCurvedText from "react-curved-text";
import { useSearchParams } from "@/hooks/utils";

import * as Styled from "./navItem.styled";

import { CircularNavItemT } from "@/interface/config.types";

type NavItemT = {
  index: number;
  nested?: boolean;
  item: CircularNavItemT;
};

const NavItem: React.FC<NavItemT> = ({ index, nested = false, item }) => {
  const width = nested
    ? item.height - Math.abs(item.left) / 2
    : item.height - Math.abs(item.left);

  const itemCls = nested ? "nested" : "parent";

  const { getParam } = useSearchParams();
  const currentSub = getParam("sub");

  return (
    <Styled.NavItem
      to={item.path}
      $index={index}
      $rx={item.rx}
      $left={item.left}
      $height={item.height}
      $rotate={item.rotate}
      className={`${itemCls} ${
        item.path.includes(currentSub as string) && !nested ? "active" : ""
      }`}
      aria-label={item.label}
    >
      <div className="nav-route__wrapper">
        {!nested && (
          <figure className="icon">
            <img
              src={item.icon}
              alt={`${item.label} icon`}
              width={30}
              height={30}
              loading="eager"
            />
          </figure>
        )}

        <span className="curved-text">
          <span>
            <ReactCurvedText
              text={item.label}
              reversed={true}
              cx={item.cx}
              cy={item.cy}
              rx={item.rx}
              ry={item.ry}
              height={item.archHeight}
              width={width}
              startOffset={item.startOffset}
            />
          </span>
        </span>
      </div>
    </Styled.NavItem>
  );
};

export default NavItem;
