import React from 'react'
import { styled } from 'styled-components';
import IconClose from "../assets/shared/icon-close.svg";

const MenuWrapperStyled = styled.ul`
    display: flex;
    list-style: none;
    color: #fff;
    padding: 0 14.75rem 0px 2.75rem;
    margin: 0;
    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(36px);
    @media (max-width: 1024px) {
        padding: 0;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        position: fixed;
        height: 100%;
        width: 300px;
        top: 0;
        right: ${prop => prop.open ? '0' : '-300px'};
        transition: right 0.5s ease-in-out;
        z-index: 3;
        background-color: rgba(255, 255, 255, 0.1);
        padding: 1.5rem 0 0 1.5rem;
    }
`;
const MenuStyled = styled.li`
    margin: 0 0 0 2.8rem;
    color: #fff;
    padding: 2.25rem 0 2.25rem 0;
    border-bottom: 4px solid transparent;
    &.active,
    &:focus,
    &:active,
    &:hover {
        border-bottom: 4px solid #fff;
        color: #000;
        transition: border-bottom ease-in 0.25s;
    }
    &.active > a,
    &:hover > a {
        color: #fff;
    }
    &.close-menu {
        display: none;
    }
    @media (max-width: 1024px) {
        margin: 0 0 0 2.25rem;
        &:last-child {
            margin: 0 2.25rem 0 2.25rem;
        }
    }
    @media (max-width: 768px) {
        margin: 0 1.5rem 0 0;
        padding: 0 0 2rem 0;
        font-weight: 700;
        border-bottom: none;
        &:last-child {
            margin: 0 1.5rem 0 0;
        }
        &.close-menu {
            display: block;
            font-size: 26px;
            font-weight: 700;
            padding: 0 0 2rem 0;
        }
        &.active,
        &:focus,
        &:active,
        &:hover {
            border-bottom: none;
            color: #fff;
        }
    }
    
`;

const MenuLinkStyled = styled.a`
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    &:visited {
        color: #fff;
    }
    letter-spacing: 2px;
    @media (max-width: 1024px) {
        > .menu-number {
            display: none;
        }
    }
    > .menu-number {
        font-weight: 900;
        margin-right: 5px;
    }
    > .menu-name {
        font-weight: 400;
    }
    @media (max-width: 768px) {
        color: #fff;
        &.close-menu-link {
            float: right;
        }
        &:visited {
            color: #fff;
        }
        &.close-menu-link:visited,
        &.close-menu-link {
            color: #fff;
        }
        > .menu-number {
            display: inline-block;
        }
    }
`;

const Menus = ({open, closeMenu}) => {

    return (
        <MenuWrapperStyled open={open}>
            <MenuStyled className='close-menu'><MenuLinkStyled className='close-menu-link' onClick={closeMenu} ><img src={IconClose} alt='icon close' /></MenuLinkStyled></MenuStyled>
            <MenuStyled className={location.pathname === "/" ? "active" : ""}><MenuLinkStyled href="/"><span className='menu-number'>00</span> <span className='menu-name'>HOME</span></MenuLinkStyled></MenuStyled>
            <MenuStyled className={location.pathname === "/destination" ? "active" : ""}><MenuLinkStyled href="/destination"><span className='menu-number'>01</span> <span className='menu-name'>DESTINATION</span></MenuLinkStyled></MenuStyled>
            <MenuStyled className={location.pathname === "/crew" ? "active" : ""}><MenuLinkStyled href="/crew"><span className='menu-number'>02</span> <span className='menu-name'>CREW</span></MenuLinkStyled></MenuStyled>
            <MenuStyled className={location.pathname === "/technology" ? "active" : ""}><MenuLinkStyled href="/technology"><span className='menu-number'>03</span> <span className='menu-name'>TECHNOLOGY</span></MenuLinkStyled></MenuStyled>
        </MenuWrapperStyled>
    )
}

export default Menus;