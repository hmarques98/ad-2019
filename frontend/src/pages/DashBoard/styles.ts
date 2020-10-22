import styled from "styled-components";

export const Container = styled.div`
  background-color: #1c264a;
  flex: 1;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  .link {
    margin-top: 28px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: clamp(70vw, 80vw, 100vw);
  max-width: 680px;
  background-color: #eff2f1;
  justify-content: center;
  align-items: center;
  label {
    color: rgba(030, 010, 000, 0.8);
    font-size: 1.3rem;
  }
  input {
    border-color: black;
    line-height: 44px;
    margin: 20px;
    width: 85%;
    font-size: 24px;
    &::placeholder {
      color: #e75a0d;
    }
  }
`;

interface PropsButton {
  customColor?: string;
}
export const CustomButton = styled.button.attrs({
  type: "button",
})<PropsButton>`
  background-color: ${(props) => props.customColor};
  width: clamp();

  border-radius: 8px;
  padding: 14px;
  color: white;
  border: none;
  margin: 10px;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  outline: none;
  width: clamp(100px, 180px, 220px);

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
  justify-content: center;
  width: 100vw;
  padding-top: 28px;

  p {
    font-weight: bold;
    font-size: 1.5rem;
  }
`;
