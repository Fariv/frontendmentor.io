import React from 'react'
import { styled } from 'styled-components';

const MenuWrapperStyled = styled.ul`
    display: flex;
    list-style: none;
    color: white;
    padding: 0 14rem 0px 7rem;
    margin: 0;
    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(36px);
    @media (max-width: 841px) {
        flex-direction: column;
        position: fixed;
        height: 100%;
        width: 300px;
        top: 0;
        left: ${prop => prop.open ? '0' : '-300px'};
        transition: left 0.5s ease-in-out;
        z-index: 3;
        background: #fff;
        padding: 1.5rem 0 0 1.5rem;
    }
`;
const MenuStyled = styled.li`
    margin: 0 0 0 2.8rem;
    color: white;
    padding: 2.8rem 0 2.5rem 0;
    border-bottom: 4px solid transparent;
    &:focus,
    &:active,
    &:hover {
        border-bottom: 4px solid white;
        color: #000;
    }
    &:hover > a {
        color: #white;
    }
    &.close-menu {
        display: none;
    }
    @media (max-width: 841px) {
        margin: 0;
        padding: 0 0 1rem 0;
        font-weight: 700;
        border-bottom: 4px solid transparent;
        &.close-menu {
            display: block;
            font-size: 26px;
            font-weight: 700;
            padding: 0 0 2rem 0;
        }
        &:focus,
        &:active,
        &:hover {
            border-bottom: 4px solid transparent;
        }
    }
    
`;

const MenuLinkStyled = styled.a`
    text-decoration: none;
    color: white;
    &:visited {
        color: white;
    }
    @media (max-width: 841px) {
        color: hsl(220, 13%, 13%);
        &:visited {
            color: hsl(220, 13%, 13%);
        }
        &.close-menu-link:visited,
        &.close-menu-link {
            color: white;
        }
    }
    font-weight: 500;
    > .menu-number {
        font-weight: 700;
    }
`;

const Menus = ({open, closeMenu}) => {

    return (
        <MenuWrapperStyled open={open}>
            <MenuStyled className='close-menu'><MenuLinkStyled href="#" className='close-menu-link' onClick={closeMenu} >&times;</MenuLinkStyled></MenuStyled>
            <MenuStyled><MenuLinkStyled href="#"><span className='menu-number'>00</span> HOME</MenuLinkStyled></MenuStyled>
            <MenuStyled><MenuLinkStyled href="#destination"><span className='menu-number'>01</span> DESTINATION</MenuLinkStyled></MenuStyled>
            <MenuStyled><MenuLinkStyled href="#crew"><span className='menu-number'>02</span> CREW</MenuLinkStyled></MenuStyled>
            <MenuStyled><MenuLinkStyled href="#technology"><span className='menu-number'>03</span> TECHNOLOGY</MenuLinkStyled></MenuStyled>
        </MenuWrapperStyled>
    )
}

export default Menus;