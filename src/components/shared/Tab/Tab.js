import React from 'react'
import styled from 'styled-components'

const TabButton = styled.button`
    font-family: Apercu Pro, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 1.25em;
    line-height: 1.56em;
    display: inline-block;
    position: relative;
    padding: 0.25em 1.5em;
    margin: 1em auto;
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
        active = {props.active}
    >
        {props.children}
    </TabButton>
)

export default Tab