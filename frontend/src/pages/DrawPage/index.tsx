import React, { useContext, useState } from "react";
import { FiTrash2, FiEdit, FiSend } from "react-icons/fi";
import { AiOutlineFileDone } from "react-icons/ai";

import { User, UsersContext } from "../../contexts/User";

import { CustomButton } from "../DashBoard/styles";
import { UserList, Container } from "./styles";
import api from "../../services/api";
import { draw } from "../../utils/draw";

const DrawPage: React.FC = () => {
  const [editable, setEditable] = useState(false);
  const [updateUser, setUpdateUser] = useState<any>();
  const [id, setId] = useState<number>();
  const [drawerUsers, setDrawerUser] = useState<User[]>([]);

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

  const handleSubmit = async () => {
    //fazer sorteio aqui antes de enviar
    const drawers = draw(users);
    const result = drawers.map((items) => {
      return {
        email: items.friendSender.email,
        name: items.friendSender.name,
        secretFriend: items.secretFriendDrawn.name,
      };
    });
    setDrawerUser(result);
    console.log(drawerUsers);

    try {
      const res = await api.post("/register", drawerUsers);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <button type="button" onClick={handleSubmit}>
        <FiSend size={28} />
      </button>
      <UserList>
        {users
          ? users.map((user, index) => {
              return (
                <div key={index}>
                  <label>
                    Name:{" "}
                    {editable && index === id ? (
                      <input
                        name="name"
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
                  </label>
                  <label>
                    Email:{" "}
                    {editable && index === id ? (
                      <input
                        name="email"
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
                  </label>

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
            })
          : ""}
      </UserList>
    </Container>
  );
};

export default DrawPage;
