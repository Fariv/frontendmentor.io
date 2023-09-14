import styled from "styled-components";

export default styled.div`
    display: flex;
    width: ${props => props.width ? props.width : "100%"};
    flex-direction: ${props => props.direction ? props.direction : "row"};
`;