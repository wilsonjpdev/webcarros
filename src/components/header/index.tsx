import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiUser, FiLogIn } from "react-icons/fi";

function Header() {
    const signed = false;
    const loadingAuth = false;

    return (
        <div className="w-full flex items-center justify-center h-16 bg-white drop-shadow mb-4">
            <header className="flex w-full max-w-7xl items-center justify-between px-4 mx-auto">
                <Link to="/">
                    <img src={logo} alt="Logo do site" />
                </Link>

                {!loadingAuth && signed && (
                    <Link to="/dashboard">
                        <div className="border-2 rounded-full p-1 border-gray-900">
                            <FiUser size={22} color="#000" />
                        </div>
                    </Link>
                )}
                {!loadingAuth && !signed && (
                    <Link to="/login">
                        <div className="border-2 rounded-full p-1 border-gray-900">
                            <FiLogIn size={22} color="#000" />
                        </div>
                    </Link>
                )}
            </header>
        </div>
    );
}

export default Header;
