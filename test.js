function createObj(o) {
  function F(){}
  F.prototype = o;
  return new F();
}

var person = {
  name: 'kevin',
  friends: ['daisy', 'kelly']
}

var person1 = Object.create(person);
var person2 = Object.create(person);

person1.name = 'person1';
console.log(person2.name); // kevin

person1.friends.push('taylor');
console.log(person2.friends); // ["daisy", "kelly", "taylor"]