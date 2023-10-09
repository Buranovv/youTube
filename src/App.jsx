import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import Subscribtions from "./pages/Subscribtions";
import ShortsPage from "./pages/ShortsPage";
import LibrariesPage from "./pages/LibrariesPage";
import HistoryPage from "./pages/HistoryPage";
import WatchLaterPage from "./pages/WatchLaterPage";
import LikedVideosPage from "./pages/LikedVideosPage";
import SinglePage from "./pages/SinglePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="home/:vidId" element={<SinglePage />} />
          <Route path="shorts" element={<ShortsPage />} />
          <Route path="subscriptions" element={<Subscribtions />} />
          <Route path="libraries" element={<LibrariesPage />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="watchLater" element={<WatchLaterPage />} />
          <Route path="likedVideos" element={<LikedVideosPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
