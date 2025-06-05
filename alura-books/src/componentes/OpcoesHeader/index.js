import styled from 'styled-components'

const textosOpcoes = ['Categorias','Favoritos','minha estante']
const ListConteiner = styled.ul`
  display: flex;
`
const OpcaoConteiner = styled.li`
   font-size:16px ;
    min-width: 120px;
    display: flex;
    justify-content: center;
    text-align: center;
    height: 100%;
    padding:0 5px;
    cursor: pointer;
`

function List() {
    return(
      <ListConteiner>
      {textosOpcoes.map( (name) => (
        <OpcaoConteiner><p>{name}</p></OpcaoConteiner>
      ))}
     </ListConteiner>
    )
}

export default List