import React, { createContext, useContext, useState, useEffect } from "react";

export const CreateContext = createContext();

export const useAppContext = () => useContext(CreateContext);

const Context = ({ children }) => {
  const [mobile, setMobile] = useState(true);
  const [rightBar, setRightBar] = useState(true);
  const [toggleTop, setToggle] = useState(true);
  const [toggleAuth, setToggleAuth] = useState(true);
  const [showItem, setShowItem] = useState(true);
  const [activeMobileMenu, setActiveMobileMenu] = useState(true);
  const [isLightTheme, setLightTheme] = useState(true);
  const [toolTopbarMenu, showToolTopbarMenu] = useState(true);
  const [ToolDocs, showToolDocs] = useState(true);
  const [ServiceCarousel, showServiceCarousel] = useState(false);
  const [How_It_Works, showHowItWorks] = useState(true);

  const checkScreenSize = () => {
    if (window.innerWidth < 1200) {
      setMobile(false);
      setRightBar(false);
    } else {
      setMobile(true);
      setRightBar(true);
    }
    if(window.innerWidth < 900){
      showToolTopbarMenu(false);
    }
    if(window.innerWidth < 767){
      showServiceCarousel(true);
      showHowItWorks(false);
    }
    if(window.innerWidth < 500){
      showToolDocs(false);
    }
  };

  // ===========> Switcher Function START
  useEffect(() => {
    const themeType = localStorage.getItem("chatenai-theme");
    if (themeType === "dark") {
      setLightTheme(false);
      document.body.classList.add("active-light-mode");
    }
  }, []);

  useEffect(() => {
    if (isLightTheme) {
      document.body.classList.remove("active-light-mode");
      localStorage.setItem("chatenai-theme", "light");
    } else {
      document.body.classList.add("active-light-mode");
      localStorage.setItem("chatenai-theme", "dark");
    }
  }, [isLightTheme]);

  const toggleTheme = () => {
    setLightTheme((prevTheme) => !prevTheme);
  };
  // ===========> Switcher Function END

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const shouldCollapseLeftbar = !mobile;
  const shouldCollapseRightbar = !rightBar;

  return (
    <CreateContext.Provider
      value={{
        mobile,
        setMobile,
        showItem,
        setShowItem,
        activeMobileMenu,
        setActiveMobileMenu,
        toggleTop,
        setToggle,
        toggleAuth,
        setToggleAuth,
        rightBar,
        setRightBar,
        shouldCollapseLeftbar,
        shouldCollapseRightbar,
        isLightTheme,
        setLightTheme,
        toggleTheme,
        toolTopbarMenu,
        ToolDocs,
        ServiceCarousel,
        How_It_Works
      }}
    >
      {children}
    </CreateContext.Provider>
  );
};

export default Context;
