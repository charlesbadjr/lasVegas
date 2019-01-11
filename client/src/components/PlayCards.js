import React, { Component } from 'react';
import { Header, 
    Card, 
    Icon, 
    Image, 
    Button } from 'semantic-ui-react';
import $ from 'jquery';
import { Home } from './Home';


class PlayCards extends Component {
    constructor(props) {
        super(props);
        this.baseUrl = "https://deckofcardsapi.com/api/deck/";
        this.state = { dealerDescript: '', deckCards: [], deckId: '',
         dealerCards: [], playerCards: [], initial: true, 
         firstName: '', tagLine:'', wins: [], random: '' };
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
        this.setState({ dealerDescript: res })
    })
}


 dealerImage = (random) => {
     const min = 1;
     const max = 100;
     const rand = min + Math.random() * (max - min);
     this.setState({ random: this.state.random + rand });
     console.log(random);
     
 }

 // Get Shuffled deck with Deck ID

 generateDeck = () => {
     $.ajax({
         url: `${this.baseUrl}new/shuffle/?deck_count=6`,
         type: 'GET'
     }).done( async res => {
         this.setState({ deckId: res.deck_id, dealerCards: [], playerCards: [] }, () => {
             const dealerCards = this.getCards('dealerCards')
             const playerCards = this.getCards('playerCards')
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

// Adds 1 card to dealer's deck
// grey out Hit me once hold is pressed. 
    addDCards = () => {
        const { dealerCards } = this.state
        const total = dealerCards.reduce( (total, card)  =>  {
            return total + this.getValue(card.value) 
        }, 0)
        return total < 17
    }


    // Logic can you hit or not hit 

    hit = () => {  
      if (this.addCards())
        this.getCards('playerCards', 1)
    }
 
 

 // Have dealer draw 1 card
 dealerGetCard = () => {  
    if (this.addDCards())
      this.getCards('dealerCards', 1)
  }
 

 
 // Dealer score is under 17 ?
 dealerHit = () => {


 }

 // Uncover thefirst Dealer Card


 // Who won? dealer score is 17 or over.
 whoWonGame = (wins = 1 ) => {
    const playerWins = this.state[wins]
    this.setState({ [wins]: [...playerWins, playerWins] })
 }

 
// for card counting need to set Value to cards, Set overal Score.
 

    render() {
        
        const { dealerDescript, dealerCards, playerCards, firstName, tagLine, playerWins, dealerWins, random } = this.state
        return (
  <div className="blackJackTable">
            <Header as="h1" style={{color: "white" }}> Black Jack </Header>
     <div className="layOut">

         <div className="playerContainer">
              
               <div className="Dealer">
                  <Card className="dCardImage">
                     <Image src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg' />
                     <Card.Content>
                       <Card.Header> Jenny </Card.Header>
                       <Card.Meta>
                           <span className='Suit'> Black Jack Dealer </span>
                       </Card.Meta>
                       <Card.Description> {dealerDescript}  </Card.Description>
                     </Card.Content>
                     <Card.Content extra>
                        <a>
                           <Icon name='user' />
                             {dealerWins} Wins
                        </a>
                    </Card.Content>
                  </Card>
               </div>


               <div className="PlayerOne" >
                 <Card className="pCardImage">
                     <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                     <Card.Content>
                      <Card.Header>{firstName}</Card.Header>
                       <Card.Meta>
                          <span className='Suit'> Black Jack Player</span>
                       </Card.Meta>
                          <Card.Description> {tagLine} </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                          <a>
                           <Icon name='user' />
                              {playerWins} Wins
                           </a>
                       </Card.Content>
                   </Card>
               </div >
         </div>

         <div className="playingCardsContainer"> 
              <div className="playingCards">
              
                 <Card.Group itemsPerRow={4}>
                    { dealerCards.map( (card, i) => <Card key={i} raised image={card.image} alt={`card${i}`} id={`DealerCard${i}`}/> )}
                  </Card.Group>

                  <Card.Group itemsPerRow={4} >
                    { playerCards.map( (card, i) => <Card key={i} raised image={card.image} alt={`card${i}`} id={`playerCards${i}`}/> )}
                  </Card.Group> 

              </div>
          </div>

          <div className="buttonsContainer">
             <div className="Buttons">
                 <Button color="red" onClick={this.generateDeck}> Get New Deck </Button>
                 <Button color="yellow" onClick={this.hit}> Hit Me </Button>
                 <Button color="blue" onClick={this.dealerGetCard}> Hold </Button>
                 <Button color="green" onClick={this.dealCards}> Deal Game </Button> 
             </div> 
          </div>

      </div>    
 </div>
        
        );
    }
}


export default PlayCards;
