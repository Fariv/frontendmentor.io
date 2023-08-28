import styled from 'styled-components';
import HomeBgImageDesktop from "../assets/home/background-home-desktop.jpg";

const HomeStyled = styled.div`
    background: url("${HomeBgImageDesktop}") no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
`;

export default HomeStyled;