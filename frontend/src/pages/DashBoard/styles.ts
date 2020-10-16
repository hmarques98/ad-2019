import styled from "styled-components";

export const Container = styled.div`
  background-color: #1c264a;
  flex: 1;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
  background-color: #eff2f1;
  justify-content: center;
  align-items: center;

  input {
    border-color: black;
    line-height: 44px;
    margin: 20px;
    width: 85%;
    font-size: 24px;
  }
`;

interface PropsButton {
  customColor?: string;
}
export const CustomButton = styled.button<PropsButton>`
  background-color: ${(props) => props.customColor};
  width: 50%;

  border-radius: 8px;
  padding: 14px;
  color: white;
  border: none;
  margin: 10px;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  outline: none;
  width: clamp(100px, 200px, 320px);

  &:hover {
    filter: opacity(0.85);
  }
`;

export const InfoHeader = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-weight: bold;
    font-size: 38px;
  }
`;

export const UserList = styled.div`
  background-color: #020122;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  margin: 40px;

  h2 {
    font-size: 24px;
    margin: 18px;
    display: flex;
  }
  input {
    font-size: 24px;
    width: 80%;
  }

  .buttons {
    display: flex;
  }
`;
