import { useContext, useEffect, useState } from "react";
import BgContext from "../contexts/BgContext";
import useWindowDimensions from "../hooks/useWindowDimensions";
import CrewBgImageDesktop from "../assets/crew/background-crew-desktop.jpg";
import CrewBgImageTablet from "../assets/crew/background-crew-tablet.jpg";
import CrewBgImageMobile from "../assets/crew/background-crew-mobile.jpg";
import { css, styled } from "styled-components";
import LeftSideContainer from "../styled/LeftSideContainer";

const CrewContentStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem 0 0 0;
    height: 100vh;
    @media (max-width: 1024px) {
        flex-direction: column;
        margin: 1rem 0 0 0;
        align-items: center;
        text-align: center;
    }
    @media (max-width: 768px) {
        margin: 0;
        flex-direction: column-reverse;
    }
`;

const sharedCss = css`
    margin: 0 auto;
    width: 50%;
    @media (max-width: 1024px) {
        padding-left: 2.5rem;
        width: 100%;
        padding-bottom: 1.7rem;
    }
    @media (max-width: 768px) {
        padding-left: 0;
        width: 100%;
    }
`;

const LeftSideStyled = styled.div`
    ${sharedCss}
    width: 100%;
    padding-left: 12.25rem;
    flex-direction: ${props => props.direction ? props.direction : "row"};
    @media (max-width: 1024px) {
        margin: 0;
    }
    @media (max-width: 768px) {
        display: flex;
    }
`;

const LeftSideText = styled.div`
    width: 400px;
    letter-spacing: 2px;
    font-family: 'Barlow Condensed', sans-serif;
    text-transform: uppercase;
    display: flex;
    margin-bottom: 8rem;
    margin-left: 12.25rem;
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
        width: 100%;
        justify-content: center;
        margin-left: 0;
        margin-bottom: 0;
        > h1 {
            font-size: 16px;
        }
    }
`;

const RightSideStyled = styled.div`
    ${sharedCss}
    padding-left: 0;
    margin-top: 0;
    @media (max-width: 1024px) {
        margin-top: 1.7rem;
        height: 100%;
        padding-bottom: 0;
        padding-left: 0;
    }
    @media (max-width: 768px) {
        padding: 0 2.5rem;
        margin-top: 0;
    }
`;

const RightSideCosmicBody = styled.div`
    background: url("${prop => "/crew/image-" + prop.cosmicbodyname + ".png"}") no-repeat;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-size: contain;
    background-position-x: center;
    @media (max-width: 768px) {
        width: 70%;
        height: 60%;
        border-bottom: 1px solid #979797;
        background-position-y: bottom;
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
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const DetailHeader = styled.div`
    font-family: 'Bellefair', serif;
    font-size: 56px;
    text-transform: uppercase;
    margin-top: 1rem;
    @media (max-width: 768px) {
        font-size: 24px;
    }
`;
const DetailText = styled.p`
    font-family: 'Barlow', sans-serif;
    font-size: 18px;
    line-height: 1.7;
    margin-top: 1rem;
    max-width: 444px;
    @media (max-width: 1024px) {
        margin-left: auto; 
        margin-right: auto; 
    }
    @media (max-width: 768px) {
        font-size: 15px;
    }
`;

const SliderDotsStyled = styled.div`
    display: flex;
    margin-top: 120px;
    @media (max-width: 1024px) {
        justify-content: center;
    }
    @media (max-width: 768px) {
        margin-top: 3rem;
    }
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
    const [selectedCrewDetail, setSelectedCrewDetail] =  useState({});
    const [allCrewsWithActive, setAllCrewsWithActive] =  useState({});
    const [leftSideContainerWidth, setLeftSideContainerWidth] =  useState("50%");
    const [leftSideStyledDirection, setLeftSideStyledDirection] =  useState("column");

    const doSlide = (crewname) => {
        let crews = {...allCrewsWithActive};
        crews['douglas-hurley']['active'] = "0";
        crews['mark-shuttleworth']['active'] = "0"; 
        crews['victor-glover']['active'] = "0";
        crews['anousheh-ansari']['active'] = "0";

        crews[crewname]['active'] = "1";
        setAllCrewsWithActive(crews);
        setSelectedCrewDetail(crews[crewname]);
    };

    const { width } = useWindowDimensions();
    useEffect(() => {
        if (width > 768 && width < 1025) {

            setBg(CrewBgImageTablet);
        } else if (width > 1024) {
            
            setBg(CrewBgImageDesktop);
        } else if (width <= 768) {
            
            setBg(CrewBgImageMobile);
            setLeftSideContainerWidth("100%");
            setLeftSideStyledDirection("column-reverse");
        }
    }, [width]);

    useEffect(() => {

        let crewDataMod = {}
        const baseURL = window.location.origin;        
        fetch(baseURL + '/data.json').then(response => response.json()).then(data => {
            const crewData = data['crew'];
            crewData.map((each, i) => {
                let slug = each['name'].replace(' ', '-').toLowerCase();
                crewDataMod[slug] = {
                    'detailSubHeaderText': each['role'],
                    'detailHeaderText': each['name'],
                    'detailText': each['bio'],
                };
                if (i === 0) {

                    crewDataMod[slug]['active'] = "1";
                    setSelectedCrewDetail(crewDataMod[slug]);
                } else {

                    crewDataMod[slug]['active'] = "0";
                }
            });

            setAllCrewsWithActive(crewDataMod);
        })
    }, []);


    return (
        <>
        {(leftSideContainerWidth === "100%") ? (<LeftSideText>
            <h1 className='menu-number'>02</h1> 
            <h1>MEET YOUR CREW</h1>
        </LeftSideText>): null}
        <CrewContentStyled>
            <LeftSideContainer width={leftSideContainerWidth} direction="column">
                {(leftSideContainerWidth === "50%") ? (<LeftSideText>
                    <h1 className='menu-number'>02</h1> 
                    <h1>MEET YOUR CREW</h1>
                </LeftSideText>): null}
                <LeftSideStyled direction={leftSideStyledDirection}>
                    <Detail>
                        <DetailSubheader>{selectedCrewDetail['detailSubHeaderText']}</DetailSubheader>
                        <DetailHeader>{selectedCrewDetail['detailHeaderText']}</DetailHeader>
                        <DetailText>{selectedCrewDetail['detailText']}</DetailText>
                    </Detail>
                    <SliderDotsStyled>
                        {Object.keys(allCrewsWithActive).map((crewname, index) => {

                            return (<SliderDotStyled 
                                key={Math.random(index+50)} 
                                active={allCrewsWithActive[crewname]['active']} 
                                onClick={() => doSlide(crewname)} 
                            />);
                        })}
                    </SliderDotsStyled>
                </LeftSideStyled>
            </LeftSideContainer>
            <RightSideStyled>
                <RightSideCosmicBody cosmicbodyname={Object.keys(allCrewsWithActive).filter((v) => allCrewsWithActive[v]['active'] === "1" ? v : null)} />
            </RightSideStyled>
        </CrewContentStyled>
        </>
    );
}

export default CrewContent