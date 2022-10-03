import styled from "styled-components";
import QUESTIONS from "../mock";
import Footer from "./Footer";
import Logo from "./Logo";
import FlashCards from "./Main";
export default function MainContent() {
  return (
    <ScreenContainer>
      <Logo />
      <FlashCards questions={QUESTIONS}/>
      <Footer/>
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
