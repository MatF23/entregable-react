import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import  PropTypes  from 'prop-types'

export const ButtonSearch = ({onClick, buttonText})=> {
  return (
    <Stack spacing={2} direction="row">
      <Button
      onClick={onClick}
      variant="contained">
        {buttonText}
      </Button>
    </Stack>
  );
}
ButtonSearch.propTypes={ 
  onClick:PropTypes.func,
  buttonText:PropTypes.string
}
