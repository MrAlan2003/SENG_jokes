import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jokes from './component/jokes/Jokes';
import Games from './component/games/Games';
import Photos from './component/photos/Photos';
import Tasks from './component/tasks/Tasks';
import {Link, BrowserRouter} from "react-router-dom";
import {Redirect, Route, Switch, withRouter} from "react-router";


class App extends Component {

    constructor(props) {
        super(props);

       // this.state = {clickCount: 0};

        //this.totalCounterUpdate = this.totalCounterUpdate.bind(this);
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">  
          <p>
            Сайт-for-fun. 
		  </p>
		  <img src={logo} className="App-logo" alt="logo" />
          <quote>На ПИНЖей всегда молилась, а это... Стыдно за страну с такими инженерами</quote>
        </div> {/*close header*/}

        <div className="App-content">
			<div className="left">
                <div className ="circle" >
                    
					<div id="down">
					  <Link to={"/jokes"}><button className="circle-little" id="c1">Шуточки</button></Link>
					  <Link to={"/games"}><button className="circle-little" id="c2">Картиношки</button></Link>
					  <Link to={"/tasks"}><button className="circle-little" id="c3">Форумчик</button></Link>
					  <Link to={"/photos"}><button className="circle-little" id="c4">Фоточки</button></Link>
					</div>
					
					<span className="centertext">Шуточки от ПИНЖей</span>
				</div> {/*close circle*/}
			</div>	{/*close left*/}
			
            <div className="right">
			    <Switch>
				    <Route
					  path={"/jokes"}
					  component={Jokes}/>
				    <Route
					  path={"/games"}
					  component={Games}/>
				    <Route
					  path={"/photos"}
					  component={Photos}/>
				    <Route
					  path={"/tasks"}
					  component={Tasks}/>
			    </Switch>
			</div> {/*close right*/}


			
        </div> {/*close app-content*/}
		
    </div> 

    );
  }



}

export default withRouter(App);



/* <button onClick={<Jokes />}>Шуточки</button>
<button >Фоточки</button>
<button >Заданьица</button>
<button >Игорочки</button>*/