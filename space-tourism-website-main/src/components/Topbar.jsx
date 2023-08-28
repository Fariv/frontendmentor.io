import TopbarStyled from '../styled/TopbarStyled'
import Logo from './Logo'
import Menus from './Menus'

const Topbar = () => {
    return (
        <TopbarStyled>
            <Logo />
            <Menus />
        </TopbarStyled>
    )
}

export default Topbar