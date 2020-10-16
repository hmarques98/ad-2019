import React, { useContext, useState } from "react";
import { FiTrash2, FiEdit } from "react-icons/fi";
import { AiOutlineFileDone } from "react-icons/ai";

import { User, UsersContext } from "../../contexts/User";

import { CustomButton } from "../DashBoard/styles";
import { UserList, Container } from "./styles";

const DrawPage: React.FC = () => {
  const [editable, setEditable] = useState(false);
  const [updateUser, setUpdateUser] = useState<any>();
  const [id, setId] = useState<number>();

  const { users, setUser } = useContext(UsersContext);

  const handleDelete = (id: number) => {
    let filtered = users.filter((item, index) => index !== id);
    setUser(filtered);
  };

  const handleUpdate = (idUser: number, userUpdate: User) => {
    if (userUpdate.name.length > 1 || userUpdate.email.length > 1) {
      setUpdateUser(userUpdate);
      setEditable(!editable);
      return setUser(
        users.map((user, index) => (index === idUser ? updateUser : user))
      );
    }
    return alert("nenhum campo pode ficar vazio");
  };

  const handleEdit = (id: number, userEdit: User) => {
    setId(id);
    setUpdateUser(userEdit);
    setEditable(!editable);
  };

  return (
    <Container>
      <UserList>
        {users.map((user, index) => {
          return (
            <div key={index}>
              <h2>
                Name:{" "}
                {editable && index === id ? (
                  <input
                    value={updateUser?.name}
                    onChange={(e) =>
                      setUpdateUser({
                        ...updateUser,
                        name: e.target.value,
                      })
                    }
                  />
                ) : (
                  <p>{user.name}</p>
                )}
              </h2>
              <h2>
                Email:{" "}
                {editable && index === id ? (
                  <input
                    type="email"
                    value={updateUser?.email}
                    onChange={(e) =>
                      setUpdateUser({
                        ...updateUser,
                        email: e.target.value.trim(),
                      })
                    }
                  />
                ) : (
                  <p>{user.email} </p>
                )}
              </h2>

              <div className="buttons">
                {editable && index === id ? (
                  <CustomButton
                    customColor={"#307358"}
                    onClick={() => {
                      handleUpdate(index, user);
                    }}
                  >
                    <AiOutlineFileDone size={28} />
                  </CustomButton>
                ) : (
                  <CustomButton
                    customColor={"#291E71"}
                    onClick={() => {
                      handleEdit(index, user);
                    }}
                  >
                    <FiEdit size={28} />
                  </CustomButton>
                )}
                <CustomButton
                  customColor={"#E9260C"}
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  <FiTrash2 size={28} />
                </CustomButton>
              </div>
            </div>
          );
        })}
      </UserList>
    </Container>
  );
};

export default DrawPage;
