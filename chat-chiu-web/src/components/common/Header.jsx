import "./Header.css";
import logo from "../../assets/images/homepage-logo.png";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import { MUI_ICON_BTN, HEADER_SEARCH_INPUT_SX } from "../../constants/HomeUIContants";
import shopping_bag from "../../assets/icons/shopping-bag.svg";

const Header = () => {
  return (
    <div className="header-container">
      <img src={logo} alt="home-logo" width="150" height="auto" />
      <nav>
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
    </div>
  );
};

export default Header;
