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
    <>
    {props.tabs && props.tabs.length > 0 &&
        <TabGroup>  
            {
                props.tabs.map((tab,i) => (
                    <TabContainer vertical={props.vertical}>
                        <Tab 
                            active={i === props.activeNum}
                            onClick={props.onClick} 
                        >
                            {tab}
                        </Tab>
                    </TabContainer>
                ))
            }
        </TabGroup>
    }
    </>
);

export default ToggleTab