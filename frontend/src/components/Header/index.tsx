import React from "react";
import { CustomButton } from "../../pages/DashBoard/styles";

import { InfoHeader } from "./styles";

interface User {
  name: string;
  email: string;
  secretFriend?: string | null;
}

interface Users {
  users: User[];
}
const Header = ({ users }: Users) => {
  return (
    <InfoHeader>
      <p>
        {users
          ? users?.length === 0
            ? "Não temos ninguem cadastrado"
            : `Temos ${users.length} na lista para sorteio`
          : ""}
      </p>
      <CustomButton customColor={"hsla(16, 87%, 62%,1)"}>
        {users && users.length >= 4
          ? "Sorteio liberado"
          : "Precisa ter 4 ou mais."}
      </CustomButton>
    </InfoHeader>
  );
};

export default Header;
