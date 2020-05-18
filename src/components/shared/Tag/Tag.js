import React, {Component, useState, useEffect} from "react";
import {baseUrl} from "../../../services/AxiosInstances";
import PartyIcon from "../../../assets/icon/PartyIcon"
import ActiveDot from "../../../assets/icon/ActiveDot"

import styled from "styled-components";

const Emoji = styled.div`
   border-radius: 50%;
   background-color: white;
   box-shadow: 0px 0px 10px 10px LightGray;

   height: 3em;
   width: 3em;
   display: flex;
   justify-content: center;
   align-items: center;
   
   margin-top: 1em;
   margin-bottom: 1em;
`;

const EmojiContainer = styled.div`
    display: inline-block;

`;
const Container = styled.div`
    display: flex;
    align-items: center;
    
    cursor: pointer;
    transition: ease 0.25s all;
    
    &:hover {
    background-color: #0002;
  }
 
`;

const TagInfoContainer = styled.div`
    display: inline-block;
    padding-left: 2em;
    font-size: 1.2em;
`;


const Tag = (props) =>{
    const [tagName, setTagName] = useState(null);
    const [emoji, setEmoji] = useState(null);


    useEffect(() => {
        // URL used for testing
        fetch('https://3d0ae5c2-82ce-4b76-b1c8-1ff9d0c75b0e.mock.pstmn.io/tags/' + props.tagId, {
            method: 'GET',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type':'application/json'
            },
            redirect: 'follow'})
            .then(data => {
                return data.json()
            })
            .then(data =>{
                if (data.message === 'Tag does not exist'){
                    setTagName('JavaScript');
                    setEmoji(PartyIcon)
                }
                else{
                    setTagName(data.name);
                    setEmoji(data.emoji);
                }
            })
    });



    return (
        <Container>
            <ActiveDot fillColor = {props.tagId === props.active ? 'CornflowerBlue' : '#F8F8F8'}/>
            <EmojiContainer>
                <Emoji>
                    {emoji}
                </Emoji>
            </EmojiContainer>
            <TagInfoContainer>
                {tagName}
            </TagInfoContainer>
        </Container>
    );
};


export default Tag
