import React from 'react'
import { Container,FormHeading, FormWrap, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, TextInput } from './Contact'

const Contact = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form action='#'>
            <FormHeading>Contact us</FormHeading>
              <FormH1>For more enquiry, kindly send us an email.</FormH1>
              <FormLabel htmlFor='for'>Name</FormLabel>
                <FormInput htmlFor='name' required />
              <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput htmlFor='email' required />
                <FormLabel htmlFor='for'>Message</FormLabel>
                <TextInput required />
              <FormButton type='submit'>Continue</FormButton>
              
            </Form>
          </FormContent>
        </FormWrap>
      </Container>

      
    </>
  )
}

export default Contact