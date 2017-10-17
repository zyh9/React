## react生命周期

### react组件

		在使用JSX的代码文件中，即使代码中并没有直接使用React，也一定要导入这个React ，
		
		import React,{Component} from 'react';
		
		这是因为JSX最终会被转译成依赖于React的表达式。

### JSX

		所谓JSX，是JavaScript的语法扩展（ extension ），让我们在JavaScript中可以编写像HTML一样的代码。
		
		React判断一个元素是HTML元素还是React组件的原则就是看第一个字母是否大写，
		在JSX中，如果组件名字我们不用'Component'而是用'component'，那就得不到我们想要的结果。

### npm run eject

		这个eject（弹射）命令做的事情，就是把潜藏在react-scripts中的一系列技术栈配置都"弹射"到应用的顶层，
		然后我们就可以研究这些配置细节了，而且可以更灵活地定制应用的配置。
		
		eject命令是不可逆的，所以，当你执行eject之前，最好做一下备份。

### Virtual DOM

		既然DOM树是对HTML的抽象，那Virtual DOM就是对DOM树的抽象。Virutal DOM不会触及浏览器的部分，
		只是存在于JavaScript空间的树形结构，每次自上而下渲染React组件时，
		会对比这一次产生的Virtual DOM和上一次渲染的Virtual DOM，
		对比就会发现差别，然后修改真正的DOM树时就只需要触及差别中的部分就行。

### react优点

		React利用函数式编程的思维来解决用户界面渲染的问题，最大的优势是开发者的效率会大大提高，
		开发出来的代码可维护性和可阅读性也大大增强。

### 组件的划分要满足高内聚和低耦合的原则

	高内聚指的是把逻辑紧密相关的内容放在一个组件中。用户界面无外乎内容、交互行为和样式。
	低耦合指的是不同组件之间的依赖关系要尽量弱化，也就是每个组件要尽量独立。

### prop
		React组件的prop所能支持的类型则丰富得多，除了字符串，可以是任何一种JavaScript 语言支持的数据类型。
		
		当prop的类型不是字符串类型时，在JSX中必须用花括号{ }把prop值包住，
		所以style的值有两层花括号，外层花括号代表是JSX的语法，内层的花括号代表这是一个对象常量。

### PropTypes

		PropTypes是react提供的数据验证，判断外部世界是否正确地使用了组件的属性
		如果不是会在控制台输出错误信息，方面快速定位错误

### state

		state初始化:
		
			this.state = {
				// 数据
			}
		
		
		读取和更新state:
		
			this.setState({
				// 数据
			})

### prop和state的区别

		prop用于定义外部接口， state用于记录内部状态
		
		prop的赋值在外部世界使用组件时， state的赋值在组件内部
		
		组件不应该改变prop的值，而state存在的目的就是让组件来改变的

### UI = render(data)

		React组件扮演的是render函数的角色，应该是一个没有副作用的纯函数。
		修改props的值， 是一个副作用，组件应该避免。

