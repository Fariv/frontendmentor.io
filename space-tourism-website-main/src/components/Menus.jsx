import React from 'react'
import { styled } from 'styled-components';

const MenuWrapperStyled = styled.ul`
    display: flex;
    list-style: none;
    color: #dcdcf4;
    padding: 0 14.75rem 0px 2.75rem;
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
    color: #dcdcf4;
    padding: 2.25rem 0 2.25rem 0;
    border-bottom: 4px solid transparent;
    &:focus,
    &:active,
    &:hover {
        border-bottom: 4px solid #dcdcf4;
        color: #000;
        transition: border-bottom ease-in 0.25s;
    }
    &:hover > a {
        color: #dcdcf4;
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
    color: #dcdcf4;
    &:visited {
        color: #dcdcf4;
    }
    letter-spacing: 2px;
    @media (max-width: 841px) {
        color: hsl(220, 13%, 13%);
        &:visited {
            color: hsl(220, 13%, 13%);
        }
        &.close-menu-link:visited,
        &.close-menu-link {
            color: #dcdcf4;
        }
    }
    > .menu-number {
        font-weight: 900;
        margin-right: 5px;
    }
    > .menu-name {
        font-weight: 400;
    }
`;

const Menus = ({open, closeMenu}) => {

    return (
        <MenuWrapperStyled open={open}>
            <MenuStyled className='close-menu'><MenuLinkStyled href="#" className='close-menu-link' onClick={closeMenu} >&times;</MenuLinkStyled></MenuStyled>
            <MenuStyled><MenuLinkStyled href="/"><span className='menu-number'>00</span> <span className='menu-name'>HOME</span></MenuLinkStyled></MenuStyled>
            <MenuStyled><MenuLinkStyled href="/destination"><span className='menu-number'>01</span> <span className='menu-name'>DESTINATION</span></MenuLinkStyled></MenuStyled>
            <MenuStyled><MenuLinkStyled href="/crew"><span className='menu-number'>02</span> <span className='menu-name'>CREW</span></MenuLinkStyled></MenuStyled>
            <MenuStyled><MenuLinkStyled href="/technology"><span className='menu-number'>03</span> <span className='menu-name'>TECHNOLOGY</span></MenuLinkStyled></MenuStyled>
        </MenuWrapperStyled>
    )
}

export default Menus;