import { RxHamburgerMenu } from "react-icons/rx";
import { IconContext } from "react-icons";
import { useState } from "react";
import text from "@/utils/text";
import { smoothScroll } from "@/utils/functions";
import NavBar from "../NavBar/NavBar";

const Header = ({ onClick }) => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header>
            <div className="header">
                <div className="header__logo">
                    <a href="#" onClick={() => smoothScroll()}>
                        <img src="./images/logo.png" alt="" />
                        <div className="header__logo-text">
                            ｄｅｎ . ｋｕｚｎｅｔｓ
                        </div>
                    </a>
                </div>
                <NavBar />
                <IconContext.Provider
                    value={{
                        size: "1.5em",
                        className: `nav__menu-burger ${
                            showMenu ? "nav__menu-burger--open" : ""
                        }`,
                    }}
                >
                    <div onClick={
                        setShowMenu(!showMenu);
                        smoothScroll();
                    }}>
                        <RxHamburgerMenu />
                    </div>
                </IconContext.Provider>
            </div>
        </header>
    );
};

export default Header;
