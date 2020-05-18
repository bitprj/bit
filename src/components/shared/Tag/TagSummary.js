import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Button from "../low/Button";
import PartyIcon from "../../../assets/icon/PartyIcon";

const Container = styled.div`
    margin: 3em;
`;

const EmojiContainer = styled.div`
    display: inline-block;
    vertical-align:top;
`;

const Emoji = styled.div`
    border-radius: 50%;
    background-color: white;
    box-shadow: 0px 0px 10px 10px LightGray;
    height: 4em;
    width: 4em;
    
   display: flex;
   justify-content: center;
   align-items: center;
`;

const SummaryContainer = styled.div`
    display: inline-block;
    margin-left: 2em;
    vertical-align: top;
    width: 80%;
`;

const TagName = styled.div`
    font-size: 1.75em;
    display: inline-block;
`;

const handleClick = () =>{
    alert('Not Yet Implemented')
};


const TagSummary = (props) => {
    const [emoji, setEmoji] = useState(null);
    const [summary, setSummary] = useState(null);
    useEffect(() =>{
        fetch('https://3d0ae5c2-82ce-4b76-b1c8-1ff9d0c75b0e.mock.pstmn.io/tags/' + props.active, {
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
                    setEmoji(PartyIcon);
                    setSummary('Nothing on this topic yet...');
                }
                else{
                    setEmoji(data.emoji);
                    setSummary(data.summary);
                    console.log(data, props.active); // shows summary component fetches & sets emoji and summary whenever active tag changes
                }
        })
    });

    return (
        <Container>
            <EmojiContainer>
                <Emoji>
                    {emoji}
                </Emoji>
            </EmojiContainer>
            <SummaryContainer>
                <TagName>
                    Javascript
                </TagName>
                <Button
                    style = {{lineHeight: '0.2em'}}
                    light = "dodgerBlue"
                    noOutline = "true"
                    dark = "white"
                    onClick = {handleClick}
                >
                    <b>+Follow</b>
                </Button>
                <div>
                    {summary}
                </div>
            </SummaryContainer>
        </Container>
    );
};

export default TagSummary
