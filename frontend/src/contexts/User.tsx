import React, { createContext, useState } from "react";

export interface User {
  name: string;
  email: string;
  secretFriend?: string | null;
}
export interface IUsersContex {
  users: User[];
  setUser: React.Dispatch<React.SetStateAction<User[]>>;
}

const UsersContext = createContext({} as IUsersContex);

const UserProvider: React.FC = ({ children }) => {
  const [users, setUser] = useState<User[]>(() => {
    const data = JSON.parse(localStorage.getItem("user") as any);
    if (data) {
      return data;
    } else {
      return [];
    }
  });

  return (
    <UsersContext.Provider value={{ setUser, users }}>
      {children}
    </UsersContext.Provider>
  );
};

export { UsersContext, UserProvider };
