import { useState } from "react";
import { Link } from "react-router-dom";

import { PATHS } from "@/config/paths";
import { ADMINISTRATOR_ROLE } from "@/config/env";
import { useCheckIsAuthenticatedUser } from "@/hooks/auth";

import * as Styled from "./styles/expandNav.styled";

const ExpandNav: React.FC = () => {
  const [expand, setExpand] = useState(false);

  const onToggleNav = () => {
    setExpand((prev) => !prev);
  };

  const { isAuthenticated, decodedUser } = useCheckIsAuthenticatedUser(true);

  return (
    <Styled.ExpandNav className={expand ? "expanded" : ""}>
      <button
        className="expand-btn"
        onClick={onToggleNav}
        name="expand tools navigation panel"
        aria-label="expand tools navigation panel"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 1024 1024"
        >
          <path d="m488.832 344.32l-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872l319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0" />
        </svg>
      </button>

      <ul className="expand-nav__list">
        <li className="expand-nav__list-item">
          <Link to="#">
            <figure className="expand-nav__list-item--fig">
              <img
                src="/icons/calculator.png"
                alt="calculator"
                title="calculator"
                loading="eager"
                width={21}
                height={29}
              />
            </figure>
            <span className="expand-nav__list-item--label">
              სამშენებლო <br /> კალკულატორი
            </span>
          </Link>
        </li>

        <li className="expand-nav__list-item">
          <Link to="#">
            <figure className="expand-nav__list-item--fig">
              <img
                src="/icons/price-list.png"
                alt="price collection"
                title="price collection"
                loading="eager"
                width={16}
                height={30}
              />
            </figure>
            <span className="expand-nav__list-item--label">
              ფასების <br /> კატალოგი
            </span>
          </Link>
        </li>

        <li className="expand-nav__list-item">
          <Link to={PATHS.articles_page}>
            <figure className="expand-nav__list-item--fig">
              <img
                src="/icons/news.png"
                alt="construction news"
                title="construction news"
                loading="eager"
                width={43}
                height={46}
              />
            </figure>
            <span className="expand-nav__list-item--label">
              სამშენებლო <br /> სიახლეები
            </span>
          </Link>
        </li>

        <li className="expand-nav__list-item">
          <Link to="#">
            <figure className="expand-nav__list-item--fig">
              <img
                src="/icons/standards.png"
                alt="construction standards"
                title="construction standards"
                loading="eager"
                width={28}
                height={28}
              />
            </figure>
            <span className="expand-nav__list-item--label">
              სამშენებლო <br /> სტანდარტები
            </span>
          </Link>
        </li>

        <li className="expand-nav__list-item contact">
          <Link to="#">
            <figure className="expand-nav__list-item--fig">
              <img
                src="/icons/contacts.png"
                alt="contact"
                title="contact"
                loading="eager"
                width={40}
                height={40}
              />
            </figure>
            <span className="expand-nav__list-item--label">კონტაქტი</span>
          </Link>
        </li>

        {isAuthenticated && decodedUser?.role === ADMINISTRATOR_ROLE && (
          <li className="expand-nav__list-item contact">
            <Link to={PATHS.dashboard_page}>
              <figure className="expand-nav__list-item--fig">
                <img
                  src="/icons/dashboard.svg"
                  alt="contact"
                  title="contact"
                  loading="eager"
                  width={30}
                  height={30}
                />
              </figure>
              <span className="expand-nav__list-item--label">
                სამართავი <br /> პანელი
              </span>
            </Link>
          </li>
        )}
      </ul>
    </Styled.ExpandNav>
  );
};

export default ExpandNav;
