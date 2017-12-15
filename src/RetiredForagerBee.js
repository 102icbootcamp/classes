import ForagerBee from './ForagerBee';

// Create a RetiredForagerBee class that has
// an `age` property that is set to 40
// a `job` property that is set to `gamble`
// a `canFly` property that is set to false
// a `color` property that is set to 'grey'
// `forage` method that allows the bee to say
//       'I am too old, let me play cards instead'
// `gamble` method that allows the bee to always win and 
//                add a `treasure` to the `treasureChest
                                                 

// It has a super class of ForagerBee and will inherit
// `food` from Grub
// `eat` method from Grub
// `treasureChest` property from foragerBee

// Gamble a few times.



class RetiredForagerBee extends ForagerBee {
  constructor() {
    super();
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';

  }
  forage() {
    return 'I am too old, let me play cards instead';
  }
  gamble() {
    this.treasureChest.push('treasure');
  }
};

export default RetiredForagerBee;