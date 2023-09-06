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
        height: 100%;
        padding-bottom: 0;
        padding-left: 0;
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
    @media (max-width: 1024px) {
        margin-left: auto; 
        margin-right: auto; 
    }
`;

const TechnologyContent = () => {
    const {setBg} = useContext(BgContext);
    const [selectedTechDetail, setSelectedTechDetail] =  useState({});
    const [allTechsWithActive, setAllTechsWithActive] =  useState({});

    const { width } = useWindowDimensions();
    useEffect(() => {
        if (width > 767 && width < 1025) {
            
            setBg(TechnologyBgImageTablet);
        } else if (width > 1024) {
            
            setBg(TechnologyBgImageDesktop);
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

            setAllTechsWithActive(techDataMod);
        })
    }, []);

    return (
        <TechnologyContentStyled>
            <LeftSideStyled>
                <LeftSideText>
                    <h1 className='menu-number'>03</h1> 
                    <h1>SPACE LAUNCH 101</h1>
                </LeftSideText>
                <Detail>
                    <DetailSubheader>{selectedTechDetail['detailSubHeaderText']}</DetailSubheader>
                    <DetailHeader>{selectedTechDetail['detailHeaderText']}</DetailHeader>
                    <DetailText>{selectedTechDetail['detailText']}</DetailText>
                </Detail>
            </LeftSideStyled>
            <RightSideStyled>
                
            </RightSideStyled>
        </TechnologyContentStyled>
    );
}

export default TechnologyContent