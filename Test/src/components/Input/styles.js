import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 100%;
   input{
    margin:7px 0;
    border: 2px solid #333;
    border-radius: 5px;
    background-color:  #333;
    height: 40px;
    padding: 7px 0px;
    ::-webkit-input-placeholder  {
      font-size: 1.2em;
    }
    width: 100%;
    ${props => props.isFocused && css`
      border-bottom:2px solid #e87c03;
    `}
    ${props=> props.type==='checkbox' && css`
      height: 10px;
      padding: 2px;
      `}
    }

    span{
      color: #e87c03;
      font-size:0.8em;
      position: relative;
      bottom:5px;
    }
    @media(max-width: 760px){
      input{
        padding: 1px;
      }
    }
 `;

