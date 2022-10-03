import styled from "styled-components";
import QUESTIONS from "../mock";
import Footer from "./Footer";
import Logo from "./Logo";
import FlashCards from "./FlashCard";
import { useState } from "react";
export default function MainContent() {
  const [questLength, setQuestLength] = useState(QUESTIONS.length);
  return (
    <ScreenContainer>
      <Logo />
      <FlashCards questions={QUESTIONS} />
      <Footer questLength={questLength} />
    </ScreenContainer>
  );
}

const ScreenContainer = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;
