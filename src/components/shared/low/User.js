import React, {Component} from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 1em;
  width: 18em;
  @media screen and (min-width: 0px) and (max-width: 500px) {
    display: none;
  }
  
  border-radius:0.2em;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Picture = styled.img`
	height: 4em;
	width: 4em;
	margin-right: 2em;
	src/components/shared/low/User.js;
	border-radius: 50%;
`;

const UserName = styled.h1`
	padding-top: 0;
	padding-bottom: 0;
	margin-top: 0;
	margin-bottom: 0;
`

const User = (props) => {
        return (
            <Container>
                <Picture src = {props.ImgLink}/>
                <div>
                    <UserName>
                        {props.name}
                    </UserName>
                    {props.childComponent}
                </div>
            </Container>
        )
};

export default User
