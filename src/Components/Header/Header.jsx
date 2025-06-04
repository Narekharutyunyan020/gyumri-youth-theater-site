
import s from './Header.module.scss';
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
    return (
        <div className={`container${s.main}`}>
            <header className={s.header}>
                <Link to="/">
                    <div className={s.leftSection}>
                        <img src="/Logo.png" alt="Logo" />
                        <h1>
                            Youth Theater
                        </h1>
                    </div>
                </Link>

                <nav className={s.nav}>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `${s.navLink} ${isActive ? s.active : ''}`
                        }
                    >
                        Գլխավոր
                    </NavLink>

                    <NavLink
                        to="/Actors"
                        className={({ isActive }) =>        `${s.navLink} ${isActive ? s.active : ''}`
                        }
                    >
                        Դերասաններ
                    </NavLink>
                    <NavLink
                        to="/Մերմասին"
                        className={({ isActive }) =>       `${s.navLink} ${isActive ? s.active : ''}`
                        }
                    >
                        Մեր Մասին
                    </NavLink>
                    <NavLink
                        to="/Ներկայացումներ"
                        className={({ isActive }) =>       `${s.navLink} ${isActive ? s.active : ''}`
                        }
                    >
                        Ներկայացումներ
                    </NavLink>
                    <NavLink
                        to="/կապ"
                        className={({ isActive }) =>       `${s.navLink} ${isActive ? s.active : ''}`
                        }
                    >
                        Կապ
                    </NavLink>

                </nav>

                {/* <form className={s.rightSection} onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        placeholder="Փնտրել ներկայացում..."
                        className={s.searchInput}
                        {...register("search")}
                    />
                    <button className={s.subscribeButton}>Փնտրել</button>
                </form> */}
            </header>
        </div>
    )
}

export default Header