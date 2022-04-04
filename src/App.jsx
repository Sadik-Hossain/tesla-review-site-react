import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Reviews from "./components/Reviews/Reviews";
import Blogs from "./components/Blogs/Blogs";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
import DashBoard from "./components/DashBoard/DashBoard";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/blogs" element={<Blogs />} />
   
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
