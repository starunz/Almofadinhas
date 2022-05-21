import { BrowserRouter, Routes, Route } from "react-router-dom";

import { 
    Home,
    PageONG
} from "./pages";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={< Home />} />
                <Route path='/ong' element={<PageONG />} />
            </Routes>
        </BrowserRouter>
);
}

export default App;