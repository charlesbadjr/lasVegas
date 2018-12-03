import React, { Component } from 'react';
import { Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div className="homeScreen" >
         <Header as="h1" textAlign="center"> The Vegas Experience </Header>
         <div >
           <Link to="./PlayCards">
             <Button color="blue" icon="play" > Let's Play </Button>
           </Link> 
         </div>
      </div>
    );
  }
}

export default Home;

