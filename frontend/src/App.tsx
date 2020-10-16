import React, { useCallback, useState } from "react";

import "./App.css";

interface User {
  name: string;
  email: string;
  secretFriend?: string | null;
}

function App() {
  const [users, setUser] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editable, setEditable] = useState(false);
  const [id, setId] = useState<number>();
  const [updateUser, setUpdateUser] = useState<any>();

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
    // let foundedIndex = users.findIndex((item, index) => index === idUser);
    setUpdateUser(userUpdate);
    setEditable(!editable);
    setUser(users.map((user, index) => (index === idUser ? updateUser : user)));
  };

  const editUserAble = (id: number, userEdit: User) => {
    // let foundedIndex = users.findIndex((item, index) => index === id);
    setId(id);
    setUpdateUser(userEdit);
    setEditable(!editable);
  };

  return (
    <div className="App">
      <div className="form_input">
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
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={signUpUser}>Sign Up</button>
      </div>
      <div className="form_usersList">
        {users.map((user, index) => {
          return (
            <div key={index}>
              <h1>
                Name:{" "}
                {editable && index === id ? (
                  <input
                    value={updateUser?.name}
                    onChange={(e) =>
                      setUpdateUser({ ...updateUser, name: e.target.value })
                    }
                  />
                ) : (
                  user.name
                )}
              </h1>
              <p>
                {" "}
                {editable && index === id ? (
                  <input
                    value={updateUser?.email}
                    onChange={(e) =>
                      setUpdateUser({ ...updateUser, email: e.target.value })
                    }
                  />
                ) : (
                  user.email
                )}
              </p>

              {editable && index === id ? (
                <button
                  onClick={() => {
                    handleUpdate(index, user);
                  }}
                >
                  Update
                </button>
              ) : (
                <button
                  onClick={() => {
                    editUserAble(index, user);
                  }}
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => {
                  handleDelete(index);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <p>Temos {users.length} na lista para sorteio</p>
      <button>
        {users.length >= 3 ? "Fazer sorteio liberado" : "Precisa ter 3 ou mais"}
      </button>
    </div>
  );
}

export default App;
