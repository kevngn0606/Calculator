import "./App.css";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <body>
        <div>
          <Wrapper>
            <Screen />
            <ButtonBox>
              <Button />
            </ButtonBox>
          </Wrapper>
        </div>
      </body>
    </div>
  );
}

export default App;
