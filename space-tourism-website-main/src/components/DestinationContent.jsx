import React, { useContext, useEffect, useState } from 'react'
import BgContext from '../contexts/BgContext';
import DestinationBgImageDesktop from "../assets/destination/background-destination-desktop.jpg";
import DestinationBgImageTablet from "../assets/destination/background-destination-tablet.jpg";
import DestinationBgImageMobile from "../assets/destination/background-destination-mobile.jpg";
import { css, styled } from 'styled-components';
import useWindowDimensions from '../hooks/useWindowDimensions';

const DestinationContentStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem 7rem 0 0;
    @media (max-width: 1024px) {
        flex-direction: column;
        margin: 1rem 0 0 0;
    }
    @media (max-width: 768px) {
        margin: 0;
    }
`;

const sharedCss = css`
    margin: 0 auto;
    width: 50%;
    padding-bottom: 6rem;
    @media (max-width: 1024px) {
        padding-left: 2.5rem;
        width: auto;
        padding-bottom: 1.7rem;
    }
    @media (max-width: 768px) {
        padding-left: 0;
    }
`;

const LeftSideStyled = styled.div`
    ${sharedCss}
    padding-left: 12.25rem;
    @media (max-width: 1024px) {
        margin: 0;
    }
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
        margin-right: 1.5rem;
        color: rgba(255, 255, 255, 0.25);
    }
    @media (max-width: 1024px) {
        margin-bottom: 3.75rem;
        justify-content: flex-start;
    }
    @media (max-width: 768px) {
        margin-bottom: 1rem;
        justify-content: center;
        width: 100%;
        > h1 {
            font-size: 16px;
            font-weight: 400;
        }
        > h1.menu-number {
            font-size: 16px;
        }
    }
`;

const LeftSideCosmicBody = styled.div`
    background: url("${prop => "/destination/image-" + prop.cosmicbodyname + ".png"}") no-repeat;
    width: 445px;
    height: 445px;
    margin: 0 auto;
    @media (max-width: 1024px) {
        width: 300px;
        height: 300px;
        background-size: contain;
    }
    @media (max-width: 768px) {
        width: 170px;
        height: 170px;
    }
`;

const RightSideStyled = styled.div`
    ${sharedCss}
    padding-left: 8rem;
    margin-top: 11rem;
    @media (max-width: 1024px) {
        margin-top: 1.7rem;
    }
    @media (max-width: 768px) {
        margin-top: 0;
        padding-left: 2.5rem;
        padding-right: 2.5rem;
        width: 100%;
    }
`;

const Tabs = styled.ul`
    display: flex;
    list-style: none;
    color: #fff;
    @media (max-width: 1024px) {
        justify-content: center;
    }
