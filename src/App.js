import { React, useState, useEffect } from "react";
import AOS from "aos";
import { Route, Routes } from "react-router-dom";
import Popup from "./components/Popup/Popup"; // Import Popup component
import routes from "./pages";
import Page404 from "./pages/404";
import Header from "./components/header/Header";

function App() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <>
      <Header />
      {/* Render the Popup component */}
      <Popup isVisible={isPopupVisible} onClose={togglePopup} />

      <Routes>
        {routes.map((data, idx) => (
          <Route key={idx} path={data.path} element={data.component} exact />
        ))}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
