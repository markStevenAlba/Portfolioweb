import React from "react";

import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";
import "../services/services.css";



const Services = ({toggleTab, data}) => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4 className="section__title">
          My services
        </h4>
        <h1 className="section__subtitle">What <span className="green">I Do</span></h1>
      </Slide>
      <Cards>
      {data && data.contents.map((a, index) => {
        let dir  = "up";
        if(index === 0){
          dir = "left"
        }
        
        if(index === data.contents.length - 1){
          dir = "right"

        }
        
      
        return (
          <Slide direction={dir}>
          <Card
            Icon={a.icon}
            title={a.title}
            disc={a.description}
            toggleTab={() => toggleTab(index)}
          />
        </Slide>
        )
      })}
       
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
