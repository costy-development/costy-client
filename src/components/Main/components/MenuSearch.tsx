import { Link } from "react-router-dom";

const MenuSearch: React.FC = () => {
  return (
    <Link to="?tab=search" className="list-item__route" aria-label="search">
      <span role="img" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"
          />
        </svg>
      </span>
    </Link>
  );
};

export default MenuSearch;
