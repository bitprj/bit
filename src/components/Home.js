import React from 'react'
import FollowerList from'./Dashboard/FollowerList'
import ToggleTab from'./shared/Tab/ToggleTab'
const Home = () => {
    return( 
    <>
        <FollowerList followers = {[{"buttonTxt" : "+ Follow"}, {"buttonTxt" : "+ Follow"},{"buttonTxt" : "Following"},{"buttonTxt" : "+ Follow"}]}/>
        <ToggleTab tabs = {['Posts(24)', 'Followers(4)', 'Following(12)']} activeNum ={1}></ToggleTab>
        <ToggleTab tabs = {['Posts(24)', 'Followers(4)', 'Following(12)']} vertical = {true} activeNum ={0}></ToggleTab>
    </>
    )
}

export default Home
