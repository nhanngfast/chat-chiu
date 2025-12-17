import "./Header.css";
import logo from "../../assets/images/homepage-logo.png";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import {
  MUI_ICON_BTN,
  HEADER_SEARCH_INPUT_SX,
  MUI_ICON_BTN_MOBILE,
} from "../../constants/HomeUIContants";
import shopping_bag from "../../assets/icons/shopping-bag.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Header = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  return (
    <div className="header-container">
      <img src={logo} alt="home-logo" width="150" height="auto" />
      <nav className="header__desktop-menu">
        <Link to={"/"}>Giới thiệu</Link>
        <Link to={"/"}>Bộ sưu tập</Link>
        <Link to={"/"}>Sản phẩm</Link>
        <Link to={"/"}>Tin tức</Link>
        <Link to={"/"}>Liên hệ</Link>
        <FormControl sx={HEADER_SEARCH_INPUT_SX} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Tìm kiếm
          </InputLabel>
          <Input
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <IconButton sx={MUI_ICON_BTN}>
          <img src={shopping_bag} alt="shopping_bag" />
        </IconButton>
      </nav>
      <div
        className={`header__mobile-overlay ${isOpenMobileMenu ? "show" : ""}`}
        onClick={() => setIsOpenMobileMenu(false)}
      />
      <nav
        className={`header__mobile-menu ${isOpenMobileMenu ? "active" : ""}`}
      >
        <div className="mobile-menu__header">
          <img src={logo} alt="home-logo" width="150" height="auto" />
          <button
            className="mobile-menu__close-btn"
            onClick={() => setIsOpenMobileMenu(false)}
          >
            <CloseIcon />
          </button>
        </div>
        <Link to={"/"}>Giới thiệu</Link>
        <Link to={"/"}>Bộ sưu tập</Link>
        <Link to={"/"}>Sản phẩm</Link>
        <Link to={"/"}>Tin tức</Link>
        <Link to={"/"}>Liên hệ</Link>
        <FormControl sx={HEADER_SEARCH_INPUT_SX} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Tìm kiếm
          </InputLabel>
          <Input
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <IconButton sx={MUI_ICON_BTN_MOBILE}>
          <img src={shopping_bag} alt="shopping_bag" />
        </IconButton>
      </nav>
      <button
        className="header__menu-toggle"
        onClick={() => setIsOpenMobileMenu(true)}
      >
        <MenuIcon />
      </button>
    </div>
  );
};

export default Header;
