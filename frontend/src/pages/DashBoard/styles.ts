import styled from "styled-components";

export const Container = styled.div`
  background-color: #020122;
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
  width: clamp(280px, 350px, 480px);
  max-width: 500px;
  background-color: hsla(195, 57%, 80%, 1);
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  padding: 24px;
  height: 50vh;
  label {
    color: rgba(030, 010, 000, 0.8);
    font-size: 1.3rem;
  }
  input {
    margin: 20px;
    width: 70%;
    padding: 16px;

    font-size: 16px;
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
  font-size: 0.85rem;
  border-radius: 6px;
  padding: 8px;
  color: white;
  border: none;
  margin: 14px;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  outline: none;
  min-width: 150px;
  &:hover {
    filter: opacity(0.85);
  }
`;
