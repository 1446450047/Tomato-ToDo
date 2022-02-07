import * as React from "react";
import Wrapper from "./components/wrapper";
import Header from "./components/header/Header";
import MainView from "./routes";

function App() {
    return (
        <Wrapper className="wrapper">
            <Header/>
            <MainView/>
        </Wrapper>
    );
}




export default App;