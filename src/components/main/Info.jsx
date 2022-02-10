import React, {useEffect, useState} from "react";
import ReactMarkdown from 'react-markdown'
import InfoText from  "./Info.md"
import styled from "styled-components";

function Info(){
    const [markdown,setMarkdown] = useState('')

    useEffect(()=>{
        fetch(InfoText).then((response) => response.text()).then((text) => {
            setMarkdown(text)
        })
    })
    return(
        <InfoWrapper>
            <h2>开发日志</h2>
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </InfoWrapper>
    )
}
const InfoWrapper = styled.div`
border: 1px solid red;
`
export default Info