import seta from "../assets/img/seta_play.png";
import styled from "styled-components";
export default function FlashCards(props) {
  const card = [
    "Pergunta 1",
    "Pergunta 2",
    "Pergunta 3",
    "Pergunta 4",
    "Pergunta 5",
    "Pergunta 6",
    "Pergunta 7",
    "Pergunta 8",
  ];

  const { questions } = props;
  // const card = [
  //   { id: 1, name: "Pergunta 1" },
  //   { id: 2, name: "Pergunta 2" },
  //   { id: 3, name: "Pergunta 3" },
  //   { id: 4, name: "Pergunta 4" },
  //   { id: 5, name: "Pergunta 5" },
  //   { id: 6, name: "Pergunta 6" },
  //   { id: 7, name: "Pergunta 7" },
  //   { id: 8, name: "Pergunta 8" },
  // ];

  return (
    <>
      {card.map((cardElement) => (
        <ClosedQuestion>
          <h2>{cardElement} </h2>
          <img src={seta}/>
        </ClosedQuestion>
      ))}
    </>
  );
}

const ClosedQuestion = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
`;
