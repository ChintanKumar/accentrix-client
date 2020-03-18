import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import AccentSelector from "./components/AccentSelector";
import FileDndD from "./components/FileDnD";
import Grid from "@material-ui/core/Grid";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['"Open Sans"'].join(",")
  }
});

function App() {
  const [disableAnalyze, setDisableAnalyze] = React.useState(false);
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Title />
          <AccentSelector />
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
          <Grid item>
            <FileDndD setButtonDisable={setDisableAnalyze} />
          </Grid>
          <Grid>
            <Button disabled={!disableAnalyze} variant="contained" style={{width: 505}} color="primary">
              Analyze
            </Button>
          </Grid>
          </Grid>
        </header>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
