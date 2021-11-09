import { ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 70vh;
  position: relative;
  &:hover {
    -webkit-box-shadow: 0px 7px 12px 0px rgba(0, 0, 0, 0.8);
    -moz-box-shadow: 0px 7px 12px 0px rgba(0, 0, 0, 0.8);
    box-shadow: 0px 7px 12px 0px rgba(0, 0, 0, 0.8);
    transform: scale(1.005);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);
`;
const Button = styled.button`
  padding: 20px;
  color: white;
  font-weight: 600;
  background: linear-gradient(to left, transparent 50%, white 50%) right;
  background-size: 200%;
  transition: 0.2s ease-out;
  &:hover {
    background-position: left;
    color: black;
    transform: translate(20px);
  }
  font-style: 20px;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid white;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
