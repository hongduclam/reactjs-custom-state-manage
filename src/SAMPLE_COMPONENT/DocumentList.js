import React, {useEffect, useContext, useCallback} from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import EditIcon from '@material-ui/icons/Edit';

import {StoreContext} from "../StoreProvider/StoreContext";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const DocumentStatus = ({status}) => {
  return <Chip
    label={status === 1 ? 'Active' : 'In-Active'}
    color={status === 1 ? 'primary' : 'secondary'}
  />
};



function DocumentList() {
  const {state, actions} = useContext(StoreContext);
  const {documents} = state;
  const classes = useStyles();

  useEffect(() => {
    actions.getDocuments();
  }, []);

  const handleOpenDialog = (document) => {
    actions.showDialog(document)
  }

  if (!documents || !documents.length) {
    return <Skeleton animation="wave"/>;
  }
  return (
    <Container fixed>
      <Box m={2}>
        <Typography variant="h5" component="h5" gutterBottom>
          <Button variant="contained" color="primary" onClick={() => handleOpenDialog()}>
            Add Document
          </Button>
        </Typography>

        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="left">Status</StyledTableCell>
                <StyledTableCell align="left">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {documents
                .map((document) => (
                <StyledTableRow key={document.id}>
                  <StyledTableCell align="left">
                    {
                      <a href={document.link} target={'blank'}>
                        {document.name}
                      </a>
                    }
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <DocumentStatus status={document.status}/>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <IconButton
                      onClick={() => handleOpenDialog(document)}
                      color="primary"
                      size="small"
                    >
                      <EditIcon />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </Box>
    </Container>

  );
}

DocumentList.propTypes = {};
DocumentList.defaultProps = {};

export default DocumentList;
