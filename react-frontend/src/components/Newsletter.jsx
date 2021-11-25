import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin: 20px;
`;

const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgrey;
  border-top-right-radius: 80px 80px;
  border-bottom-right-radius: 80px 80px;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  font-family: "Urbanist", sans-serif;
  font-weight: 600;
  font-size: 16px;
`;
const Icon = styled.svg`
  padding-left: 30px;
  font-size: 20px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
  }
`;
const Button = styled.button`
  flex: 1;
  border: none;
  cursor: pointer;
  border-top-right-radius: 80px 80px;
  border-bottom-right-radius: 80px 80px;
  background-color: teal;
  color: white;
  &:hover ${Icon} {
    color: green;
    width: 50px;
    font-size: 20px;
    transition: all 0.5s ease;
    transform: translate(25px);
  }
  &:hover {
    transition: all 0.1s ease;
    background-color: #efefef;
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder="Your email..." />
        <Button>
          <Icon>
            <Send />
          </Icon>
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
