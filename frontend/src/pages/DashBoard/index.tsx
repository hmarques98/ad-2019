import React, { useCallback, useState } from "react";

import { Container, Form, InfoHeader, UserList, CustomButton } from "./styles";

const DashBoard: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUser] = useState<User[]>([]);
  const [editable, setEditable] = useState(false);
  const [updateUser, setUpdateUser] = useState<any>();
  const [id, setId] = useState<number>();

  const signUpUser = useCallback(() => {
    const user = {
      name,
      email,
      secretFriend: null,
    };
    const newUser = [...users, user];
    if (name.length && email.length) {
      setUser(newUser);
      setName("");
      setEmail("");
    } else {
      alert("preencha os campos que faltam");
    }
  }, [email, name, users]);

  const handleDelete = (id: number) => {
    let filtered = users.filter((item, index) => index !== id);
    setUser(filtered);
  };

  const handleUpdate = (idUser: number, userUpdate: User) => {
    setUpdateUser(userUpdate);
    setEditable(!editable);
    setUser(users.map((user, index) => (index === idUser ? updateUser : user)));
  };

  const handleEdit = (id: number, userEdit: User) => {
    setId(id);
    setUpdateUser(userEdit);
    setEditable(!editable);
  };

  return (
    <Container>
      <InfoHeader>
        <p>
          {users.length === 0
            ? "Não temos ninguem cadastrado"
            : `Temos ${users.length} na lista para sorteio`}
        </p>
        <CustomButton customColor={"#E75A0D"}>
          {users.length >= 3 ? "Sorteio liberado" : "Precisa ter 3 ou mais"}
        </CustomButton>
      </InfoHeader>

      <Form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value.trim())}
        />
        <CustomButton customColor={"#2F4858"} onClick={signUpUser}>
          Sign Up
        </CustomButton>
      </Form>
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
                    Update
                  </CustomButton>
                ) : (
                  <CustomButton
                    customColor={"#291E71"}
                    onClick={() => {
                      handleEdit(index, user);
                    }}
                  >
                    Edit
                  </CustomButton>
                )}
                <CustomButton
                  customColor={"#E9260C"}
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  Delete
                </CustomButton>
              </div>
            </div>
          );
        })}
      </UserList>
    </Container>
  );
};

export default DashBoard;

interface User {
  name: string;
  email: string;
  secretFriend?: string | null;
}
