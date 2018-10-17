### 原型链继承

  function Parent () {
      this.name = 'kevin';
  }
  Parent.prototype.getName = function () {
      console.log(this.name);
  }
  function Child () {

  }
  Child.prototype = new Parent(); //共享了所有实例，且不能传参
  var child1 = new Child();
  console.log(child1.getName()) // kevin

### 借用构造函数(经典继承)
利用call apply来实现继承。

  function Parent () {
      this.names = ['kevin', 'daisy'];
  }
  function Child () {
      Parent.call(this); //此处可以传参  Parent.call(this,name);
  }
  var child1 = new Child();
  child1.names.push('yayu');
  console.log(child1.names); // ["kevin", "daisy", "yayu"]
  var child2 = new Child();
  console.log(child2.names); // ["kevin", "daisy"]

缺点：方法都在构造函数中定义，每次创建实例都会创建一遍方法。父类原型方法没有办法继承

### 组合继承

  function Parent (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
  }
  Parent.prototype.getName = function () {
    console.log(this.name)
  }
  function Child (name, age) {
    Parent.call(this, name);
    this.age = age;
  }
  Child.prototype = new Parent();
  Child.prototype.constructor = Child;

### 原型式继承

  function createObj(o) {
    function F(){}
    F.prototype = o;
    return new F();
 }

 ES6：Object.create (https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

### 组合寄生继承

  function Parent (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
  }
  Parent.prototype.getName = function () {
    console.log(this.name)
  }
  function Child (name, age) {
    Parent.call(this, name);
    this.age = age;
  }
  var F = function(){};
  F.prototype = Parent.prototype;
  F.prototype.constructor = Child;
  Child.prototype = new F();

