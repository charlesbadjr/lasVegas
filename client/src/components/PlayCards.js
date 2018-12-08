import React, { Component } from 'react';
import { Header, 
    Card, 
    Icon, 
    Image, 
    Button } from 'semantic-ui-react';
import $ from 'jquery';


class PlayCards extends Component {
    constructor(props) {
        super(props);
        this.baseUrl = "https://deckofcardsapi.com/api/deck/";
        this.state = { dealerDescript: [], deckCards: [], deckId: '', dealerCards: [], playerCards: [], initial: true };
      }

      componentDidMount() {
          this.generateDeck()
          this.dealerTagLine()
      }

    // description for dealer
    dealerTagLine = () => {
    $.ajax({
        url: "https://geek-jokes.sameerkumar.website/api",
        type: 'GET'
    }).done( res => {
        this.setState({ dealerDescript: res.message })
    })
}

 // Get Shuffled deck with Deck ID

 generateDeck = () => {
     $.ajax({
         url: `${this.baseUrl}new/shuffle/?deck_count=6`,
         type: 'GET'
     }).done( async res => {
         this.setState({ deckId: res.deck_id, dealerCards: [], playerCards: [] }, () => {
             const dealerCards = this.getCards('dealerCards')
             const playererCards = this.getCards('playerCards')
         });

     })
    }

    // grabs 2 cards by default assigns them to personCards 
    getCards = (who, cards = 2) => {
        $.ajax({
            type: 'GET',
            url: `${this.baseUrl}${this.state.deckId}/draw/?count=${cards}`
        }).done( res => {
            const personCards = this.state[who]
            this.setState({ [who]: [...personCards, ...res.cards] })
        })
    }

    // Assigns value of Face cars Ace is 1

    getValue = (card) => {
        let value = parseInt(card)
        if (isNaN(value)) {
          switch(card) {
              case 'JACK':
              case 'QUEEN':
              case 'KING':
                return 10
              default:
                return 1
          }
        } else {
            return value
        }
    }

    dealerAddCards = () => {
        const { playerCards } = this.state
        const total = playerCards.reduce( (total, card)  =>  {
            return total + this.getValue(card.value) 
        }, 0)
        return total < 17
    }


    addCards = () => {
        const { playerCards } = this.state
        const total = playerCards.reduce( (total, card)  =>  {
            return total + this.getValue(card.value) 
        }, 0)
        return total < 21
    }

    // Logic can you hit or not hit 

    hit = () => {  
      if (this.addCards())
        this.getCards('playerCards', 1)
    }
 
 

 // Have dealer draw 1 card


 
 // Dealer score is under 17 
 dealerHit = () => {


 }

 // Who won? dealer score is 17 or over.
 whoWonGame = () => {
 
 }

 
// for card counting need to set Value to cards, Set overal Score.
 

    render() {
        const { dealerCards, playerCards } = this.state
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
                   <Card.Description> {this.dealerDescript}  </Card.Description>
                </Card.Content>
                
                 <Card.Content extra>
                  <a>
                    <Icon name='user' />
                             55 Wins
                  </a>
                 </Card.Content>
             </Card>
             
             <Card.Group itemsPerRow={8}>
               { dealerCards.map( (card, i) => <Card key={i} raised image={card.image} alt={`card${i}`} id={`DealerCard${i}`}/> )}
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
             <Card.Group itemsPerRow={8}>
             { playerCards.map( (card, i) => <Card key={i} raised image={card.image} alt={`card${i}`} id={`playerCards${i}`}/> )}
             </Card.Group>
            </div>
            <div className="Buttons">
               <Button color="red" onClick={this.generateDeck}> Get New Deck </Button>
               <Button color="yellow" onClick={this.hit}> Hit Me </Button>
               <Button color="Blue" onClick={this.holdCards}> Hold </Button>
               <Button color="green" onClick={this.dealCards}> Deal Game </Button>
              
            </div>
            <div>
                
            </div>
          </div>
        );
    }
}


export default PlayCards;
