import styled from "styled-components";

export const Container = styled.div`
  background-color: #020122;
  flex: 1;
  display: flex;
  height: 100vh;
`;

export const UserList = styled.div`
  background-color: #020122;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  h2 {
    font-size: 1.4rem;
    margin: 1.3rem;
    display: flex;
  }
  input {
    font-size: 1.4rem;
    width: clamp(70vw, 80vw, 90vw);
    padding: 8px;
  }

  .buttons {
    display: flex;
  }
`;
