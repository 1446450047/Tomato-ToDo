import React from "react";
import ReactMarkdown from 'react-markdown'
import InfoText from "./Info.md"
function Info(){
    console.dir(InfoText);
    return(
        <div>
            <h2>开发日志</h2>
            <ReactMarkdown># Hello, *world*!</ReactMarkdown>
        </div>
    )
}
export default Info