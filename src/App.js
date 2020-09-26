import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import NavBar from './components/navBar/navBar';

function App() {


  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [value, setValue] = React.useState('female');

  const handlevChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>

      <NavBar/>
        
      <Container maxWidth="sm">
        <form noValidate autoComplete="off">

        <div className="input-wrapper">
          <FormControl className="full-width" >
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="input-wrapper">
          <TextField className="full-width" id="accName" label="Account Name" />
        </div>

        <div className="input-wrapper">
          <TextField className="full-width" id="accId" label="Account Id" />
        </div>

        <div className="input-wrapper">
          <FormControl className="full-width" component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handlevChange} row>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
        </div>

        <div className="input-wrapper">
          <Button variant="contained" color="primary">
            Primary
          </Button>
        </div>


        </form>
      </Container>

    </div>
  );
}

export default App;
