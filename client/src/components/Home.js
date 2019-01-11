import React, { Component } from 'react';
import { Header, Button, Form } from 'semantic-ui-react';
import { handleLogin } from '../reducers/user';
import { Link } from 'react-router-dom';


class Home extends Component {
 state = {firstName: '', tagLine: '' };

  handleChange = (e) => {
    const { name, value, firstName, tagLine } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { dispatch, history, firstName, tagLine } = this.props;
    dispatch(handleLogin(this.state, history));
  }


  render() {  
    const {firstName, tagLine } = this.state;
    return (
      <div className="homeScreen" >
         <Header as="h1" style={{ color: 'white', textAlign: 'center' }} > The Vegas Experience </Header>
         <div >
           <Form className="homeForm" >
             <Form.Field>
               <label htmlfor="text" style={{ color: 'white', textAlign: 'left' }}> what's your name? </label>
                 <input 
                    required
                    name='firstName' 
                    placeholder='Your Name'
                    value={firstName}
                    onChange={this.handleChange} />
                  </Form.Field>
                  <Form.Field>
                    <label as="h1" style={{ color: 'white', textAlign: 'left' }}> Introduce yourself </label >
                    <input 
                        required
                        name='tagLine' 
                        value={tagLine}
                        placeholder=' your tagline' 
                        onChange={this.handleChange}/>
                  </Form.Field>
           <Link to="./PlayCards">
             <Button color="blue" icon="play" as="h1" > Let's Play </Button>
           </Link> 
           </Form>
         </div>
      </div>
    );
  }
}

export default Home;

