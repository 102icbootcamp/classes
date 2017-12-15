import Bee from './Bee'

// Create a HoneyMakerBee Class 
// age property that is set to `10`
// job property that is set to `make honey`
// `honeyPot` property that is set to `0`
// `makeHoney` method that adds `1` to the honeyPot
// `giveHoney` method that subtracts `1` from the honeyPot

// It has a super class of Bee and will inherit
// color property from Bee
// food property from Grub
// eat method that from Grub

class HoneyMakerBee extends Bee{
  constructor() {
    super();
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }
  makeHoney() {
    this.honeyPot++;
  }
  giveHoney() {
    this.honeyPot--;
  }
};

export default HoneyMakerBee;