import React, { useContext, useEffect } from 'react'
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
    margin-bottom: 2rem;
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
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DestinationContent = () => {
    const {setBg} = useContext(BgContext);
    useEffect(() => {
        setBg(DestinationBgImageDesktop);
    }, []);

    return (
        <DestinationContentStyled>
            <LeftSideStyled>
                <LeftSideText>
                    <h1 className='menu-number'>01</h1> 
                    <h1>Pick your destination</h1>
                </LeftSideText>
                <LeftSideCosmicBody cosmicbodyname="moon" />
            </LeftSideStyled>
            <RightSideStyled>
                Tabs
            </RightSideStyled>
        </DestinationContentStyled>
    );
}

export default DestinationContent