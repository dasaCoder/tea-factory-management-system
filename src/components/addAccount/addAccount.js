import React from 'react';
import './addAccount.css';
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
import Card from '@material-ui/core/Card';

function AddAccount() {

  const [accType, setAccType] = React.useState(10);
  const [accName, setAccName] = React.useState('');
  const [accId, setAccId] = React.useState('');
  const [accIsCredited, setAccIsCredited] = React.useState('DEBIT');

  const handleType = (event) => {
    setAccType(event.target.value);
  };

  const handleIsCredit = (event) => {
    setAccIsCredited(event.target.value);
  };

  function submit(){
      console.log(accType, accName, accIsCredited);
  }


  return (
    <Container maxWidth="lg">
        
      <Card className="content">
        <form noValidate autoComplete="off" >

        <div className="input-wrapper">
            <FormControl className="full-width">
                <InputLabel htmlFor="age-native-simple">Account Type</InputLabel>
                <Select
                native
                value={accType}
                onChange={handleType}
                >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                </Select>
            </FormControl>
        </div>

        <div className="input-wrapper">
          <TextField className="full-width" id="accId" label="Account Id" value={accId} onChange={(event)=>{setAccId(event.target.value)}} />
        </div>
        
        <div className="input-wrapper">
          <TextField className="full-width" id="accName" label="Account Name" value={accName} onChange={(event)=>{setAccName(event.target.value)}}/>
        </div>


        <div className="input-wrapper">
          <FormControl className="full-width" component="fieldset">
            <FormLabel component="legend">Debit or Credit</FormLabel>
            <RadioGroup aria-label="credit" name="creditordebit" value={accIsCredited} onChange={handleIsCredit} row>
              <FormControlLabel value="DEBIT" control={<Radio />} label="Debit" />
              <FormControlLabel value="CREDIT" control={<Radio />} label="Credit" />
            </RadioGroup>
          </FormControl>
        </div>

        <div className="input-wrapper">
          <Button variant="contained" color="primary" onClick={()=>{submit()}}>
            Save
          </Button>
        </div>


        </form>
      </Card>

    </Container>
  );
}

export default AddAccount;
