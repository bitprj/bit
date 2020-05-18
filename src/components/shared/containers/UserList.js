import React from "react";
import styled from "styled-components";

const Container = styled.div`
    -webkit-transform:scale(0.7);
    -moz-transform:scale(0.7);
    -ms-transform:scale(0.7);
    transform:scale(0.7);
    margin-top: -4em;
`;


const UserList = (props) =>{
    return(
            <Container>
                <h1>{props.type}</h1>
                {props.items.map((item, index) => <div key = {index}>{item}</div>)}
            </Container>

    );
};

export default UserList;
