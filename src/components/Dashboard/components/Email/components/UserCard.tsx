import * as Styled from "./styles/userCard.styled";
import UserCardCheckBox from "./UserCardCheckBox";

import { UserT } from "@/interface/db/user.types";

type UserCardT = {
  user: UserT;
  isSelected: boolean;
  onSelectUser: (email: string) => void;
};

const UserCard: React.FC<UserCardT> = ({ user, onSelectUser, isSelected }) => {
  return (
    <Styled.UserCard
      onClick={() => onSelectUser(user.email)}
      className={`user-card ${isSelected ? "selected" : ""}`}
    >
      <div className="user-card__body">
        <figure className="user-card__body-fig">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
            alt="user"
            loading="lazy"
            title="user"
            width={50}
            height={50}
          />
        </figure>

        <div className="user-card__body-details">
          <span>{user.username}</span>
          <span>{user.email}</span>
        </div>
      </div>

      <UserCardCheckBox />
    </Styled.UserCard>
  );
};

export default UserCard;
