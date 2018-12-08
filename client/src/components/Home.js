import React, { Component } from 'react';
import { Header, Button, Form } from 'semantic-ui-react';
import { handleLogin } from '../reducers/user';
import { Link } from 'react-router-dom';


class Home extends Component {

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { dispatch, history } = this.props;
    dispatch(handleLogin(this.state, history));
  }


  render() {
    return (
      <div className="homeScreen" >
         <Header as="h1" textAlign="center"> The Vegas Experience </Header>
         <div >
           <Form>
             <Form.Field>
               <label> what's your name? </label>
                 <input 
                    required
                    name='firstname' 
                    placeholder='Your Name'
                    onChange={this.handleChange} />
                    <label> Introduce yourself </label >
                    <input 
                        required
                        name='description' 
                        placeholder='tagline' 
                        onChange={this.handleChange}/>
             </Form.Field>
           </Form>
           <Link to="./PlayCards">
             <Button color="blue" icon="play" > Let's Play </Button>
           </Link> 
         </div>
      </div>
    );
  }
}

export default Home;

