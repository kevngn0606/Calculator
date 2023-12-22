import "./App.css";

import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import Wrapper from "./components/Wrapper";
import CalContextProvider from "./context/CalContext";
import Screen from "./components/Screen";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  /* List number and operational buttons */
  const btnList = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "*"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

  /* Print out number and operational buttons */
  const btnMap = btnList
    .flat()
    .map((btn, i) => <Button className="btn" value={btn} key={i} />);

  return (
    <div className="App">
      <Header />
      <Body className="App-body">
        <CalContextProvider>
          <Wrapper className="wrapper">
            <Screen className="screen" />
            <ButtonBox className="btn-box">{btnMap}</ButtonBox>
          </Wrapper>
        </CalContextProvider>
      </Body>
      <Footer className="footer" />
    </div>
  );
}

export default App;
