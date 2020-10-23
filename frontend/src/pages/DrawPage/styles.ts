import styled from "styled-components";

export const Container = styled.div`
  background-color: #020122;
  display: flex;
  flex-wrap: wrap;
  flex: 1;

  align-items: flex-start;

  > div {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 1180px;
    justify-content: center;
  }
`;

export const CustomInput = styled.input`
  min-width: 260px;
  border: none;
  border-radius: 4px;
  background-color: #dae0e2;
  height: 28px;
  line-height: 28px;
  padding: 12px;
`;

export const FormContainer = styled.main`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-width: 380px;
  height: 160px;
  max-height: 200px;
  padding: 16px;
  background-color: hsla(195, 57%, 80%, 1);
  margin: 40px 10px;
  color: #000;
  font-weight: 800;
  border-radius: 16px;
  flex-wrap: wrap;

  div {
    display: flex;
    max-width: 320px;
    & {
      font-size: 16px;
    }
    label {
      margin-right: 8px;
      text-align: left;
    }
    p {
      overflow: hidden;
    }
  }
`;
interface PropsButton {
  customColor?: string;
}
export const HandlesButton = styled.button<PropsButton>`
  background-color: ${(props) => props.customColor};
  font-size: 16px;
  border-radius: 6px;
  padding: 4px;
  color: white;
  border: none;
  margin: 8px 2px;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  outline: none;
  flex: 1;
  max-width: 150px;
  min-width: 100px;
  font-weight: 700;
  &:hover {
    filter: opacity(0.85);
  }
`;

export const ContainerSubmit = styled.footer`
  position: relative;

  /* z-index: 15; */
  > button {
    position: absolute;
    bottom: -100px;
    right: -50%;
  }
`;
