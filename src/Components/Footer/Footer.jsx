import React from "react";
import s from "./Footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.leftSection}>
          <h2>Gyumri Theater</h2>
          <p>© {new Date().getFullYear()} Բոլոր իրավունքները պաշտպանված են</p>
        </div>

        <nav className={s.nav}>
          <Link to="/">Գլխավոր</Link>
          <Link to="/actors">Դերասաններ</Link>
          <Link to="/about">Մեր մասին</Link>
          <Link to="/shows">Ներկայացումներ</Link>
          <Link to="/contact">Կապ</Link>
        </nav>

        <div className={s.contact}>
          <h3>Կապ մեզ հետ</h3>
          <p>Էլ․ հասցե՝ info@gyumritheater.am</p>
          <p>Հեռ․՝ +374 91 123456</p>
          <p>Հասցե՝ Գյումրի, Հայաստան</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
