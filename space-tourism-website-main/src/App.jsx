import { createContext, useState } from "react"
import Content from "./components/Content"
import Topbar from "./components/Topbar"
import HomeStyled from "./styled/HomeStyled"
import HomeBgImageDesktop from "./assets/home/background-home-desktop.jpg";
import BgContext from "./contexts/BgContext";

function App() {
    const [bg, setBg] = useState(HomeBgImageDesktop);
    return (
        <BgContext.Provider value={{
            bg,
            setBg,
        }}>
            <HomeStyled bg={bg}>
                <Topbar />
                <Content />
            </HomeStyled>
        </BgContext.Provider>
    )
}

export default App
