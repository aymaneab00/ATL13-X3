import { Route, Routes } from "react-router-dom";
import "./App.css";
import Accueil from "./Components/Accueil";
import Categories from "./Components/Categories";
import Technologie from "./Components/Technologie";
import Voyage from "./Components/Voyage";
import Cuisine from "./Components/Cuisine";
import ArticleDetails from "./Components/ArticleDetails";
 import articles from "./Components/Articles";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Accueil articles={articles} />} />
      <Route path="/categories" element={<Categories />}>
        <Route path="/categories/technologie" element={<Technologie articles={articles} />} />
        <Route path="/categories/voyages" element={<Voyage articles={articles} />} />
        <Route path="/categories/cuisine" element={<Cuisine articles={articles} />} />
      </Route>
      <Route path="/articles/:id" element={<ArticleDetails articles={articles}/>}/>
    </Routes>
  );
}

export default App;
