import React, { useContext, useEffect, useState } from "react";
import { FiTrash2, FiEdit, FiSend } from "react-icons/fi";
import { AiOutlineFileDone } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { User, UsersContext } from "../../contexts/User";

import {
  Container,
  ContainerSubmit,
  CustomInput,
  FormContainer,
  HandlesButton,
} from "./styles";
import api from "../../services/api";
import { draw } from "../../utils/draw";

const DrawPage: React.FC = () => {
  const [editable, setEditable] = useState(false);
  const [updateUser, setUpdateUser] = useState<any>();
  const [id, setId] = useState<number>();
  const [drawerUsers, setDrawerUser] = useState<User[]>([]);

  const { users, setUser } = useContext(UsersContext);
  const history = useHistory();

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

  useEffect(() => {
    if (users.length === 0) {
      history.push("/");
    }

    localStorage.setItem("user", JSON.stringify(users));
  }, [history, users]);

  return (
    <Container>
      <div>
        {users
          ? users.map((user, index) => {
              return (
                <FormContainer key={index}>
                  <div>
                    <label htmlFor="name">Name:</label>

                    {editable && index === id ? (
                      <CustomInput
                        value={updateUser?.name}
                        onChange={(e) =>
                          setUpdateUser({
                            ...updateUser,
                            name: e.target.value,
                          })
                        }
                        id="name"
                        type="text"
                      />
                    ) : (
                      <p>{user.name}</p>
                    )}
                  </div>
                  <div>
                    {" "}
                    <label htmlFor="email">Email:</label>
                    {editable && index === id ? (
                      <CustomInput
                        value={updateUser?.email}
                        onChange={(e) =>
                          setUpdateUser({
                            ...updateUser,
                            email: e.target.value.trim(),
                          })
                        }
                        id="email"
                        type="text"
                      />
                    ) : (
                      <p>{user.email}</p>
                    )}
                  </div>
                  <div>
                    {editable && index === id ? (
                      <HandlesButton
                        onClick={() => {
                          handleUpdate(index, user);
                        }}
                        name="update"
                        customColor={"hsla(166, 99%, 30%,1)"}
                      >
                        <AiOutlineFileDone size={28} />
                      </HandlesButton>
                    ) : (
                      <HandlesButton
                        name="edit"
                        onClick={() => {
                          handleEdit(index, user);
                        }}
                        customColor={"hsla(200, 73%, 44%,1)"}
                      >
                        <FiEdit size={28} />
                      </HandlesButton>
                    )}
                    <HandlesButton
                      name="delete"
                      onClick={() => {
                        handleDelete(index);
                      }}
                      customColor={"hsla(345, 92%, 55%, 1)"}
                    >
                      <FiTrash2 size={28} />
                    </HandlesButton>
                  </div>
                </FormContainer>
              );
            })
          : ""}
        <ContainerSubmit>
          <HandlesButton
            name="delete"
            onClick={() => {
              handleSubmit();
            }}
            customColor={"hsla(345, 92%, 55%, 1)"}
          >
            <FiSend size={28} />
          </HandlesButton>
        </ContainerSubmit>
      </div>
    </Container>
  );
};

export default DrawPage;
