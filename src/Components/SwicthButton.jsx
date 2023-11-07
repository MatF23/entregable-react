import { useState } from 'react';
import Switch from '@mui/material/Switch';
import { useLovelySwitchStyles } from '@mui-treasury/styles/switch/lovely';
import PropTypes from 'prop-types';

const SwitchButton = ({ onToggle }) => {
  const lovelyStyles = useLovelySwitchStyles();
  const [toggled, setToggled] = useState(false);

  const HandleToggle = ()=> {
    setToggled(!toggled)
    onToggle(!toggled)
  }

  return (
    <div>
      <Switch
        classes={lovelyStyles}
        checked={toggled}
        onChange={HandleToggle}
        sx={{
          '& .MuiSwitch-thumb': {
            backgroundColor: 'blue', // Cambia el color del thumb del switch
          },
          '& .MuiSwitch-track': {
            backgroundColor: 'blue', // Cambia el color del track del switch
          },
        }}
      />
    </div>
  );
};
export default SwitchButton

SwitchButton.propTypes = {
  onToggle: PropTypes.any
}