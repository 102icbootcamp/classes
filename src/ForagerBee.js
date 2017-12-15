import Bee from './Bee'

// Create a ForagerBee class that has
// an `age` property that is set to 10
// a `job` property that is set to `find pollen`
// a `canFly` property that is set to true
// a `treasureChest` property that is set to an empty array
// `forage` method that allows the bee to add a `treasure` to the
//                                                 `treasureChest

// It has a super class of Grub and will inherit
// color from Bee
// `food` from Grub
// `eat` method from Grub

// Add a few 'treasure' to the treasureChest and check

class ForagerBee extends Bee {
  constructor() {
    super();
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];

  }
  forage(treasure) {
    this.treasureChest.push(treasure);
  }
};

export default ForagerBee;