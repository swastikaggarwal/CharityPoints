import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/home-page";
import FoodDashboard from "./pages/food-dashboard";
import ClothesDashboard from "./pages/clothes-dashboard";
import SearchList from "./pages/search-list";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/food-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/-clothes-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/search-list":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/food-dashboard" element={<FoodDashboard />} />
      <Route path="/-clothes-dashboard" element={<ClothesDashboard />} />
      <Route path="/search-list" element={<SearchList />} />
    </Routes>
  );
}
export default App;
