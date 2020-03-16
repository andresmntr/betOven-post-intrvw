import styled from '@emotion/styled';
import background from '../../assets/background.jpg'

export const PageContainer = styled.div`
    position: fixed;
    padding: 0px;
    background: #0D141B;
    width: 100%;
    height: 100%;
    top: 0%;
    left: 0%;
    @media (max-width: 400px) {
        position: fixed;
        width: 100%;
        height: 100%;
        padding: 0px
    }
`;

export const LoginPageContainer = styled.div`
    position: fixed;
    padding: 25px;
    background-image: url(${background});
    width: 100%;
    height: 100%;
    top: 0%;
    left: 0%;
    @media (max-width: 400px) {
        position: fixed;
        width: 100%;
        height: 100%;
        background: #0D141B;
        padding: 0px
    }
`;

export const FormContainer = styled.form`
    position: fixed;
    width: 219px;
    height: 243px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background: #0D141B;
    border: 1px solid #C7D5EA;
    box-sizing: border-box;
    border-radius: 5px;
    @media (max-width: 400px) {
        position: absolute;
        width: 100%;
        height: 100%;
        border: 0px solid #C7D5EA;
        border-radius: 0px;
    }
    @media (max-height: 245px){
        position: absolute;
        width: 100%;
        height: 100%;
    }
`;