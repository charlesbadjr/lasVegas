import React, { Component } from 'react';
import { Header, 
    Card, 
    Icon, 
    Image, 
    CardContent, 
    Button } from 'semantic-ui-react';
import { axios } from 'devise-axios';


class PlayCards extends Component {
setState( deck, [] )
// need to set variables. KG = King of Hearts

 // Get Shuffled deck
 deckCardsGet() {
     axios.get(${https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1})
 }


 // draw card 

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
                      <span className='Suit'> King of Hearts </span>
                   </Card.Meta>
                   <Card.Description> </Card.Description>
                </Card.Content>
                
                 <Card.Content extra>
                  <a>
                    <Icon name='user' />
                             22 Friends
                  </a>
                 </Card.Content>
             </Card>
            </div>
            <div className="PlayerOne" >
            <Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                <Card.Content>
                   <Card.Header>Charlie</Card.Header>
                   <Card.Meta>
                      <span className='Suit'> Ace of Hearts </span>
                   </Card.Meta>
                   <Card.Description> </Card.Description>
                </Card.Content>
                
                 <Card.Content extra>
                  <a>
                    <Icon name='user' />
                             22 Friends
                  </a>
                 </Card.Content>
             </Card>

            </div>
            <Button color="red"> Get Deck </Button>
              <onclick=""
          </div>
        );
    }
}

export default PlayCards;
