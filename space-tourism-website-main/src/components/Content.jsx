import CrewContent from "./CrewContent";
import DestinationContent from "./DestinationContent";
import HomeContent from "./HomeContent";
import { Routes, Route } from "react-router-dom";
import TechnologyContent from "./TechnologyContent";

const Content = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/destination" element={<DestinationContent />} />
            <Route path="/crew" element={<CrewContent />} />
            <Route path="/technology" element={<TechnologyContent />} />
        </Routes>
    );
}

export default Content