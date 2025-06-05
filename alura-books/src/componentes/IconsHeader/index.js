import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'

import styled from 'styled-components'

const Icones = styled.ul`
  display: flex;
  align-items: center;
`
const Icone = styled.li`
  margin-right: 40px;
  width: 25px
`
const icon = [perfil,sacola]

function Listicon() {
    return(
      <Icones>
      {icon.map((icon) =>(
       <Icone><img src={icon} alt='icon'></img></Icone>
      ))}
     </Icones>
    )
}

export default Listicon