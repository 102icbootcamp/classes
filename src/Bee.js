import Grub from './Grub'

// Create a Bee class 
// an `age` property that is set to `5`
// a `color` property that is set to `yellow`
// a `job` property that is set to `keep on growing`

// It has a super class of Grub and will inherit
// food` property from Grub super class 
// `eat` method from Grub super class

class Bee extends Grub {
  constructor () {
    super ();
    this.age = 5;
    this.color = 'yellow';
    this.job = 'Keep on growing';
  }
};
//
export default Bee;