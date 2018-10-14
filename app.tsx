import * as React from "react";
import * as ReactDOM from "react-dom";

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };





export interface PersonProps {
  name: string;
  age: string;
}
export class Person extends React.Component<PersonProps, {}> {
  clickHandler = () => {
    console.log("you clicked");
  };
  public render() {
      
    let stockData = this.fetchAsync();
    return (
      <div onClick={this.clickHandler} className="person">
        <h1>{this.props.name} </h1>
        <p> Age: {this.props.age} </p>
        <p> Stock: {this.stockData.MSFT.quote.latestPrice} </p>
      </div>
    );
  }

  stockData: any;

  async fetchAsync() {


    let data = await (await fetch(
      "https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb,msft&types=quote"
    )).json();
    return data;
  }
}
//<Person name="Louis" age="38" />
let app = (
  <div>
   <AppBar position="static">
        <Toolbar>
          <IconButton className={`string${styles.menuButton}`} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={`string${styles.grow}`}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
  </div>
);
ReactDOM.render(app, document.getElementById("container"));
