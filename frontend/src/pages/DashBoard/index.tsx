import React, { useCallback, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UsersContext } from "../../contexts/User";

import { Container, Form, InfoHeader, CustomButton } from "./styles";

const DashBoard: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { users, setUser } = useContext(UsersContext);
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
  }, [email, name, setUser, users]);

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
        <label htmlFor="email">Seu Nome</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Seu Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Seu Email</label>
        <input
          pattern=".+@globex.com"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value.trim())}
        />
        <CustomButton customColor={"#2F4858"} onClick={signUpUser}>
          Sign Up
        </CustomButton>
      </Form>
      <Link className="link" to="draw-page">
        <CustomButton customColor="black">
          Ver lista de cadastrados
        </CustomButton>
      </Link>
    </Container>
  );
};

export default DashBoard;
