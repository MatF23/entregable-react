import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import { useRef } from 'react';
import  PropTypes  from 'prop-types'

export const InputSearch = ({searchValue, setSearchValue})=> {
const inputRef = useRef()

  return (
    <Box
      sx={{
        py: 2,
        display: 'flex',
        gap: 2,
        alignItems: 'center',
        flexWrap: 'wrap',
        variant: "outlined",
        type: "text",
        size: 'normal'
      }}
    >
      <Input
        inputProps={{ style: { textAlign: 'center' } }}
        placeholder='Escribe aquí'
        ref={inputRef}
        value={searchValue}
        onChange={(e)=> setSearchValue(e.target.value)}/>
    </Box>
  );
}
InputSearch.propTypes={
  searchValue:PropTypes.string, 
  setSearchValue:PropTypes.any
}