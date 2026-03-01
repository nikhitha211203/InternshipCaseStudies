import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import ErrorBoundary from "./components/ErrorBoundary"; // regular import

const Home = lazy(() => import("./components/Home"));
const DataAnalytics = lazy(() => import("./components/DataAnalytics"));
const ProfilePage = lazy(() => import("./components/ProfilePage"));

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading page...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analytics" element={<DataAnalytics />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;