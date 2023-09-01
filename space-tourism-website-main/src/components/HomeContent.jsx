import { useState } from "react";
import { css, styled } from "styled-components";

const HomeContentStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 12.7rem 7rem 0 7rem;
`;

const sharedCss = css`
    margin: 0 auto;
    width: 50%;
`;

const LeftSideStyled = styled.div`
    ${sharedCss}
    padding-left: 5rem;
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

    const [overLayOpacity, setOverLayOpacity] = useState(0);
    const showOverLay = () => {
        setOverLayOpacity(0.1);
    }
    const hideOverLay = () => {
        setOverLayOpacity(0);
    }

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