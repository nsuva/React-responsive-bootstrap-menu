import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';
import Home from "./Home";
import Link1 from "./Link1";
import Link2 from "./Link2"; 


class Main extends Component {
  render() {
 const routeInfo = [
      { displayName: 'HOME',
        link: '/',
      },
      { displayName: 'LINK1',
        link: '/link1',
      },
      { displayName: 'LINK2',
        link: 'link2',
      },
    ];
   return (
	
	<HashRouter>
	 
	   <div>
             <ul className="header">
	       <a class="logo"></a>
               <li><NavLink exact to="/">Home</NavLink></li>
               <li><NavLink to="/link1">Link1</NavLink></li>
               <li><NavLink to="/link2">Link2</NavLink></li>
             </ul>
          
	   <div className="content">
               <AnimatedSwitch
     		  atEnter={{ opacity: 0 }}
      		  atLeave={{ opacity: 0 }}
      		  atActive={{ opacity: 1 }}
      	  	  className="switch-wrapper"
    	  	  >
	       <Route exact path="/" component={Home}/>
               <Route path="/link1" component={Link1}/>
               <Route path="/link2" component={Link2}/>
	    </AnimatedSwitch>      
	   </div>
         </div>
	</HashRouter>
     );
  }
}

 
export default Main;
