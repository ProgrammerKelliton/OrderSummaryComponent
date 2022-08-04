import "./App.scss";
import Component from "../components/Component";
import TopBorder from "../assets/image/pattern-background-desktop.svg";

function App() {
    return (
        <div className="App">
            <img className="App__border" src={TopBorder} alt="border top" />
            <Component></Component>
        </div>
    );
}

export default App;
