import React from "react";
import styled from "styled-components";
import { register } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.hizliresim.com/nn9m6e6.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: 2550px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Aggrement = styled.span`
  font-size: 12px;
  margin: 20px;
  margin-left: 5%;
`;

const Button = styled.button`
  width: 60%;
  margin-left: 20%;
  padding: 20px;
  color: black;
  font-weight: 600;
  background: linear-gradient(to left, transparent 50%, teal 50%) right;
  background-size: 200%;
  transition: 0.2s ease-out;
  &:hover {
    background-position: left;
    color: white;
    border: 1px solid white;
  }
  font-style: 20px;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid black;
`;

const Register = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, { username, password, email });
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" onChange={(e) => setName(e.target.value)} />
          <Input
            placeholder="last name"
            onChange={(e) => setLastname(e.target.value)}
          />
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input placeholder="confirm password" type="password" />
          <Aggrement>
            By creating an account, I conset to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Aggrement>
          <Button onClick={handleClick} disabled={isFetching}>
            CREATE
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
