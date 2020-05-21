import React from 'react';
import styled from 'styled-components'
import Button from './shared/low/Button'
import IconLine from './shared/low/IconLine'
import GitHubIcon from '@material-ui/icons/GitHub'
import { userLogin } from '../redux/actions/account.js'
import { connect } from 'react-redux'


const Card = styled.div`
    width: 46em;
    height: 36em;
    background-color: #ffffff;
    border-radius: 5px;
    margin: auto;
    margin-top: 8em
`
const WelcomeImg = styled.div`
    width: 46em;
    height: 19em;
    background: url(https://s3-alpha-sig.figma.com/img/8a27/c1b1/1462b5022175626624e01bae88b9b40a?Expires=1590364800&Signature=DSi5-wzf68mhEAmHCWMg93SskTTQF~SfaSBLnJS9btiv9D1r3iP5OSspanpI5-zWZ-lhHKDbtMEMcWc3kRjz7ocAP8cxkHEBVQh2~cF~QtVLZJ9c2TutCgFAHEN6EhxBAJfEjjNXFKE6y91IMNW6Pzuc4S3qOBZpG1hQRKNAM6jO~hcgbrx-aOQnk7RN1xah7fSakA7LRvHPpV0SwxW4GLv9zb4q3j3Wc21JinQp3OPivlokYpKTl251rJwJIIGBS-JBs~q2mu6sdRb0hS8Ok--0myTGWpma-Fe~o3HV~tJqfmaxXiDcMP3-7SzfEOHiX7~iRNvRJs8B-A943RHR6w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA);
    background-size: 46em 21em;
`

const WelcomeTitle = styled.p`
    margin: 50px 60px 0;
    font-family: 'Apercu Pro';
    font-weight: bold;
    font-size: 2.5em;
`

const Intro = styled.p`
    margin: 10px 60px 0;
    font-family: 'Apercu Pro';
    font-weight: normal;
    font-size: 1.2em;
`
const SignUpButton = styled(Button)`
    margin: 20px 60px 0;
`
const ButtonConfig = {
    dark: '#2188FF',
}

const Signup = ({
    onLogin
}) => {
    return (
        <Card> 
            <WelcomeImg />
            <WelcomeTitle>Welcome to Bit Project</WelcomeTitle>
            <Intro>Create an Account to start sharing</Intro>
            <SignUpButton invert onClick={onLogin} {...ButtonConfig}>
                <IconLine icon={<GitHubIcon />}>Sign in with Github </IconLine>
            </SignUpButton>
        </Card>
    )
}

const mapDispatchToProps = dispatch => ({
	onLogin: () => dispatch(userLogin())
})

export default connect(null, mapDispatchToProps)(Signup)
