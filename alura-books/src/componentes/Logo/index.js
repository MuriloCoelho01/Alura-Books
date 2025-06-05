import logo from '../../imagens/logo.svg'
import styled from 'styled-components';

const LogoHeader = styled.div`
  display: flex;
  font-size: 30px;
`
const LogoImg = styled.img`
  margin-right: 10px;
`

function Logo(){
  return(
            <LogoHeader>
            <LogoImg 
            src={logo} 
            alt='logo Alura books'
            />
             <p><strong>Muri</strong> Books</p>
            </LogoHeader>
 );
}

export default Logo;