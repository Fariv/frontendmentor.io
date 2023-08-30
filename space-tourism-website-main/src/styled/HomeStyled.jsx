import styled from 'styled-components';

const HomeStyled = styled.div`
    background: url("${prop => prop.bg}") no-repeat;
    background-size: cover;
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    position: relative;
`;

export default HomeStyled;