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
    margin-bottom: 8rem;
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
    margin-top: 1rem;
`;
const DetailText = styled.p`
    font-family: 'Barlow', sans-serif;
    font-size: 18px;
    line-height: 1.7;
    margin-top: 1rem;
    max-width: 444px;
`;

const SliderDotsStyled = styled.div`
    display: flex;
    margin-top: 120px;
`;

const SliderDotStyled = styled.div`
    width: 15px;
    height: 15px;
    margin-right: 24px;
    background-color: rgba(255, 255, 255, ${props => props.active === "1" ? 1: 0.17});
    border-radius: 50%;
    cursor: pointer;
`;

const CrewContent = () => {
    const {setBg} = useContext(BgContext);
    const [selectedCrew, setSelectedCrew] =  useState({
        'douglas-hurley': {
            'active': "1",
            'detailSubHeaderText': "Commander",
            'detailHeaderText': "Douglas Hurley",
            'detailText': "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        }, 
        'mark-shuttleworth': {
            'active': "0",
            'detailSubHeaderText': "Mission Specialist",
            'detailHeaderText': "Mark Shuttleworth",
            'detailText': "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        }, 
        'victor-glover': {
            'active': "0",
            'detailSubHeaderText': "Pilot",
            'detailHeaderText': "Victor Glover",
            'detailText': "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
        }, 
        'anousheh-ansari': {
            'active': "0",
            'detailSubHeaderText': "Flight Engineer",
            'detailHeaderText': "Anousheh Ansari",
            'detailText': "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
        }, 
    });

    const doSlide = (crewname) => {
        let crews = {...selectedCrew};
        crews['douglas-hurley']['active'] = "0";
        crews['mark-shuttleworth']['active'] = "0"; 
        crews['victor-glover']['active'] = "0";
        crews['anousheh-ansari']['active'] = "0";

        crews[crewname]['active'] = "1";
        setSelectedCrew(crews);
    };

    const { width } = useWindowDimensions();
    useEffect(() => {
        if (width > 767 && width < 1025) {

            setBg(CrewBgImageTablet);
        } else if (width > 1024) {
            
            setBg(CrewBgImageDesktop);
        }
    }, [width]);

    let crewDetail = {};
    useEffect(() => {
        Object.keys(selectedCrew).map((crewname) => {

            if (selectedCrew[crewname]['active'] === "1") {
                crewDetail = selectedCrew[crewname];
            }
        });
    }, []);


    return (
        <CrewContentStyled>
            <LeftSideStyled>
                <LeftSideText>
                    <h1 className='menu-number'>02</h1> 
                    <h1>MEET YOUR CREW</h1>
                </LeftSideText>
                <Detail>
                    {console.log(selectedCrew)}
                    <DetailSubheader>{Object.keys(selectedCrew).map((v) => selectedCrew[v]['active'] === "1" ? selectedCrew[v]['detailSubHeaderText'] : null)}</DetailSubheader>
                    <DetailHeader>{Object.keys(selectedCrew).map((v) => selectedCrew[v]['active'] === "1" ? selectedCrew[v]['detailHeaderText'] : null)}</DetailHeader>
                    <DetailText>{Object.keys(selectedCrew).map((v) => selectedCrew[v]['active'] === "1" ? selectedCrew[v]['detailText'] : null)}</DetailText>
                </Detail>
                <SliderDotsStyled>
                    {Object.keys(selectedCrew).map((crewname, index) => {

                        return (<SliderDotStyled 
                            key={Math.random(index+50)} 
                            active={selectedCrew[crewname]['active']} 
                            onClick={() => doSlide(crewname)} 
                        />);
                    })}
                </SliderDotsStyled>
            </LeftSideStyled>
            <RightSideStyled>
                <RightSideCosmicBody cosmicbodyname={Object.keys(selectedCrew).filter((v) => selectedCrew[v]['active'] === "1" ? v : null)} />
            </RightSideStyled>
        </CrewContentStyled>
    );
}

export default CrewContent