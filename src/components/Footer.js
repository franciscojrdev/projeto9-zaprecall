import styled from "styled-components";

export default function Footer(props) {
  return (
    <MainFooter>
      <div>
        <button>Não lembrei</button>
        <button>Quase lembrei</button>
        <button>Lembrei</button>
      </div>
      <h1>0/{props.questLength} Concluidos</h1>
    </MainFooter>
  );
}

const MainFooter = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;

  div {
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
  }

  button {
    width: 90px;
    height: 34px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    background: green;
    border-radius: 5px;
    border: 1px solid blue;
    padding: 5px;
    cursor: pointer;
  }
  h1 {
    font-family: "Recursive";
    font-size: 18px;
    font-weight: 400;
  }
`;
