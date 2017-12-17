// Create a Grub class that has

// an `age` property that is set to 0'
// a `color` property that is set to `pink`
// a `food` property that is set to `jelly`
// has an `eat` method' which returns 'Mmmmmmmmm jelly'

class Grub {
  constructor () {
    this.age = 0;
    this.color = 'pink';
    this.food = 'jelly';
  }
  eat() {
    return 'Mmmmmmmmm jelly';
  }
};


// Create a Bee class 
// an `age` property that is set to `5`
// a `color` property that is set to `yellow`
// a `job` property that is set to `keep on growing`

// It has a super class of Grub and will inherit
// food` property from Grub super class 
// `eat` method from Grub super class

class Bee extends Grub {
  
};


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
  
};


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
  
};

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
  
};

