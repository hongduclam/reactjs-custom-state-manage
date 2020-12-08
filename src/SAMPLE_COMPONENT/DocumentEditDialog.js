import React, {useContext, useEffect, useMemo, useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import {makeStyles} from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import {StoreContext} from "../StoreProvider/StoreContext";


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  input: {
    display: 'none',
  },
}));


const DocumentEditDialogMemo = function ({showDialog, handleClose, documentEdit, setFormValues, handleSave, handleFileChange, formValues}) {
  const classes = useStyles();
  return useMemo(function () {
    return <div>
      <Dialog open={showDialog} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          {documentEdit ? 'Edit' : 'New'} Document
        </DialogTitle>
        <DialogContent>
          <TextField
            onChange={(e) => {
              console.log({e})
              setFormValues({
                ...formValues,
                name: e.currentTarget.value
              })
            }}
            value={formValues.name}
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            fullWidth
          />
          <br/>
          <br/>
          <div className={classes.root}>
            <input
              onChange={handleFileChange}
              id="contained-button-file"
              type="file"
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  }, [showDialog, handleClose, documentEdit, setFormValues, handleSave, handleFileChange, formValues])
}

export default function DocumentEditDialog() {
  const {state, actions} = useContext(StoreContext);
  const {showDialog, documentEdit} = state;
  const initValues = {name: '', file: ''};
  const [formValues, setFormValues] = useState(initValues);
  console.log(({state}))

  useEffect(() => {
    setFormValues(documentEdit || initValues)
  }, [documentEdit])

  const handleClose = () => {
    actions.closeDialog();
  };

  const handleFileChange = (e) => {
    setFormValues({
      ...formValues,
      file: e.target.files[0]
    })
  };

  const handleSave = () => {
    if (documentEdit) {
      actions.updateDocument({
        ...formValues,
        id: documentEdit.id
      })
    } else {
      actions.createDocument({
        ...formValues,
        status: 0,
        statusDateTime: new Date().toISOString()
      });
    }
    actions.closeDialog();
  };

  return (
    <DocumentEditDialogMemo
      handleClose={handleClose}
      documentEdit={documentEdit}
      formValues={formValues}
      handleFileChange={handleFileChange}
      setFormValues={setFormValues}
      showDialog={showDialog}
      handleSave={handleSave}
    />
  );
}
