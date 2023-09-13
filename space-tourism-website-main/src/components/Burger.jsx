import styled from "styled-components";
import IconHamburger from "../assets/shared/icon-hamburger.svg";

const BurgerStyled = styled.div`
    cursor: pointer;
    margin-right: 2.5rem;
`;

const Burger = ({showMenu}) => {
    return (
        <BurgerStyled>
            <img src={IconHamburger} alt="Icon Hamburger" onClick={showMenu} />
        </BurgerStyled>
    );
}

export default Burger