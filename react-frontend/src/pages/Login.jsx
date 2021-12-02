import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link as Lnk } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.hizliresim.com/965afac.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=975&w=1440")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  a {
    color: black;
    text-decoration: none;
    text-align: center;
  }
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 60%;
  margin-left: 20%;
  margin-bottom: 10px;
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

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <>
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleClick} disabled={isFetching}>
              LOGIN
            </Button>
            {error && <Error>Something went wrong...</Error>}
            <Lnk>DO NOT YOU REMEMBER THE PASSWORD?</Lnk>
            <Lnk to="/register">CREATE A NEW ACCOUNT</Lnk>
            <Lnk to={"/"}>Home</Lnk>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
