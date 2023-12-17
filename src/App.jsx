import HomePage from "./pages/home/Home.page.jsx";
import Favorite from "./pages/favorite/Favorite.jsx";
import {useQuery, gql} from '@apollo/client';
import {Routes, Route} from "react-router-dom";


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/favorite" element={<Favorite />}/>
            </Routes>
        </>
    )
}

export default App
