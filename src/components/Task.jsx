import styled from "styled-components";

export  const Task = styled.div`
      border-radius: 15px;
      margin-bottom: 15px;
      display: flex;
      justify-content: space-between;
      li{
          color: #000;
          margin: 12px ;
          &.finish{
            text-decoration: line-through;
         }
         p{
          color: #FC4F4F;
         }
      }
      div{
        display: flex;
        align-items: center;
        padding: 0 16px;
        background:#1A1A1A;
        color: #fff;
        cursor: pointer;
        border-radius: 0 15px 15px 0;
        &:hover{
          background:#3c3b3b;
        }
      }
      transition: all 0.3s;
      &:hover{
        transform: scale(105%);
      }
      animation: fadeIn 0.8s;
      @keyframes fadeIn {
       0% {transform: scale(90%)}
       50% {transform: scale(105%)}
       100% {transform: scale(100%)}
     }
`;