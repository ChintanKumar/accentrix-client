import React from "react";
import "./styles/styles.css";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

function AccentSelector() {
  const classes = useStyles();

  const [to, setTo] = React.useState('en-us');
  const [from, setFrom] = React.useState('en-in');

  const handleToChange = (event) => {
    setTo(event.target.value);
  }

  const handleFromChange = (event) => {
    setFrom(event.target.value);
  }

  return (
    <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="from-lang">From Accent</InputLabel>
              <Select value={from} onChange={handleFromChange} input={<Input id="from-lang" />}>
                <MenuItem value={"en-in"}>English (India)</MenuItem>
              </Select>
            </FormControl>
            </Grid>
            <Grid item>
              <div style={{ marginLeft: 25, marginRight: 25 }}>
              <MoreHorizIcon/>
              <RecordVoiceOverIcon style={{ marginLeft: 24, marginRight: 24 }}/>
              <MoreHorizIcon/>
              </div>
            </Grid>
            <Grid item>
              <FormControl className={classes.formControl}>
                <InputLabel id="to-lang">To Accent</InputLabel>
                <Select
                onChange={handleToChange}
                    labelId="to-lang"
                    id="to-lang"
                    value={to}
                    input={<Input />}
                >
                    <MenuItem value={"en-us"}>English (US)</MenuItem>
                    <MenuItem value={"en-uk"}>English (UK)</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
  );
}

export default AccentSelector;
