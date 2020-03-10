# emitter(emit/on)发布订阅模式

"发布/订阅模式"（publish-subscribe pattern），又称"观察者模式"（observer pattern）。

```javascript
const Emitter = {
	on: (eventName, handler) => {
		if (!this.handlers) this.handlers = {};
		if (!this.handlers[eventName])
			this.handlers[eventName] = [];

		this.handlers[eventName].push(handler);
	},

	emit: (eventName, ...data) => {
		if (!this.handlers[eventName])
			return;

		for (const handler of this.handlers[eventName])
			handler(...data);
	}
}
```


# Mixin设计模式

 Mixin 指的是多个对象合成一个新的对象，新对象具有各个组成成员的接口。

```javascript
const Emitter = {
	on: (eventName, handler) => {
		if (!this.handlers) this.handlers = {};
		if (!this.handlers[eventName])
			this.handlers[eventName] = [];

		this.handlers[eventName].push(handler);
	},

	emit: (eventName, ...data) => {
		if (!this.handlers[eventName])
			return;

		for (const handler of this.handlers[eventName])
			handler(...data);
	}
}

let test = {
	hello: () => {
        console.log('hello world');
	}
}

class Menu {
  choose(value) {
    this.emit("select", value);
  }
  
  private handlers: {[eventName: string]: Array<Function>} = {};
  on: (eventName, handler) => void;
  emit: (eventName, ...data) => void;
  hello: () => void;
}


//Object.assign(Menu.prototype, Emitter);
//Object.assign(Menu.prototype, test);

function mixins(target: any, ...list: any[]) {
    /*
    for (let m of list) {
        Object.assign(target.prototype, m);
    }
    */
    list.forEach(m => {
        Object.assign(target.prototype, m);
    });
}

mixins(Menu, Emitter, test);

let menu = new Menu();

menu.on("select", value => console.log(`Value selected: ${value}`));

menu.choose("123");
menu.hello();
```