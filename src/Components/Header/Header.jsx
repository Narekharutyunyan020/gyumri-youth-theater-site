import { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import s from './Header.module.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={s.main}>
      <header className={s.header}>


        <div className={s.burger} onClick={toggleMenu}>
          <span className={menuOpen ? s.open1 : ''}></span>
          <span className={menuOpen ? s.open2 : ''}></span>
          <span className={menuOpen ? s.open3 : ''}></span>
        </div>

        <nav className={`${s.nav} ${menuOpen ? s.showMenu : ''}`}>
          <NavLink to="/" className={({ isActive }) => `${s.navLink} ${isActive ? s.active : ''}`} onClick={closeMenu}>
            Գլխավոր
          </NavLink>
          <NavLink to="/Actors" className={({ isActive }) => `${s.navLink} ${isActive ? s.active : ''}`} onClick={closeMenu}>
            Դերասաններ
          </NavLink>
          <Link to="/" onClick={closeMenu}>
            <div className={s.leftSection}>
              <img src="/Images/Logo1.jpg" alt="Logo" />
              <h1>Youth Theater</h1>
            </div>
          </Link>
          <NavLink to="/Մերմասին" className={({ isActive }) => `${s.navLink} ${isActive ? s.active : ''}`} onClick={closeMenu}>
            Մեր Մասին
          </NavLink>
          <NavLink to="/Ներկայացումներ" className={({ isActive }) => `${s.navLink} ${isActive ? s.active : ''}`} onClick={closeMenu}>
            Ներկայացումներ
          </NavLink>
          {/* <NavLink to="/կապ" className={({ isActive }) => `${s.navLink} ${isActive ? s.active : ''}`} onClick={closeMenu}>
            Կապ
          </NavLink> */}
        </nav>
      </header>
    </div>
  );
};

export default Header;
