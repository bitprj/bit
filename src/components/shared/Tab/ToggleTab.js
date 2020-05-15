import React from 'react'
import styled from 'styled-components'
import Tab from './Tab'

const TabGroup = styled.div`
    margin: 1em;
`
const TabContainer = styled.div`
    ${props => {
        return props.vertical ? 'display: flex;' : 'display: inline-block;'
    }}
    margin: 2em 2em;
`

const ToggleTab = props => (
    <TabGroup>  
        {
            props.tabs.map((tab,i) => (
                <TabContainer vertical={props.vertical}>
                    <Tab 
                        onClick={props.onClick} 
                        active={i === props.activeNum}
                    >
                        {tab}
                    </Tab>
                </TabContainer>
            ))
        }
    </TabGroup>
);

export default ToggleTab