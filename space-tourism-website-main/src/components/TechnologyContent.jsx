import { useContext, useEffect, useState } from "react";
import BgContext from "../contexts/BgContext";
import useWindowDimensions from "../hooks/useWindowDimensions";
import TechnologyBgImageDesktop from "../assets/technology/background-technology-desktop.jpg";
import TechnologyBgImageTablet from "../assets/technology/background-technology-tablet.jpg";
import { css, styled } from "styled-components";

const TechnologyContentStyled = styled.div`
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
`;

const sharedCss = css`
    margin: 0 auto;
    width: 50%;
    @media (max-width: 1024px) {
        padding-left: 2.5rem;
        width: 100%;
        padding-bottom: 1.7rem;
    }
`;

const LeftSideStyled = styled.div`
    ${sharedCss}
    width: 59%;
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
    width: 41%;
    padding-left: 0;
    margin-top: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media (max-width: 1024px) {
        margin-top: 1.7rem;
        height: 100%;
        padding-bottom: 0;
        padding-left: 0;
    }
`;
const Pager = styled.ul`
    margin-top: 3rem;
    list-style: none;
    @media (max-width: 1024px) {
        display: flex;
    }
`;

const EachPage = styled.li`
    cursor: pointer;
    width: 80px;
    height: 80px;
    border: 1px solid #FFF;
    border-radius: 50%;
    font-family: 'Bellefair', serif;
    font-size: 36px;
    color: ${props => props.active === "1" ? "#0B0D17" : "#FFF"};
    text-align: center;
    padding: 1.25rem;
    margin-bottom: 2rem;
    background-color: ${props => props.active === "1" ? "#FFF" : "transparent"};
    &:focus,
    &:active,
    &:hover {
        background-color: #FFF;
        color: #0B0D17;
    }
`;

const Detail = styled.div`
    margin-top: 3rem;
    margin-left: 5rem;
`;

const DetailSubheader = styled.div`
    font-family: 'Barlow', sans-serif;
    font-size: 16px;
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
    @media (max-width: 1024px) {
        margin-left: auto; 
        margin-right: auto; 
    }
`;

const RightSideCosmicBody = styled.div`
    background: url("${prop => "/technology/image-" + prop.cosmicbodyname + "-" + prop.imagestyle + ".jpg"}") no-repeat;
    width: 515px;
    height: 527px;
    background-size: contain;
    background-position-x: right;
`;

const LeftBottomContainerStyled = styled.div`
    display: flex;
    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;

const TechnologyContent = () => {
    const {setBg} = useContext(BgContext);
    const [selectedTechDetail, setSelectedTechDetail] =  useState({});
    const [allTechsWithActive, setAllTechsWithActive] =  useState({});
    const [isDesktop, setIsDesktop] =  useState(0);

    const { width } = useWindowDimensions();
    useEffect(() => {
        if (width > 767 && width < 1025) {
            
            setBg(TechnologyBgImageTablet);
            setIsDesktop(0);
        } else if (width > 1024) {
            
            setBg(TechnologyBgImageDesktop);
            setIsDesktop(1);
        }
    }, [width]);

    let techDataMod = {}
    useEffect(() => {

        const baseURL = window.location.origin;        
        fetch(baseURL + '/data.json').then(response => response.json()).then(data => {
            const techData = data['technology'];
            techData.map((each, i) => {
                let slug = each['name'].replace(' ', '-').toLowerCase();
                techDataMod[slug] = {
                    'detailSubHeaderText': 'THE TERMINOLOGY…',
                    'detailHeaderText': each['name'],
                    'detailText': each['description'],
                };
                if (i === 0) {

                    techDataMod[slug]['active'] = "1";
                    setSelectedTechDetail(techDataMod[slug]);
                } else {

                    techDataMod[slug]['active'] = "0";
                }
            });

            console.log(techDataMod);
            setAllTechsWithActive(techDataMod);
        })
    }, []);

    const doChangePage = (techname) => {
        let techs = {...allTechsWithActive};
        techs['launch-vehicle']['active'] = "0";
        techs['space-capsule']['active'] = "0"; 
        techs['spaceport']['active'] = "0";

        techs[techname]['active'] = "1";
        setAllTechsWithActive(techs);
        setSelectedTechDetail(techs[techname]);
    }

    return (
        <TechnologyContentStyled>
            <LeftSideStyled>
                <LeftSideText>
                    <h1 className='menu-number'>03</h1> 
                    <h1>SPACE LAUNCH 101</h1>
                </LeftSideText>
                <LeftBottomContainerStyled>
                    <Pager>
                        {Object.keys(allTechsWithActive).map((techname, index) => {

                            return (
                                <EachPage 
                                    key={Math.random(index+50)} 
                                    active={allTechsWithActive[techname]['active']} 
                                    onClick={() => doChangePage(techname)} 
                                >
                                    {index+1}
                                </EachPage>
                            );
                        })}
                    </Pager>
                    <Detail>
                        <DetailSubheader>{selectedTechDetail['detailSubHeaderText']}</DetailSubheader>
                        <DetailHeader>{selectedTechDetail['detailHeaderText']}</DetailHeader>
                        <DetailText>{selectedTechDetail['detailText']}</DetailText>
                    </Detail>
                </LeftBottomContainerStyled>
            </LeftSideStyled>
            <RightSideStyled>
                <RightSideCosmicBody 
                    imagestyle={isDesktop ? "portrait" : "landscape"} 
                    cosmicbodyname={Object.keys(allTechsWithActive).filter((v) => allTechsWithActive[v]['active'] === "1" ? v : null)}
                />
            </RightSideStyled>
        </TechnologyContentStyled>
    );
}

export default TechnologyContent