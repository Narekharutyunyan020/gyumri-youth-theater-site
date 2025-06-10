import { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import s from './Header.module.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={s.header}>
      <Link to="/" >
        <div className={s.leftSection}>
          <img src="/Images/Logo1.jpg" alt="Logo" />
          <h1>Youth Theater</h1>
        </div>
      </Link>

      <div className={s.burger} onClick={toggleMenu}>
        <span className={menuOpen ? s.open1 : ''}></span>
        <span className={menuOpen ? s.open2 : ''}></span>
        <span className={menuOpen ? s.open3 : ''}></span>
      </div>

      <nav className={s.desktopMenu}>
        <NavLink to="/" className={s.navLink}>Գլխավոր</NavLink>
        <NavLink to="/Actors" className={s.navLink}>Դերասաններ</NavLink>
        <NavLink to="/Մերմասին" className={s.navLink}>Մեր Մասին</NavLink>
        <NavLink to="/Ներկայացումներ" className={s.navLink}>Ներկայացումներ</NavLink>
      </nav>

      {menuOpen && (
        <nav className={s.mobileMenu}>
          <NavLink to="/" className={s.navLink} onClick={() => setMenuOpen(false)}>Գլխավոր</NavLink>
          <NavLink to="/Actors" className={s.navLink} onClick={() => setMenuOpen(false)}>Դերասաններ</NavLink>
          <NavLink to="/Մերմասին" className={s.navLink} onClick={() => setMenuOpen(false)}>Մեր Մասին</NavLink>
          <NavLink to="/Ներկայացումներ" className={s.navLink} onClick={() => setMenuOpen(false)}>Ներկայացումներ</NavLink>
        </nav>
      )}
    </header>
  );
};

export default Header;
