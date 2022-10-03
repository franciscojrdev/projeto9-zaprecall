import seta from "../assets/img/seta_play.png";
import styled from "styled-components";
import OpenQuestion from "./OpenQuestion";

export default function FlashCards(props) {
  const { questions } = props;
  // const [clickCard, setClickCard] = useState(false)
  return (
    <>
      {questions.map((elemento, i) => (
        <ClosedQuestion key={i}>
          <h2>Pergunta {elemento.id}</h2>
          <img src={seta} onClick={() => <OpenQuestion question={elemento.question}/>}/>
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
  cursor: pointer;

  p{
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
`;