`;

const Tab = styled.li`
    color: #fff;
    padding: 0 0 1.25rem 0;
    margin-right: 1.5rem;
    border-bottom: 4px solid transparent;
    &.active,
    &:focus,
    &:active,
    &:hover {
        border-bottom: 4px solid #fff;
        color: #000;
        transition: border-bottom ease-in 0.25s;
    }
    &:active,
    &:hover > a {
        color: #fff;
    }
    > a {
        text-decoration: none;
        text-transform: uppercase;
        color: #fff;
        &:visited {
            color: #fff;
        }
        letter-spacing: 2px;
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
    @media (max-width: 768px) {
        margin: 0;
        padding: 1.25rem;
        font-weight: 700;
        border-bottom: 4px solid transparent;
        &.active,
        &:focus,
        &:active,
        &:hover {
            border-bottom: 4px solid #fff;
            transition: border-bottom ease-in 0.25s;
            font-size: 14px;
        }
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
    flex-direction: column;
    overflow: hidden;
    > h1 {
        width: 0;
        height: 0;
    }
    > p {
        width: 0;
        height: 0;
        display: none;
    }
    > hr {
        width: 0;
        height: 0;
    }
    > .footer {
        width: 0;
        height: 0;
        > .right-footer,
        > .left-footer {
            width: 0;
            height: 0;
            > div:first-child {
                width: 0;
                height: 0;
            }
            > div:nth-child(2) {
                width: 0;
                height: 0;
            }
        }
    }
    &.active {
        opacity: 1;
        width: 100%;
        height: 100%;
        padding-top: 1.5rem;
        transition: height ease-out 2s, opacity ease-out 2s;
        > h1 {
            font-family: 'Bellefair', serif;
            font-size: 100px;
            margin-top: 1rem;
            margin-bottom: 1rem;
            width: 100%;
            height: 100%;
        }
        > p {
            font-family: 'Barlow', sans-serif;
            font-size: 18px;
            max-width: 436px;
            margin-bottom: 3.4rem;
            line-height: 1.7;
            width: 436px;
            height: 100%;
            display: block;
        }
        > hr {
            max-width: 444px;
            width: 444px;
            border: 1px solid #383B4B;
            height: auto;
        }
        > .footer {
            width: 100%;
            height: 100%;
            margin-top: 0.88rem;
            padding-top: 0.88rem;
            display: flex;
            > .right-footer,
            > .left-footer {
                width: 50%;
                text-transform: uppercase;
                height: auto;
                > div:first-child {
                    font-family: 'Barlow Condensed', sans-serif;
                    font-size: 14px;
                    letter-spacing: 3px;
                    margin: 0.75rem 0;
                    width: auto;
                    height: auto;
                }
                > div:nth-child(2) {
                    font-family: 'Bellefair', serif;
                    font-size: 28px;
                    margin: 0.75rem 0;
                    width: auto;
                    height: auto;
                }
            }
        }
        @media (max-width: 1024px) {
            > h1 {
                text-align: center;
            }
            > p {
                text-align: center;
            }
            > .footer {
                justify-content: center;
                > .right-footer,
                > .left-footer {
                    text-align: center;
                    > div:first-child {
                        text-align: center;
                    }
                    > div:nth-child(2) {
                        text-align: center;
                    }
                }
            }
        }
        @media (max-width: 768px) {
            > h1 {
                font-family: 'Bellefair', serif;
                font-size: 56px;
            }
            > p {
                font-family: 'Barlow', serif;
                font-size: 15px;
                max-width: unset;
                width: 100%;
            }
            > hr {
                max-width: unset;
                width: 100%;
                border: 1px solid #383B4B;
                height: auto;
            }
            > .footer {
                flex-direction: column;
                align-items: center;
                > .left-footer {
                    margin-bottom: 2rem;
                }
            }
        }
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

    const { width } = useWindowDimensions();
    useEffect(() => {
        if (width > 768 && width < 1025) {

            setBg(DestinationBgImageTablet);
        } else if (width > 1024) {
            
            setBg(DestinationBgImageDesktop);
        } else if (width <= 768 ) {
            
            setBg(DestinationBgImageMobile);
        }
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
                        <h1>MOON</h1>
                        <p>
                            See our planet as you’ve never seen it before. 
                            A perfect relaxing trip away to help regain perspective and come back refreshed. 
                            While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
                        </p>
                        <hr />
                        <div className='footer'>
                            <div className='left-footer'>
                                <div>AVG. DISTANCE</div>
                                <div>384,400 km</div>
                            </div>
                            <div className='right-footer'>
                                <div>Est. travel time</div>
                                <div>3 days</div>
                            </div>
                        </div>
                    </TabContent>
                    <TabContent id="mars" className={activeTab['mars'] === "1" ? 'active' : null}>
                        <h1>MARS</h1>
                        <p>
                            Don’t forget to pack your hiking boots. 
                            You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. 
                            It’s two and a half times the size of Everest!
                        </p>
                        <hr />
                        <div className='footer'>
                            <div className='left-footer'>
                                <div>AVG. DISTANCE</div>
                                <div>225 MIL. km</div>
                            </div>
                            <div className='right-footer'>
                                <div>Est. travel time</div>
                                <div>9 months</div>
                            </div>
                        </div>
                    </TabContent>
                    <TabContent id="europa" className={activeTab['europa'] === "1" ? 'active' : null}>
                        <h1>EUROPA</h1>
                        <p>
                            The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. 
                            With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.
                        </p>
                        <hr />
                        <div className='footer'>
                            <div className='left-footer'>
                                <div>AVG. DISTANCE</div>
                                <div>628 MIL. km</div>
                            </div>
                            <div className='right-footer'>
                                <div>Est. travel time</div>
                                <div>3 years</div>
                            </div>
                        </div>
                    </TabContent>
                    <TabContent id="titan" className={activeTab['titan'] === "1" ? 'active' : null}>
                        <h1>TITAN</h1>
                        <p>
                            The only moon known to have a dense atmosphere other than Earth, 
                            Titan is a home away from home (just a few hundred degrees colder!). 
                            As a bonus, you get striking views of the Rings of Saturn.
                        </p>
                        <hr />
                        <div className='footer'>
                            <div className='left-footer'>
                                <div>AVG. DISTANCE</div>
                                <div>1.6 BIL. km</div>
                            </div>
                            <div className='right-footer'>
                                <div>Est. travel time</div>
                                <div>7 years</div>
                            </div>
                        </div>
                    </TabContent>
                </TabContents>
            </RightSideStyled>
        </DestinationContentStyled>
    );
}

export default DestinationContent