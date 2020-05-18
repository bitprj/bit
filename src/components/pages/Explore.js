import React, {useState, useEffect} from "react";
import styled from "styled-components";
import SideBar from "../shared/SideBar";
import User from "../shared/low/User";
import Article from "./Article";
import Tag from "../shared/Tag/Tag";
import TagList from "../shared/containers/TagList";
import TagSummary from "../shared/Tag/TagSummary";
import Button from "../shared/low/Button";

import PartyIcon from "../../assets/icon/PartyIcon";
import UserList from "../shared/containers/UserList";

const Container = styled.div`
	display: flex;
	overflow-x: hidden;
	font-size: 80%;

	@media screen and (orientation: portrait) and (max-width: 1200px) {
		font-size: 100%;
	}
`;

const Content = styled.div`
    width: 65vw;
    
`;



const Explore = () => {

    // list of user tags & articles. These will be from backend user data
    const tagList = [1,2,3,4];

    const views = new Array(tagList.length);
    for (let i = 0; i < views.length; i++){
        views[i] = {name:'', summary: '', id: tagList[i], emoji: ''}
    }

    const [tags, setTags] = useState(views);
    const [activeTag, setActiveTag] = useState(tagList[0]);



    useEffect(() => {
        for (let i = 0; i < views.length; i++){
            fetch('https://3d0ae5c2-82ce-4b76-b1c8-1ff9d0c75b0e.mock.pstmn.io/tags/' + views[i].id, {
                method: 'GET',
                mode: 'cors',
                credentials: 'same-origin',
                headers: {
                    'Content-Type':'application/json'
                },
                redirect: 'follow'
            })
                .then(data => {
                    return data.json();
                })
                .then(data =>{
                    if (data.message === 'Tag does not exist'){
                        let newTags = tags;
                        newTags[i].id = 1;
                        newTags[i].name = 'JavaScript';
                        newTags[i].summary = 'Lorem Ipsum Javascript';
                        newTags[i].emoji = {PartyIcon};
                        setTags(newTags);
                    }
                    else{
                        let newTags = tags;
                        newTags[i].id = data.id;
                        newTags[i].name = data.name;
                        newTags[i].summary = data.summary;
                        newTags[i].emoji = data.emoji;
                        setTags(newTags);
                    }
                })
        }
    },[]);

    const handleOnClick = (tagId) =>{
        console.log(tagId);
        setActiveTag(tagId);
    };

    const listOfTags =

        [<div onClick={() => handleOnClick(tagList[0])}><Tag tagId = {tagList[0]} active = {activeTag} /></div>,
        <div  onClick={() => handleOnClick(tagList[1])}><Tag tagId = {tagList[1]} active = {activeTag}  /></div>,
        <div  onClick={() => handleOnClick(tagList[2])}><Tag tagId = {tagList[2]} active = {activeTag}  /></div>,
        <div  onClick={() => handleOnClick(tagList[3])}><Tag tagId = {tagList[3]} active = {activeTag}  /></div>];


    const leftSideBarItems = [<User childComponent = {<div>@lazypalatypus</div>} name = {'Daniel Kim'} ImgLink = {'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'}/>,
        <TagList items = {listOfTags}/>];

    // Static
    const users = [<User childComponent = {<Button
                                                        style = {{lineHeight: '0.2em'}}
                                                        light = "dodgerBlue"
                                                        noOutline = "true"
                                                        dark = "white"
                                                        >
                                                        <b>+Follow</b>
                                                        </Button>}
                                     name = {'Daniel Kim'}
                                     ImgLink = {'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'}/>,
                                <User childComponent = {<Button
                                    style = {{lineHeight: '0.2em'}}
                                    light = "dodgerBlue"
                                    noOutline = "true"
                                    dark = "white"
                                >
                                    <b>+Follow</b>
                                </Button>}
                                      name = {'Bryan Wong'}
                                      ImgLink = {'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg'}/>,
                                <User childComponent = {<Button
                                    style = {{lineHeight: '0.2em'}}
                                    light = "dodgerBlue"
                                    noOutline = "true"
                                    dark = "white"
                                >
                                    <b>+Follow</b>
                                </Button>}
                                      name = {'Mark Ma'}
                                      ImgLink = {'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSz3oe7au6Voj7bwkAdVqEhbemBlvOSDNsybGBb-1nN_q4gPhB3&usqp=CAU'}/>];

    const mods  = [<User childComponent = {<Button
        style = {{lineHeight: '0.2em'}}
        light = "dodgerBlue"
        noOutline = "true"
        dark = "white">
        <b>+Follow</b>
        </Button>}
         name = {'Becca Tran'}
         ImgLink = {'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'}/>,
        <User childComponent = {<Button
            style = {{lineHeight: '0.2em'}}
            light = "dodgerBlue"
            noOutline = "true"
            dark = "white">
            <b>+Follow</b>
            </Button>}
            name = {'Shreya Gupta'}
            ImgLink = {'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'}/>];

    return (
        <Container>
            <SideBar items = {leftSideBarItems}/>
            <Content>
                <TagSummary active = {activeTag}/>

                {/* Will need to change this based on a query of db for articles associated with the active tag*/}

                <Article  authorImg = {'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png'}
                          articleImg = {'https://cdn.the-scientist.com/assets/articleNo/66547/aImg/33968/tech-transfer-thumb-s.png'}
                          btnTxt = {'Bookmark'}
                          title = {'Intro to react'}
                          tags = {['JavaScript', 'React']}
                          isDraft = {false}
                          readTime = {'5 min read'}
                />
                <Article  authorImg = {'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg'}
                          articleImg = {'https://cdn.the-scientist.com/assets/articleNo/66547/aImg/33968/tech-transfer-thumb-s.png'}
                          numLikes = {25}
                          numComments  = {10}
                          author = {'Bryan Wong 👱‍♂'}
                          lastEdit = {'· May 11 (57 mins ago)'}
                          btnTxt = {'Edit'}
                          title = {'Intro to react'}
                          tags = {['JavaScript', 'React']}
                          isDraft = {false}
                          readTime = {'5 min read'}
                />
            </Content>
            <SideBar items = {[<UserList items = {users} type = {'Top Contributors'}/>,<UserList items = {mods} type = {'Mods'}/>]}/>
        </Container>
    );
};

export default Explore
