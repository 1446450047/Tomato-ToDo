import React, {useEffect, useState} from "react";
import ReactMarkdown from 'react-markdown'
import InfoText from  "./Info.md"
import styled from "styled-components";
import remarkGfm from 'remark-gfm'
function Info(){
    const [markdown,setMarkdown] = useState('')

    useEffect(()=>{
        fetch(InfoText).then((response) => response.text()).then((text) => {
            setMarkdown(text)
        })
    })
    return(
        <InfoWrapper>
            <Title>开发日志</Title>
            <ReactMarkdown remarkPlugins={[remarkGfm]} >{markdown}</ReactMarkdown>
        </InfoWrapper>
    )
}
const InfoWrapper = styled.div`
  padding: 50px 100px;
  a{
    text-decoration: underline;
  }
  h2{
    margin-top: 30px;
    margin-bottom: 10px;
  }
  @media (max-width: 1200px){
    padding: 20px 50px;
  }
`
const Title = styled.h1`
    text-align: center;
    color: #FC4F4F;
`
export default Info