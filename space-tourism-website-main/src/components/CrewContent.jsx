import { useContext, useEffect, useState } from "react";
import BgContext from "../contexts/BgContext";
import useWindowDimensions from "../hooks/useWindowDimensions";
import CrewBgImageDesktop from "../assets/crew/background-crew-desktop.jpg";
import CrewBgImageTablet from "../assets/crew/background-crew-tablet.jpg";
import { css, styled } from "styled-components";

const CrewContentStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem 0 0 0;
    height: 100vh;
    @media (max-width: 1024px) {
        flex-direction: column;
        margin: 1rem 0 0 0;
    }
`;

const sharedCss = css`
    margin: 0 auto;
    width: 50%;
    @media (max-width: 1024px) {
        padding-left: 2.5rem;
        width: auto;
        padding-bottom: 1.7rem;
    }
`;

const LeftSideStyled = styled.div`
    ${sharedCss}
    padding-left: 5rem;
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
        margin-right: 2rem;
    }
    @media (max-width: 1024px) {
        margin-bottom: 3.75rem;
        justify-content: flex-start;
    }
`;

const RightSideStyled = styled.div`
    ${sharedCss}
    padding-left: 0;
    margin-top: 0;
    @media (max-width: 1024px) {
        margin-top: 1.7rem;
    }
`;

const RightSideCosmicBody = styled.div`
    background: url("${prop => "/crew/image-" + prop.cosmicbodyname + ".png"}") no-repeat;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-size: contain;
    background-position-x: center;
    @media (max-width: 1024px) {
        width: 300px;
        height: 300px;
    }
`;

const Detail = styled.div`
    margin-top: 3rem;
`;

const DetailSubheader = styled.div`
    font-family: 'Bellefair', serif;
    font-size: 32px;
    color: rgba(255, 255, 255, 0.52);
    text-transform: uppercase;
`;

const DetailHeader = styled.div`
    font-family: 'Bellefair', serif;
    font-size: 56px;
    text-transform: uppercase;
`;
const DetailText = styled.p`
    font-family: 'Barlow', sans-serif;
    font-size: 18px;
    line-height: 1.7;
`;

const CrewContent = () => {
    const {setBg} = useContext(BgContext);
    const [selectedCrew, setSelectedCrew] =  useState({
        'douglas-hurley': "1", 
        'mark-shuttleworth': "0", 
        'victor-glover': "0", 
        'anousheh-ansari': "0", 
    });

    const { width } = useWindowDimensions();
    useEffect(() => {
        if (width > 767 && width < 1025) {

            setBg(CrewBgImageTablet);
        } else if (width > 1024) {
            
            setBg(CrewBgImageDesktop);
        }
    }, []);

    return (
        <CrewContentStyled>
            <LeftSideStyled>
                <LeftSideText>
                    <h1 className='menu-number'>02</h1> 
                    <h1>MEET YOUR CREW</h1>
                </LeftSideText>
                <Detail>
                    <DetailSubheader>Commander</DetailSubheader>
                    <DetailHeader>Douglas Hurley</DetailHeader>
                    <DetailText>
                        Douglas Gerald Hurley is an American engineer, 
                        former Marine Corps pilot and former NASA astronaut. 
                        He launched into space for the third time as commander of Crew Dragon Demo-2.
                    </DetailText>
                </Detail>
            </LeftSideStyled>
            <RightSideStyled>
                <RightSideCosmicBody cosmicbodyname={Object.keys(selectedCrew).filter((v) => selectedCrew[v] === "1" ? v : null)} />
            </RightSideStyled>
        </CrewContentStyled>
    );
}

export default CrewContent