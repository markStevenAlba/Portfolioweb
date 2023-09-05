import React from 'react'
import styled from 'styled-components';

const Card = (props) => {
    const { Icon, disc, title, toggleTab } = props;
  return (
    <Container>
        <span className='green'><Icon/></span>
        <h1 className='text-light'>{title}</h1>
        <p>{disc}</p>
        {/* <em className="services__button mt-1"
        onClick={toggleTab}
      >View More
        <i className="uil uil-arrow-right services__button-icon">
        </i>
      </em> */}
    </Container>
  )
}

export default Card;

const Container = styled.div`
    width: 100%;
    /* background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%); */
    /* padding: 1rem; */
    text-align: center;
    position: relative;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: var(--container-color );
  padding: 3rem 1rem 1.5rem 2rem;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  border-radius: 1.25rem;
    span{
        font-size: 4rem;
    }
    
    h1{
        font-size: 1.2rem;
        padding-bottom: 1rem;
    }

    p{
        font-size: 0.8rem;
    }
`