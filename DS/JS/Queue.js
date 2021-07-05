function Queue() {
  let collection = [];

  this.printCollection = function () {
    console.log(collection);
  };

  this.enqueue = function (element) {
    collection.push(element);
  };

  this.dequeue = function () {
    return collection.shift();
  };

  this.isEmpty = function () {
    return !collection.length;
  };

  this.front = function () {
    return collection[0];
  };

  this.size = function () {
    return collection.length;
  };
}

let q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.printCollection();
console.log(q.dequeue());
console.log(q.front());
q.printCollection();
