import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`




`
export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    height: 80%;
    
  }
`
export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #010101; 
  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`
export const Form = styled.form`
  background-color: #010101;
  max-width: 1000px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius:4px;
  box-shadow: 0 1px 3px rgba( 0, 0, 0, 0.9);
  
  @media screen and (max-width: 480px) {
    padding: 32px 32px;
  }
  `
  export const FormHeading = styled.h1`
  color: #fff;
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600px;
  text-align: center;
  
   
  `;  
export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  
`
export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`
export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border-radius: 4px;
`;
export const TextInput = styled.input`
height: 200px;
padding: 16px 16px;
margin-bottom: 32px;
border-radius: 4px;
  
`;
export const FormButton = styled.button`

  background: #01bf71;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`
export const Text = styled.span`
text-align: center;
margin-top: 24px;
color: #fff;
font-size: 14px;
`;
export const ContactInfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  
`
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`