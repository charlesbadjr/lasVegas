import React, { Component } from 'react';
import { Header, 
    Card, 
    Icon, 
    Image, 
    Button } from 'semantic-ui-react';
import KingHearts from './Styles/KingHearts.png'
import $ from 'jquery';


class PlayCards extends Component {
    constructor(props) {
        super(props);
        this.baseUrl = "https://deckofcardsapi.com/api/deck/";
        this.state = { deckCards: [] };
      }

      // https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6
      // https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2
// need to set variables. KG = King of Hearts

 // Get Shuffled deck with Deck ID

 getCards() {
     $.ajax({
         url: `${this.baseUrl}new/shuffle/?deck_count=6`,
         type: 'GET'
     }).done( deckCards => {
         this.setState({ deckCards: [] });

     })
    }


 // deal cards evenly to players
 
 

 // draw card 1 card 


// for card counting need to set Value to cards, Set overal Score.
 

    render() {
        return (
          <div className="blackJackTable">
            <Header> Black Jack </Header>
            <div className="Dealer">
            <Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                <Card.Content>
                   <Card.Header>Matthew</Card.Header>
                   <Card.Meta>
                      <span className='Suit'> Black Jack Dealer </span>
                   </Card.Meta>
                   <Card.Description> I like counting cards too bastard     </Card.Description>
                </Card.Content>
                
                 <Card.Content extra>
                  <a>
                    <Icon name='user' />
                             55 Wins
                  </a>
                 </Card.Content>
             </Card>
             
             <Card.Group itemsPerRow={6}>
                <Card raised image={KingHearts} alt="card1" />
                <Card raised image={KingHearts} alt="card2"/>
                <Card raised image={KingHearts} alt="card3"/>
                <Card raised image={KingHearts} alt="card4"/>
                <Card raised image={KingHearts} alt="card5"/>
                <Card raised image={KingHearts} alt="card6"/>
                
             </Card.Group>
            </div>


            <div className="PlayerOne" >
            <Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                <Card.Content>
                   <Card.Header>Charlie</Card.Header>
                   <Card.Meta>
                      <span className='Suit'> Black Jack Player </span>
                   </Card.Meta>
                   <Card.Description> Lover in the day, Card counter in the night </Card.Description>
                </Card.Content>
                
                 <Card.Content extra>
                  <a>
                    <Icon name='user' />
                             22 Wins
                  </a>
                 </Card.Content>
             </Card>
             <Card.Group itemsPerRow={6}>
                <Card raised image={KingHearts} alt="card1" />
                <Card raised image={KingHearts} alt="card2"/>
                <Card raised image={KingHearts} alt="card3"/>
                <Card raised image={KingHearts} alt="card4"/>
                <Card raised image={KingHearts} alt="card5"/>
                <Card raised image={KingHearts} alt="card6"/>
                
             </Card.Group>
            </div>
            <div className="Buttons">
               <Button color="red" onClick={this.getCards}> Get New Deck </Button>
               <a> {this.getCards}</a>
               <Button color="yellow" onClick={this.drawCard}> Hit Me </Button>
               <a> {this.drawCard} </a>
               <Button color="green" onClick={this.dealCards}> Deal Game </Button>
               <a> {this.dealCards} </a>
            </div>
          </div>
        );
    }
}


export default PlayCards;
