import * as React from "react";
import styled from "styled-components"
function App() {
    return (
        <div className="wrapper">
            <Header>header</Header>
        </div>
    );
}

const Header = styled.header`
border: 1px solid red;
`

export default App;