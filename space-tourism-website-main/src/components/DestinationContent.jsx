import React, { useContext, useEffect, useState } from 'react'
import BgContext from '../contexts/BgContext';
import DestinationBgImageDesktop from "../assets/destination/background-destination-desktop.jpg";
import { css, styled } from 'styled-components';

const DestinationContentStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem 7rem 0 7rem;
`;

const sharedCss = css`
    margin: 0 auto;
    width: 50%;
    padding-bottom: 6rem;
`;

const LeftSideStyled = styled.div`
    ${sharedCss}
    padding-left: 5rem;
`;

const LeftSideText = styled.div`
    width: 400px;
    letter-spacing: 2px;
    font-family: 'Barlow Condensed', sans-serif;
    text-transform: uppercase;
    display: flex;
    margin-bottom: 6rem;
    > h1 {
        font-size: 28px;
        margin-top: 20px;
        margin-bottom: 20px;
        font-weight: 400;
    }
    > h1.menu-number {
        font-weight: 700;
        margin-right: 2rem;
    }
`;

const LeftSideCosmicBody = styled.div`
    background: url("${prop => "/destination/image-" + prop.cosmicbodyname + ".png"}") no-repeat;
    width: 445px;
    height: 445px;
    margin: 0 auto;
`;

const RightSideStyled = styled.div`
    ${sharedCss}
    padding-left: 8rem;
    margin-top: 11rem;
`;

const Tabs = styled.ul`
    display: flex;
    list-style: none;
    color: #dcdcf4;
`;

const Tab = styled.li`
    color: #dcdcf4;
    padding: 0 0 1.25rem 0;
    margin-right: 1.5rem;
    border-bottom: 4px solid transparent;
    &.active,
    &:focus,
    &:active,
    &:hover {
        border-bottom: 4px solid #dcdcf4;
        color: #000;
        transition: border-bottom ease-in 0.25s;
    }
    &:active,
    &:hover > a {
        color: #dcdcf4;
    }
    @media (max-width: 841px) {
        margin: 0;
        padding: 1.25rem;
        font-weight: 700;
        border-bottom: 4px solid transparent;
        &:focus,
        &:active,
        &:hover {
            border-bottom: 4px solid transparent;
            transition: border-bottom ease-in 0.25s;
        }
    }
    > a {
        text-decoration: none;
        text-transform: uppercase;
        color: #dcdcf4;
        &:visited {
            color: #dcdcf4;
        }
        letter-spacing: 2px;
    }
`;

const TabContents = styled.div`
    display: flex;
`;

const TabContent = styled.div`
    display: flex;
    opacity: 0;
    width: 0;
    height: 0;
    padding-top: 0;
    &.active {
        opacity: 1;
        width: 100%;
        height: 100%;
        padding-top: 1.5rem;
        transition: height ease-out 2s, opacity ease-out 2s;
    }
`;

const DestinationContent = () => {
    const {setBg} = useContext(BgContext);
    const [activeTab, setActiveTab] =  useState({
        'moon': "1", 
        'mars': "0", 
        'europa': "0", 
        'titan': "0", 
    });

    useEffect(() => {
        setBg(DestinationBgImageDesktop);
    }, []);

    const toggleTab = (e, tabId) => {
        e.preventDefault();
        const changedActiveTabs = {
            'moon': "0", 
            'mars': "0", 
            'europa': "0", 
            'titan': "0", 
        };
        changedActiveTabs[tabId] = "1";
        setActiveTab(changedActiveTabs);
    }

    return (
        <DestinationContentStyled>
            <LeftSideStyled>
                <LeftSideText>
                    <h1 className='menu-number'>01</h1> 
                    <h1>Pick your destination</h1>
                </LeftSideText>
                <LeftSideCosmicBody cosmicbodyname={Object.keys(activeTab).filter((v) => activeTab[v] === "1" ? v : null)} />
            </LeftSideStyled>
            <RightSideStyled>
                <Tabs>
                    <Tab className={activeTab['moon'] === "1" ? 'active' : null} onClick={(e) => toggleTab(e, 'moon')}><a href='#moon'>Moon</a></Tab>
                    <Tab className={activeTab['mars'] === "1" ? 'active' : null} onClick={(e) => toggleTab(e, 'mars')}><a href='#mars'>Mars</a></Tab>
                    <Tab className={activeTab['europa'] === "1" ? 'active' : null} onClick={(e) => toggleTab(e, 'europa')}><a href='#europa'>Europa</a></Tab>
                    <Tab className={activeTab['titan'] === "1" ? 'active' : null} onClick={(e) => toggleTab(e, 'titan')}><a href='#titan'>Titan</a></Tab>
                </Tabs>
                <TabContents>
                    <TabContent id="moon" className={activeTab['moon'] === "1" ? 'active' : null}>
                        Moon Details
                    </TabContent>
                    <TabContent id="mars" className={activeTab['mars'] === "1" ? 'active' : null}>
                        Mars Details
                    </TabContent>
                    <TabContent id="europa" className={activeTab['europa'] === "1" ? 'active' : null}>
                        Europa Details
                    </TabContent>
                    <TabContent id="titan" className={activeTab['titan'] === "1" ? 'active' : null}>
                        Titan Details
                    </TabContent>
                </TabContents>
            </RightSideStyled>
        </DestinationContentStyled>
    );
}

export default DestinationContent