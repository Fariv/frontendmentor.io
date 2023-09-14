import styled from "styled-components";
import IconHamburger from "../assets/shared/icon-hamburger.svg";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { useEffect, useState } from "react";

const BurgerStyled = styled.div`
    cursor: pointer;
    margin-right: 2.5rem;
`;

const Burger = ({showMenu}) => {

    const [show, setShow] = useState('none');
    const { width } = useWindowDimensions();

    useEffect(() => {
        if (width <= 768 ) {
            
            setShow('block');
        } else {
            
            setShow('none');
        }
    }, [width]);
    return (
        <BurgerStyled onClick={showMenu} style={{display : show}}>
            <img src={IconHamburger} alt="Icon Hamburger" />
        </BurgerStyled>
    );
}

export default Burger