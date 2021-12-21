import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('../images/register.jpg');
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #fff;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Link = styled.div`
  margin: 10px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Button = styled.button`
  width: 40%;
  padding: 15px 20px;
  boder: none;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 5px;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN </Title>
        <Form>
          <Input placeholder="username" />

          <Input placeholder="password" />
          <Link>DO NOT YOU REMEMBER THE PASSWORD ?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>

          <Button>LOGIN</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
