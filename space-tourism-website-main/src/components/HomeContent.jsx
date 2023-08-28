import { css, styled } from "styled-components";

const HomeContentStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 7rem;
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
    width: 400px;
    > div {
        font-size: 36px;
    }
    > h1 {
        font-size: 100px;
        margin-top: 20px;
        margin-bottom: 70px;
    }
    > p {
        font-weight: 400;
        line-height: 1.6;
    }
`;

const RightSideStyled = styled.div`
    ${sharedCss}
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CircleStyled = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    font-size: 25px;
    text-transform: uppercase;
    letter-spacing: 3px;
    background-color: #dcdcf4;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HomeContent = () => {
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
                <CircleStyled>Explore</CircleStyled>
            </RightSideStyled>
        </HomeContentStyled>
    )
}

export default HomeContent