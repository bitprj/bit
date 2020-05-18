import React from "react";
import styled from "styled-components";

const Header = styled.div`
    text-align:center;
    font-size: 1.2em;
    margin-top: 2em;
    margin-bottom: 1em;
    font-weight: bold;
`;

const TagList = (props) => {

        return (
            <div>
                <Header>Your Tags</Header>
                {props.items.map((item, index) => <div key = {index}>{item}</div>)}
            </div>
        );
};

export default TagList
