function createuser(name,occ){
  this.name=name;
  this.occ=occ;
}

let user1 = new createuser('Satya','SE');
let user2 = new createuser('satya1','PL');

console.log(user1);
console.log(user2);

console.log(user1.name);
console.log(user1.occ);
