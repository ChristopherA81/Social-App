import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";

export default function Topbar() {

  
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
          <Link to="/" style={{textDecoration:"none"}}>
          <span className="logo">Chris App</span>
          </Link>
          
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <SearchIcon className="searchIcon"/>
            <input placeholder="search..."className="searchInput" />

          </div>
        </div>
        <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
          </div>
        </div>
        <div className="topbarIcon">
          <div className="topbarIconItem">
            <AccountCircleIcon/></div>
        </div>
        <img className="topbarImg" src="./assets/post.JPG"alt="" />
      
    </div>
  )
}
