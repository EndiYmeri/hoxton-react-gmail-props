import LeftMenu from "./LeftMenu"
import './Header.css'
import Search from "./Search"

function Header(props) {
  return(
        <header className="header">
          <LeftMenu />
          <Search 
            setSearchedWord = {props.setSearchedWord}
          />
        </header>
    )
}
export default Header