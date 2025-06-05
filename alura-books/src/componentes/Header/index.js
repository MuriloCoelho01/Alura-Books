import Logo from "../Logo"
import List from "../OpcoesHeader"
import Listicon from "../IconsHeader"
import style from 'styled-components'

const HeaderConteiner = style.header`
  background-color:#ffffff;
    display: flex;
    justify-content: center;
` 
function Header() {
    return (
        <HeaderConteiner>
     <Logo/>
     <List/>
     <Listicon/>
      </HeaderConteiner>
    )
}

export default Header