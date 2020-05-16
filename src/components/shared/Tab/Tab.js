import React from 'react'
import styled from 'styled-components'

const TabButton = styled.button`
    font-family: Apercu Pro, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 1.25em;
    line-height: 1.56em;
    padding: 0.25em 1.5em;
    margin: 0.5em auto;
    outline: none;
    border: none;
    border-radius: 2em;
    white-space: nowrap;
    ${props=>{
        if(props.active){
            return `
            background-color:#FFFFFF;
            color:rgba(0, 0, 0, 0.8);
            box-shadow: 0em 0.25em 1.56em rgba(0, 0, 0, 0.1);
            `
        }else{
            return `
            background-color: inherit;
            color:rgba(0, 0, 0, 0.4);
            ` 
        }
    }}
`
const Tab = props =>(
    <TabButton
        className={props.className} 
        active = {props.active}
        onClick = {props.onClick}
        {...props}
    >
        {props.children}
    </TabButton>
)

export default Tab