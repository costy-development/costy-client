import { NavLink } from "react-router-dom";

import { PATHS } from "@/config/paths";

import * as Styled from "./styles/aside.styled";

const Aside: React.FC = () => {
  return (
    <Styled.Aside>
      <nav>
        <ul className="dashboard-nav__list">
          <NavLink
            to={PATHS.root_page}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <li className="dashboard-nav__list-item">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path
                      strokeLinecap="round"
                      d="M22 22H2m0-11l8.126-6.5a3 3 0 0 1 3.748 0L22 11m-6.5-5.5v-2A.5.5 0 0 1 16 3h2.5a.5.5 0 0 1 .5.5v5M4 22V9.5M20 22V9.5"
                    />
                    <path d="M15 22v-5c0-1.414 0-2.121-.44-2.56C14.122 14 13.415 14 12 14c-1.414 0-2.121 0-2.56.44C9 14.878 9 15.585 9 17v5m5-12.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z" />
                  </g>
                </svg>
              </span>
              <span>მთავარზე დაბრუნება</span>
            </li>
          </NavLink>

          <NavLink
            to={PATHS.dashboard_products_page}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <li className="dashboard-nav__list-item">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M5 21a2 2 0 1 1 2-2a2 2 0 0 1-2 2m2-9H3V3h4Zm-1 7a1 1 0 1 1-1-1a1 1 0 0 1 1 1m8-17h-4a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-2 19a2 2 0 1 1 2-2a2 2 0 0 1-2 2m2-9h-4V3h4Zm-1 7a1 1 0 1 1-1-1a1 1 0 0 1 1 1m8-17h-4a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-2 19a2 2 0 1 1 2-2a2 2 0 0 1-2 2m2-9h-4V3h4Zm-1 7a1 1 0 1 1-1-1a1 1 0 0 1 1 1"
                  />
                </svg>
              </span>
              <span>პროდუქტები</span>
            </li>
          </NavLink>

          <NavLink
            to={PATHS.dashboard_email_page}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <li className="dashboard-nav__list-item">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 -1 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M13 19c0-.34.04-.67.09-1H4V8l8 5l8-5v5.09c.72.12 1.39.37 2 .72V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9.09c-.05-.33-.09-.66-.09-1m7-13l-8 5l-8-5zm0 9v3h3v2h-3v3h-2v-3h-3v-2h3v-3z"
                  />
                </svg>
              </span>
              <span>ელ-ფოსტა</span>
            </li>
          </NavLink>

          <NavLink
            to={PATHS.dashboard_articles_page}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <li className="dashboard-nav__list-item">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="-1 -2 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7.5 16.5h6v-1h-6zm0-4h9v-1h-9zm0-4h9v-1h-9zM5.615 20q-.69 0-1.152-.462Q4 19.075 4 18.385V5.615q0-.69.463-1.152Q4.925 4 5.615 4h12.77q.69 0 1.152.463q.463.462.463 1.152v12.77q0 .69-.462 1.152q-.463.463-1.153.463zm0-1h12.77q.23 0 .423-.192q.192-.193.192-.423V5.615q0-.23-.192-.423Q18.615 5 18.385 5H5.615q-.23 0-.423.192Q5 5.385 5 5.615v12.77q0 .23.192.423q.193.192.423.192M5 5v14z"
                  />
                </svg>
              </span>
              <span>სტატიები</span>
            </li>
          </NavLink>
        </ul>
      </nav>
    </Styled.Aside>
  );
};

export default Aside;
