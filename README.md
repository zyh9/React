## react生命周期

### react组件

		在使用JSX 的代码文件中，即使代码中并没有直接使用React ，也一定要导人这个React ，
		
		import React,{Component} from 'react';
		
		这是因为JSX 最终会被转译成依赖于React 的表达式。
		
### JSX

		所谓JSX，是JavaScript的语法扩展（ extension ），让我们在JavaScript中可以编写像HTML一样的代码。
		
		React判断一个元素是HTML元素还是React组件的原则就是看第一个字母是否大写，
		在JSX中，如果组件名字我们不用'Component'而是用'component'，那就得不到我们想要的结果。

### npm run eject

		这个eject（弹射）命令做的事情，就是把潜藏在react-scripts中的一系列技术栈配置都“弹射”到应用的顶层，
		然后我们就可以研究这些配置细节了，而且可以更灵活地定制应用的配置。
		
		eject命令是不可逆的，所以，当你执行eject 之前，最好做一下备份。

### Virtual DOM

		既然DOM树是对HTML的抽象，那Virtual DOM就是对DOM树的抽象。Virutal DOM不会触及浏览器的部分，
		只是存在于JavaScript空间的树形结构，每次自上而下渲染React组件时，
		会对比这一次产生的Virtual DOM和上一次渲染的Virtual DOM，
		对比就会发现差别，然后修改真正的DOM 树时就只需要触及差别中的部分就行。

### react优点

		React利用函数式编程的思维来解决用户界面渲染的问题，最大的优势是开发者的效率会大大提高，
		开发出来的代码可维护性和可阅读性也大大增强。

###