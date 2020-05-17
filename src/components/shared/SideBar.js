import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 2em;
  padding-right: 0;
  padding-left: 0;
  width: 18em;
  @media screen and (min-width: 0px) and (max-width: 500px) {
    display: none;
  }
`;


const SideBar = (props) =>{
        return (
            <Container>
                {props.items.map((item, index) => <div key = {index}>{item}</div>)}
            </Container>
        )
};

export default SideBar
