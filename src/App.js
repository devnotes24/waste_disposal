import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecommendationPage from './pages/RecommendationPage.js';


const App = () => {
    return (
        <Router>
            <Routes>
                {/* other routes */}

                <Route path="/recommendation/:requestId" element={<RecommendationPage />} />
            </Routes>
        </Router>
    );
};

export default App;