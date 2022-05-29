class TurtlePlayer {

    constructor(playerName, playerLuckyNumber){
        this.name = playerName;
        this.luckyNumber = playerLuckyNumber;
        this.score = 0;
    }


    move(squares){
        console.log('');
        console.log(this.name + ' moves ' + squares + ' squares...');
        this.score += squares;
        console.log(this.name + ' has now ' + this.score + ' points!');

        if(this.luckyNumber === squares){
            this.bonusMove();
        }
    }


    bonusMove(){
        const bonusMove = 6;
        console.log(this.name + ' gets a bonus move of ' + bonusMove + ' squares!!!');
        this.score += bonusMove;
        console.log(this.name + ' has now ' + this.score + ' points!');
    }
}