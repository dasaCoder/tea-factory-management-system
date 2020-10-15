import React from 'react';
import './addAccount.css';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import firebaseDB from '../../firebase';


function AddAccount() {

  const [accType, setAccType] = React.useState(1000);
  const [accName, setAccName] = React.useState('');
  const [accId, setAccId] = React.useState('');
  const [accIsCredited, setAccIsCredited] = React.useState('DEBIT');
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const db = firebaseDB.firestore();

  const handleType = (event) => {
    setAccType(event.target.value);

    getAccountId(event.target.value)
  };

  const handleIsCredit = (event) => {
    setAccIsCredited(event.target.value);
  };

  const submit = () => {

    db.collection("accounts").add({
      "accType": accType,
      "accName": accName,
      "accId": accId,
      "accNature": accIsCredited
    });

    setAccType(1000);
    setAccName('');
    setAccId('');

    setOpen(true);
  }

  const getAccountId = (type) => {
    db.collection("accounts").orderBy('accId', 'desc')
      .where('accType', '==', type)
      .get()
      .then(querySnapshot => {
        if (querySnapshot.docs.length > 0) {
          setAccId(parseInt(querySnapshot.docs[0].data().accId) + 1)
        } else {
          setAccId(parseInt(type) + 1)
        }
      });
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
                <option value={1000}>Income Account</option>
                <option value={2000}>Direct Expence Account</option>
                <option value={2500}>General Administration Account</option>
              </Select>
            </FormControl>
          </div>

          <div className="input-wrapper">
            <TextField className="full-width" id="accId" disabled label="Account Id" value={accId} onChange={(event) => { setAccId(event.target.value) }} />
          </div>

          <div className="input-wrapper">
            <TextField className="full-width" id="accName" label="Account Name" value={accName} onChange={(event) => { setAccName(event.target.value) }} />
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
            <Button variant="contained" color="primary" onClick={() => { submit() }}>
              Save
          </Button>
          </div>


        </form>
      </Card>

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Saved Successfully!"
        action={
          <React.Fragment>
          
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />

    </Container>
  );
}

export default AddAccount;
