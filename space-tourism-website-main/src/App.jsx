import Content from "./components/Content"
import Topbar from "./components/Topbar"
import HomeStyled from "./styled/HomeStyled"

function App() {
    return (
        <HomeStyled>
            <Topbar />
            <Content />
        </HomeStyled>
    )
}

export default App
