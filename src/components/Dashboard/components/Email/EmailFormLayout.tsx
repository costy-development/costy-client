/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { emailStore } from "@/store/dashboard";
import { useUsersQuery } from "@/hooks/api/users/dashboard";

import {
  ErrorMessage,
  InfiniteScroll,
  RelativeSpinner,
} from "@/components/Layouts";
import UserCard from "./components/UserCard";
import AsideActions from "./components/AsideActions";
import * as Styled from "./styles/emailFormLayout.styled";

type EmailFormLayoutT = {
  children: React.ReactNode;
};

const EmailFormLayout: React.FC<EmailFormLayoutT> = ({ children }) => {
  const { data, getUsersQuery, status, hasMore, total } = useUsersQuery();

  const emailStatus = emailStore.use.status();
  const recipients = emailStore.use.recipients();
  const isSelectedAll = emailStore.use.isSelectedAll();
  const addRecipient = emailStore.use.addRecipient();
  const setIsSelectedAll = emailStore.use.setIsSelectedAll();
  const deSelectAllRecipients = emailStore.use.deSelectAllRecipients();
  const cleanUpEmails = emailStore.use.cleanUpEmails();

  const onSelectUser = (email: string) => addRecipient(email);

  const onSelectAll = () => setIsSelectedAll(true);

  const onDeselectAll = () => deSelectAllRecipients();

  const areSelectedUsers = isSelectedAll || recipients.length > 0;

  useEffect(() => {
    return () => {
      cleanUpEmails();
    };
  }, []);

  return (
    <Styled.EmailFormLayout>
      <aside className="email-form__aside">
        <AsideActions
          onSelectAll={onSelectAll}
          isSelectedAll={isSelectedAll}
          onDeselectAll={onDeselectAll}
          areSelectedUsers={areSelectedUsers}
        />

        <ul className="users-list">
          {status.status === "SUCCESS" && (
            <InfiniteScroll
              total={total}
              height="88vh"
              hasMore={hasMore}
              onNext={getUsersQuery}
            >
              {data.map((user) => (
                <UserCard
                  key={user._id}
                  user={user}
                  onSelectUser={onSelectUser}
                  isSelected={isSelectedAll || recipients.includes(user.email)}
                />
              ))}
            </InfiniteScroll>
          )}

          {status.loading && <RelativeSpinner />}

          {status.error && <ErrorMessage message={status.message} />}
        </ul>
      </aside>

      <div className="content-container">{children}</div>

      {emailStatus.loading && <RelativeSpinner />}
    </Styled.EmailFormLayout>
  );
};

export default EmailFormLayout;
