import React from 'react'
import styled from 'styled-components'
import Button from '../shared/low/Button'
// import User from'../shared/low/User'
const ListView = styled.div`
    max-width:36em;
    margin:1em;
`

const ListItem = styled.div`
    width:100%;
    padding:1em;
    margin:1em auto;
    border-radius: 0.5em;
    background: #FFFFFF;
    display:flex;
    justify-content: space-between;
`
const ButtonTxt = styled.p`
    font-family: Apercu Pro, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 1em;
    line-height: 1em;
    margin:0em;
    text-align: center;
    color: #FFFFFF;
`

const FollowerList = props =>(
    <>
    {props.followers && props.followers.length > 0 && 
        <ListView>
            {
                props.followers.map(follower => (
                    <ListItem>
                        User Information put here
                        {/* <User 
                            ImgLink = {follower.ImgLink}
                            name = {follower.name}  
                        >
                            {follower.userName}
                        </User> */}
                        <Button light = {true} onClick = {props.onClick}>
                            <ButtonTxt>{follower.buttonTxt}</ButtonTxt>
                        </Button>
                    </ListItem>
                ))
            }
        </ListView>
    }
    </>
);

export default FollowerList