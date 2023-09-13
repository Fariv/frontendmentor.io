import { useContext, useEffect, useState } from "react";
import { css, styled } from "styled-components";
import useWindowDimensions from "../hooks/useWindowDimensions";
import HomeBgImageTablet from "../assets/home/background-home-tablet.jpg";
import HomeBgImageDesktop from "../assets/home/background-home-desktop.jpg";
import BgContext from "../contexts/BgContext";

const HomeContentStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 12.7rem 7rem 0 7rem;
    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        margin: 6.35rem 7rem 0 7rem;
    }
    @media (max-width: 768px) {
        margin: 1.5rem 0 0 0;
    }
`;

const sharedCss = css`
    margin: 0 auto;
    width: 50%;
`;

const LeftSideStyled = styled.div`
    ${sharedCss}
    padding-left: 5rem;
    @media (max-width: 1024px) {
        padding-left: 0;
        width: 100%;
        margin-bottom: 3.5rem;
    }
`;

const LeftSideTextWrapper = styled.div`
    width: 470px;
    > div {
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 28px;
        text-transform: uppercase;
        letter-spacing: 3px;
    }
    > h1 {
        font-family: 'Bellefair', serif;
        font-size: 150px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    > p {
        font-family: 'Barlow', sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.7;
    }
    @media (max-width: 1024px) {
        width: 100%;
        text-align: center;
    }
    @media (max-width: 768px) {
        > div {
            font-family: 'Barlow Condensed', sans-serif;
            font-size: 16px;
        }
        > h1 {
            font-family: 'Bellefair', serif;
            font-size: 80px;
        }
        > p {
            font-family: 'Barlow', sans-serif;
            font-size: 15px;
            margin-left: 3rem;
            margin-right: 3rem;
        }
    }
`;

const RightSideStyled = styled.div`
    ${sharedCss}
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0 3rem 0;
`;

const CircleStyled = styled.div`
    width: 274px;
    height: 274px;
    border-radius: 50%;
    font-size: 25px;
    text-transform: uppercase;
    letter-spacing: 3px;
    background-color: #dcdcf4;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const CircleOverlayStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 450px;
    height: 450px;
    background-color: rgba(255, 255, 255, ${prop => prop.overlayopacity});
    transition: background-color ease-in 0.8s;
`;

const HomeContent = () => {

    const {setBg} = useContext(BgContext);
    const [overLayOpacity, setOverLayOpacity] = useState(0);
    const showOverLay = () => {
        setOverLayOpacity(0.1);
    }
    const hideOverLay = () => {
        setOverLayOpacity(0);
    }

    const { width } = useWindowDimensions();
    useEffect(() => {
        if (width > 767 && width < 1025) {

            setBg(HomeBgImageTablet);
        } else if (width > 1024) {
            
            setBg(HomeBgImageDesktop);
        }
    }, [width]);

    return (
        <HomeContentStyled>
            <LeftSideStyled>
                <LeftSideTextWrapper>
                    <div>So you want to travel to</div>
                    <h1>SPACE</h1>
                    <p>
                        Let’s face it; if you want to go to space, you might as well genuinely go to 
                        outer space and not hover kind of on the edge of it. Well sit back, and relax 
                        because we’ll give you a truly out of this world experience!
                    </p>
                </LeftSideTextWrapper>
            </LeftSideStyled>
            <RightSideStyled>
                <CircleOverlayStyled overlayopacity={overLayOpacity}>
                    <CircleStyled onMouseOver={showOverLay} onMouseLeave={hideOverLay}>Explore</CircleStyled>
                </CircleOverlayStyled>
            </RightSideStyled>
        </HomeContentStyled>
    )
}

export default HomeContent