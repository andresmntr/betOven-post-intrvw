import styled from '@emotion/styled';

import betLogo from '../../assets/betOven.png';

export const Input1 = styled.input`
    display: inline-block;
    border-radius: 5px;
    background-color: #A1B4CF;
    border: 1px solid #0D141B;
    color: #0D141B;
    text-align: center;
    vertical-align: middle;
    font-size: 12px;
    width: 150px;
    height: 30px;
    transition: all 0.5s;
    cursor: text;
    margin: 5px;
    position: absolute;
    top: 56.5%;
    left: 47.5%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    &:focus::placeholder {
        color: transparent;
    }
    @media (max-width: 400px) {
      position: center;
      top: 58%;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
    }
    @media (max-height: 600px) and (max-width: 400px){
      position: fixed;
      left: 50%;
      top: 60%;
      backhround-color:hotpink;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
    }
`;

export const Input2 = styled.input`
    display: inline-block;
    border-radius: 5px;
    background-color: #A1B4CF;
    border: 1px solid #0D141B;
    color: #0D141B;
    text-align: center;
    vertical-align: middle;
    font-size: 12px;
    width: 150px;
    height: 30px;
    transition: all 0.5s;
    cursor: text;
    margin: 5px;
    position: fixed;
    top: 36.5%;
    left: 47.5%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    &:focus::placeholder {
        color: transparent;
    }
    @media (max-width: 400px) {
      position: center;
      top: 50%;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
    }
    @media (max-height: 600px) and (max-width: 400px){
      position: fixed;
      left: 50%;
      top: 50%;
      backhround-color:hotpink;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
    }
`;

export const Button = styled.button`

    display: inline-block;
    border-radius: 5px;
    background-color: #0D141B;
    border: 1px solid #C7D5EA;
    color: #C7D5EA;
    text-align: center;
    vertical-align: middle;
    font-size: 15px;
    width: 100px;
    height: 40px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px;
    position: absolute;
    bottom: -2%;
    left: 47.5%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    &:hover{
        background-color: #C7D5EA;
        color: #0D141B;
    }
    @media (max-width: 400px) {
        position: center;
        bottom: 25%;
    }
    @media (max-height: 600px) and (max-width: 400px){
      position: fixed;
      left: 50%;
      bottom: 0%;
      backhround-color:hotpink;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
    }

`;

export const ErrorMsg = styled.div`
    font-family: system-ui;
    display: inline-block;
    color: crimson;
    text-align: center;
    vertical-align: middle;
    font-size: 10px;
    width: 90%;
    height: auto;
    margin: 5px;
    position: fixed;
    bottom: 23%;
    left: 47.5%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
`;

export const Logicon = styled.img`
    height:13%;    
    width: auto;
    content: url(${betLogo});
    position: fixed;
    top: 8%;
    left: 20%;
    @media (max-width: 400px) {
      position: fixed;
      width: 40%;
      height: auto;
      top: 20%;
      left: 50%;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
    }
    @media (max-height: 245px){
      position: fixed;
      left: 50%;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
    }

`;