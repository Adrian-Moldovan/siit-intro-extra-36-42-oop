class Dice {

    constructor(diceSides){
        this.diceSides = diceSides;
    }


    //
    roll(){
        return Math.floor(Math.random() * this.diceSides) + 1;
    }
}