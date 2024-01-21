import * as Styed from "./styles/userCardCheckBox.styled";

type UserCardCheckBoxT = {};

const UserCardCheckBox: React.FC<UserCardCheckBoxT> = () => {
  return (
    <Styed.UserCardCheckBox data-checkbox>
      <span className="checkbox--icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z" />
        </svg>
      </span>
    </Styed.UserCardCheckBox>
  );
};

export default UserCardCheckBox;
