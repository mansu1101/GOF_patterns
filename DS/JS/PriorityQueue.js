function PriorityQueue() {
  let collection = [];

  this.printCollection = function () {
    console.log(collection);
  };

  this.enqueue = function (element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      let added = false;
      for(let i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element);
          added = true;
          return;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };

  this.dequeue = function () {
    let element = collection.shift();
    return element[0];
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

let pq = new PriorityQueue();
pq.enqueue(['Nitesh', 2]);
pq.enqueue(['Saril', 3]);
pq.enqueue(['Manish', 1]);
pq.printCollection();
console.log(pq.dequeue());
console.log(pq.front());
pq.printCollection();
