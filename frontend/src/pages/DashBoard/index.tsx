import React, { useCallback, useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { UsersContext } from "../../contexts/User";
import { CustomInput } from "../DrawPage/styles";

import { Container, Form, CustomButton } from "./styles";

const DashBoard: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { users, setUser } = useContext(UsersContext);
  const signUpUser = useCallback(() => {
    const user = {
      name,
      email,
      secretFriend: "",
    };
    const newUser = [...users, user];
    if (name.length && email.length) {
      setUser(newUser);
      setName("");
      setEmail("");
    } else {
      alert("preencha os campos que faltam");
    }
  }, [email, name, setUser, users]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(users));
  }, [users]);

  return (
    <Container>
      <Header users={users} />

      <Form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="email">Seu Nome</label>
        <CustomInput
          type="text"
          name="name"
          id="name"
          placeholder="Seu Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Seu Email</label>
        <CustomInput
          pattern=".+@globex.com"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value.trim())}
        />
        <CustomButton
          customColor={"hsla(195, 97%, 13%,1)"}
          onClick={signUpUser}
        >
          Cadastrar participante
        </CustomButton>
      </Form>
      {users.length >= 4 && (
        <Link className="link" to="draw-page">
          <CustomButton customColor="hsla(16, 87%, 62%,1)">
            Ver lista de cadastrados
          </CustomButton>
        </Link>
      )}
    </Container>
  );
};

export default DashBoard;
