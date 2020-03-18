import React from "react";
import "./styles/styles.css";
import { makeStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import BackupIcon from "@material-ui/icons/Backup";
import Axios from "axios";
import Button from '@material-ui/core/Button';


import ReactDropzone from "react-dropzone";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  uploadArea: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: 500,
    height: 250,
    border: "1px dashed darkgrey"
  },

  uploadAreaOff: {
    border: "none",
    height: 150,
    width: 500
  }
}));

function FileDndD(props) {
  const classes = useStyles();
  const [droppedFiles, setDropppedFiles] = React.useState([]);

  const onDrop = files => {
    setDropppedFiles([...droppedFiles, ...files]);
  };

  const uploadFiles = () => {
    const formData = new FormData();
    formData.append("audio_file", droppedFiles);

    Axios.post("http://192.168.43.51:5000/process", formData, {
      headers: {
        "Content-type": "multipart/form-data"
      }
    }).then(res => {
      console.log(res.data);
    });
  };

  return (
    <div>
      <ReactDropzone multiple onDrop={onDrop}>
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps()}
            className={
              droppedFiles.length === 0
                ? classes.uploadArea
                : classes.uploadAreaOff
            }
          >
            <input {...getInputProps()} />
            {droppedFiles.length !== 0 ? (
              <TableContainer style={{ boxShadow: "none" }} component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ fontWeight: "bold" }}>Name</TableCell>
                      <TableCell style={{ fontWeight: "bold" }} align="right">
                        Size
                      </TableCell>
                      <TableCell style={{ fontWeight: "bold" }} align="right">
                        Type
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {droppedFiles.map(row => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">
                          {(row.size / (1024 * 1024)).toFixed(2)} MB
                        </TableCell>
                        <TableCell align="right">{row.type}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <>
                <div style={{ marginTop: 60 }}>
                  <BackupIcon style={{ fontSize: 64 }} />
                  <Typography style={{ fontSize: 16 }}>
                    Drag and Drop Audio file here
                  </Typography>
                  <Typography style={{ fontSize: 12 }}>
                    Make sure it is only an audio file
                  </Typography>
                </div>
              </>
            )}
          </div>
        )}
      </ReactDropzone>
      <Button onClick={() => uploadFiles()} disabled={!(droppedFiles.length > 0)} variant="contained" style={{width: 505}} color="primary">
              Analyze
            </Button>
    </div>
  );
}

export default FileDndD;
