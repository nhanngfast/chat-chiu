import "./HomeButton.css";
import EastIcon from '@mui/icons-material/East';

const HomeButton = ({ buttonContent }) => {
  return (
    <button className="home-btn">
      <p>{buttonContent}</p>
      <EastIcon />
    </button>
  );
};

export default HomeButton;
