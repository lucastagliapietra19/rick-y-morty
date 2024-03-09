import { useState } from "react";
import { Button, ContainerNav, Input } from "./misEstilos";

const  SearchBar = (props) => {

   const [id, setId] = useState('')

   const handleClick = () => {
      props.onSearch(id);
   }

   const hamdleChange = ({target}) => {
      setId(target.value)
   }

   return (
      <ContainerNav>
         <Input
            onChange={hamdleChange}
            value={id}
            type='search' 
            placeholder="id.."
         />
         <Button onClick={() => handleClick()}>Agregar</Button>
      </ContainerNav>
   );
}

export default SearchBar;
