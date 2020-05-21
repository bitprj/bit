import React from 'react'
import Signup from '../Signup'
import styled from 'styled-components'
import { connect } from 'react-redux'

const Wraper = styled.div`
    position: absolute;
    width:100%;
    height: 100%;
`

const Home = ({
    userProfile
}) => {
    let userID = null
    if(userProfile){
        userID = userProfile.user_id
    }
    return (
        <Wraper>
            {(!userID) &&
                <Signup />
            }
        </Wraper>
    )
}

const mapStateToProps = state => ({
    userProfile: state.account.user
})

export default connect(mapStateToProps)(Home)
