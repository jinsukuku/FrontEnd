//// Test: Node(), LinkedList()
let ll = new LinkedList();
console.log('š let ll = new LinkedList()');
console.log(ll);

ll.head = new Node(123);
ll.length++;
console.log('š ll.head = new Node(123)');
console.log('š ll.length++');
console.log(ll);

ll.head.next = new Node(456);
ll.length++;
console.log('š ll.head = new Node(456)');
console.log('š ll.length++');
console.log(ll);
console.log('\n\n ------------ \n\n');

//// Test : isEmpty(), append(), printNode(), size()
console.log('š ll.isEmpty() :', ll.isEmpty());
console.log('\nš ll.append() ģ ')
ll.printNode();
console.log('\nll.size() :',ll.size());

console.log('\nš ll.append(1)');
ll.append(1);
ll.printNode();
console.log('\nll.size() :',ll.size());

console.log('\nš ll.append(10)');
ll.append(10);
ll.printNode();
console.log('\nll.size() :',ll.size());

console.log('\nš ll.append(100)');
ll.append(100);
ll.printNode();
console.log('\nll.size() :',ll.size());
console.log('\n\n------------ \n\n');

//// Test : insert()
console.log('š ll.insert(value) ģ ');
ll.printNode();
console.log('\nll.size() :',ll.size());

console.log('\nš ll.insert(2)');
ll.insert(2);
ll.printNode();
console.log('\nll.size() :',ll.size());

console.log('\nš ll.insert(20)');
ll.insert(20);
ll.printNode();
console.log('\nll.size() :',ll.size());

console.log('\nš ll.insert(200)');
ll.insert(200);
ll.printNode();
console.log('\nll.size() :',ll.size());

console.log('\nš ll.insert(222,1)');
ll.insert(222,1);
ll.printNode();
console.log('\nll.size() :',ll.size());

console.log('\nš ll.insert(333,3)');
ll.insert(333,3);
ll.printNode();
console.log('\nll.size() :',ll.size());
console.log('\n\n------------ \n\n');

//// Test : remove()
console.log('š ll.remove(99999) ģ¤ķ ź²°ź³¼');
console.log(ll.remove(99999));
ll.printNode();
console.log('\nll.size() :',ll.size());

console.log('\nš ll.remove(1) ģ¤ķ ź²°ź³¼');
console.log(ll.remove(1));
ll.printNode();
console.log('\nll.size() :',ll.size());

console.log('\nš ll.remove(2) ģ¤ķ ź²°ź³¼');
console.log(ll.remove(2));
ll.printNode();
console.log('\nll.size() :',ll.size());
console.log('\n\n------------ \n\n');

//// Test : removeAt()
console.log('š ll.removeAt(99999)');
console.log(ll.removeAt(99999));
ll.printNode();
console.log('\nll.size() :',ll.size());

console.log('\nš ll.removeAt(4)');
console.log(ll.removeAt(4));
ll.printNode();
console.log('\nll.size() :',ll.size());

console.log('\nš ll.removeAt(1)');
console.log(ll.removeAt(1));
ll.printNode();
console.log('\nll.size() :',ll.size());

console.log('\nš ll.removeAt()');
console.log(ll.removeAt());
ll.printNode();
console.log('\nll.size() :',ll.size());
console.log('\n\n------------ \n\n');

//// Test : indexOf()
console.log('š ll.indexOf(99999)');
ll.printNode();
console.log('\nll.indexOf(99999) :',ll.indexOf(99999));

console.log('\nš ll.indexOf(10)');
ll.printNode();
console.log('\nll.indexOf(100) :',ll.indexOf(10));

console.log('\nš ll.indexOf(100)');
ll.printNode();
console.log('\nll.indexOf(100) :',ll.indexOf(100));
console.log('\n\n------------ \n\n');

//// Test : remove2()
console.log('š ll.remove2(99999)');
console.log(ll.remove2(99999));
ll.printNode();
console.log('\nll.size() :',ll.size());

console.log('\nš ll.remove2(20)');
console.log(ll.remove2(20));
ll.printNode();
console.log('\nll.size() :',ll.size());

console.log('\nš ll.remove2(10) ');
console.log(ll.remove2(10));
ll.printNode();
console.log('\nll.size() :',ll.size());