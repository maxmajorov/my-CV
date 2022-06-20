import React, { useState } from "react";
import "./App.css";
import { AboutMySelf } from "./components/AboutMySelf/AboutMySelf";
import { Header } from "./components/Header/Header";
import { ProjectsList } from "./components/ProjectsList/ProjectsList";
import { SkillsList } from "./components/SkillsList/SkillsList";
import { Contacts } from "./components/Contacts/Contacts";
import { Footer } from "./components/Footer/Footer";
import { Menu } from "./common/components/Menu/Menu";

export const App: React.FC = () => {
  const [menuActive, setMenuActive] = useState(false);

  const menuItems = [
    { href: "#home", title: "Home", isActive: false },
    { href: "#skills", title: "Skills", isActive: false },
    { href: "#projects", title: "Projects", isActive: false },
    { href: "#contacts", title: "Contacts", isActive: false },
  ];

  return (
    <div className="App">
      <div className="menu">
        <nav className="burger">
          <div className="burgerBtn" onClick={() => setMenuActive(!menuActive)}>
            <span />
          </div>
        </nav>
      </div>

      <div>
        <Header />
        <AboutMySelf />
        <SkillsList />
        <ProjectsList />
        <Contacts />
        <Footer />
      </div>

      <Menu
        menuItems={menuItems}
        active={menuActive}
        setActive={setMenuActive}
      />
    </div>
  );
};

export default App;
