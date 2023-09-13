import { useState } from 'react'
import TopbarStyled from '../styled/TopbarStyled'
import Burger from './Burger'
import Logo from './Logo'
import Menus from './Menus'

const Topbar = () => {
    const [open, setOpen] = useState(0);

    const showMenu = () => {
        if (open) {
            setOpen(0);
        } else {
            setOpen(1);
        }
    }
    
    const closeMenu = () => {
        if (open) {
            setOpen(0);
        } else {
            setOpen(1);
        }
    }

    return (
        <TopbarStyled>
            <Logo />
            <Burger showMenu={showMenu} />
            <Menus open={open} closeMenu={closeMenu} />
        </TopbarStyled>
    )
}

export default Topbar