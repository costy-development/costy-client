import { Link } from "react-router-dom";

import { PATHS } from "@/config/paths";
import { extractUserFirstName } from "@/utils";
import { useCheckIsAuthenticatedUser } from "@/hooks/auth";

import * as UI from "./components";
import * as Styled from "./main.styled";

const MainMenu: React.FC = () => {
  const { isAuthenticated, user } = useCheckIsAuthenticatedUser(true);

  return (
    <>
      <UI.WhatIsCosty />

      <UI.Search />

      <Styled.Main className="container">
        <ul className="circle">
          <li className="arch" />
          {isAuthenticated ? (
            <li className="center">
              <span>
                გამარჯობა <br />
                {extractUserFirstName(user.username)}
              </span>
            </li>
          ) : (
            <Link to={PATHS.auth_page} className="center">
              შესვლა
            </Link>
          )}

          <Styled.MenuItem $index={0} className="loop">
            <Link
              to={PATHS.tools_page}
              className="list-item__route loop costy-tools"
            >
              <span>
                ქოსთის <br /> ხელსაწყოები
              </span>
            </Link>
          </Styled.MenuItem>
          <Styled.MenuItem $index={-1} className="loop">
            <Link to="/" className="list-item__route loop guest-view">
              <span>
                სტუმრის <br />
                სტატუსით <br /> შესვლა
              </span>
            </Link>
          </Styled.MenuItem>
          <Styled.MenuItem $index={-2} className="loop">
            <Link to="#costy" className="list-item__route loop what-is--costy">
              <span>
                რა არის <br /> ქოსთი
              </span>
            </Link>
          </Styled.MenuItem>

          <Styled.MenuItem className="manual search">
            <UI.MenuSearch />
          </Styled.MenuItem>
          <Styled.MenuItem className="manual menu">
            <UI.MenuBurger />
          </Styled.MenuItem>
        </ul>
      </Styled.Main>
    </>
  );
};

export default MainMenu;
