import styled from 'styled-components';
import HomeBgImageDesktop from "../assets/home/background-home-desktop.jpg";

const HomeStyled = styled.div`
    background: url("${HomeBgImageDesktop}") no-repeat;
    background-size: cover;
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    position: relative;
`;

export default HomeStyled;