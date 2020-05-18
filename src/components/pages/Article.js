import React from "react";
import styled from "styled-components";
import Button from "../shared/low/Button";

const Container = styled.div`
    margin: 3em;
    background-color: white;
    padding: 2em;
    width: 80%;
`;

const Summary = styled.div`
    display: inline-block;
    vertical-align: top;
    
    
`;

const ImgContainer = styled.img`
    width: 3em;
    height: 3em;
    border-radius: 50%;
    display: inline-block;
    vertical-align: top;
    margin-right: 2em;
`;

const ArticleTitle = styled.div`
    font-size: 1.75em;
`;

const Tag = styled.div`
    display: inline-block;
    margin-right:2em;   
    font-size: 0.75em;
    margin-top: 1em;
`;

const Author = styled.div`
    margin-top: 1em;
    color: gray;
`;

const Reaction = styled.div`
    display: inline-block;
    margin-top: 1em;
    margin-right:2em;   
`;


const ButtonWrapper = styled.div`
    display: inline-block;
    padding-left: 26em;
`;


// <Article  authorImg = {'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png'}
//           articleImg = {'https://cdn.the-scientist.com/assets/articleNo/66547/aImg/33968/tech-transfer-thumb-s.png'}
//           numLikes = {25}
//           numComments  = {10}
//           author = {'Bryan Wong'}
//           btnTxt = {'Edit'}
//           title = {'Intro to react"'}
//           tags = {['JavaScript', 'React']}
//           isDraft = {false}
// />

const handleClick = () =>{
    alert('Not Yet Implemented')
};


const Article = (props) => {
        return (
            <Container>
                <ImgContainer src = {props.authorImg} alt={''}/>
                <Summary>
                    <ArticleTitle>{props.title}</ArticleTitle>
                    {props.tags ? props.tags.map((item, index) => <Tag key = {index}>{'#' + item}</Tag>) : <></>}
                    {props.author ? <Author>{props.author} {props.lastEdit}️</Author> : <div></div>}
                    <Reaction> {props.numLikes != null ? '❤️' +  props.numLikes : <></>} </Reaction>
                    <Reaction> {props.numComments != null ? '💬' + props.numComments : <></>} </Reaction>
                    <Reaction> {props.numSeen != null ? '👀️' + props.numSeen : <></>} </Reaction>
                    <ButtonWrapper>

                        {props.btnTxt === 'Bookmark' ? <div style = {{'display': 'inline-block','marginRight': '2em', 'color' : 'gray'}} >{props.readTime}</div>: <></> }
                        {props.btnTxt === 'Edit' ? <div style = {{'display': 'inline-block','marginRight': '2em', 'color' : 'gray'}} onClick={handleClick}>Delete</div> : <></> }

                        <Button
                            light = "dodgerBlue"
                            noOutline = "true"
                            dark = "white"
                            onClick = {handleClick}
                        >{props.btnTxt}</Button>
                    </ButtonWrapper>


                </Summary>
            </Container>
        );
};

export default Article
