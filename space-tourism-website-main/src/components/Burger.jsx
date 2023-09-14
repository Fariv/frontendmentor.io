import styled from "styled-components";
import IconHamburger from "../assets/shared/icon-hamburger.svg";

const BurgerStyled = styled.div`
    cursor: pointer;
    margin-right: 2.5rem;
`;

const Burger = ({showMenu}) => {
    return (
        <BurgerStyled onClick={showMenu}>
            <img src={IconHamburger} alt="Icon Hamburger" />
        </BurgerStyled>
    );
}

export default Burger