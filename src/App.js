import { BrowserRouter, Routes, Route } from "react-router-dom";

import { 
    Home,
    PagePatinhaCarente,
    PageAmorAnimal
} from "./pages";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={< Home />} />
                <Route path='/ong/patinhacarente' element={<PagePatinhaCarente />} />
                <Route path='/ong/amoranimal' element={<PageAmorAnimal />} />
            </Routes>
        </BrowserRouter>
);
}

export default App;