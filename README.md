## react

### react组件

		在使用JSX的代码文件中，即使代码中并没有直接使用React，也一定要导入这个React ，
		
		import React,{Component} from 'react';
		
		这是因为JSX最终会被转译成依赖于React的表达式。

### JSX

		所谓JSX，是JavaScript的语法扩展，让我们在JavaScript中可以编写像HTML一样的代码。
		
		React判断一个元素是HTML元素还是React组件的原则就是看第一个字母是否大写，
		在JSX中，如果组件名字我们不用'Component'而是用'component'，那就得不到我们想要的结果。

### npm run eject

		这个eject（弹射）命令做的事情，就是把潜藏在react-scripts中的一系列技术栈配置都"弹射"到应用的顶层，
		然后我们就可以研究这些配置细节了，而且可以更灵活地定制应用的配置。
		
		eject命令是不可逆的，所以，当你执行eject之前，最好做一下备份。

### Virtual DOM

		既然DOM树是对HTML的抽象，那Virtual DOM就是对DOM树的抽象。
		Virutal DOM不会触及浏览器的部分，只是存在于JavaScript空间的树形结构，
		每次自上而下渲染React组件时，会对比这一次产生的Virtual DOM和上一次渲染的Virtual DOM，
		对比就会发现差别，然后修改真正的DOM树时就只需要触及差别中的部分就行。

### react优点

		React利用函数式编程的思维来解决用户界面渲染的问题，
		最大的优势是开发者的效率会大大提高，
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
		
		首先，定义类的propTypes属性，无疑是要占用一些代码空间，而且propTypes检查也是要消耗CPU计算资源的
		其次，在产品环境下做propTypes检查没有什么帮助，毕竟propTypes产生的这些错误信息只有开发者才能看得懂
		
		开发者在代码中定义propTypes，避免在开发过程中犯错，在发布产品代码时，用一种自动的方式将propTypes去掉，
		现有的babel-react-optimize就具有这个功能，可以通过npm安装，但是应该确保只在发布产品代码时使用它

### 父子级数据传递

		从父组件传递给子组件数据的方式是通过this.props来进行接收的

### 父子级组件通信

		当数据发生变化的时候把子组件的内容传递给父组件，让父组件修改自己的数据

### 单向数据流
  			
      	父组件的数据流向子组件是单向的，父级的数据只能父级修改，子级不允许修改

### 受控组件

		只要是表单元素加了默认值为受限组件，默认值是根据状态来修改的，只要状态不改那么里面的值就不会变。
      	
      	<input>  <textarea>  <select>
      	
      	只要是更改表单元素可以通用onChange
      	
		受限组件如何解决？
		
			1.绑onChange事件
			
			2.defaultValue/defaultChecked

###	ref

		方便我们在当前组件下快速获取某个组件或者元素
			
			读：
    			console.log(this.head)
    		
			写:
    			<header ref = {(elem)=>{this.head = elem}}></header>
    		
			注意：
     			如果没在当前组件上设置ref（跨组件），那么获取的值为undefined

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

### react生命周期

		constructor(props, context)
		
			要创造一个组件类的实例，当然会调用对应的构造函数。
		
		componentWillMount() // 装载之前
		
			在组件挂载之前调用一次。如果在这个函数里面调用setState，
			本次的render函数可以看到更新后的state，并且只渲染一次。
		
		ReactElement render()
		
			render函数应该是一个纯函数，完全根据this.state和this.props来决定返回的结果，
			而且不要产生任何副作用。在render函数中去调用this.setState毫无疑问是错误的，
			因为一个纯函数不应该引起状态的改变。
		
		componentDidMount() // 装载之后
		
			componentWilIMount和componentDidMount这对兄弟函数还有一个区别，
			就是componentWillMount可以在服务器端被调用，也可以在浏览器端被调用；
			而componentDidMount只能在浏览器端被调用，在服务器端使用React的时候不会被调用。
			在componentDidMount被调用的时候，组件已经被装载到DOM树上了，可以放心获取渲染出来的任何DOM。
		
		componentWillReceiveProps(nextProps) // 组件参数更新
		
			只要是父组件的render函数被调用，在render函数里面被谊染的子组件就会经历更新过程，
			不管父组件传给子组件的props有没有改变，都会触发子组件的componentWillReceiveProps函数。
			注意，通过this.setState方法触发的更新过程不会调用这个函数。
		
		shouldComponentUpdate(nextProps, nextState) // 是否停止更新
		
			组件挂载之后，每次调用setState后都会调用shouldComponentUpdate判断是否需要重新渲染组件。
			默认返回true，接下来调用render函数。反之，如果得到一个false，
			那就立刻停止更新过程，也就不会引发后续的渲染了。
			在比较复杂的应用里，有一些数据的改变并不影响界面展示，可以在这里做判断，优化渲染效率。
			
			说render函数重要，是因为render函数决定了该渲染什么，
			而说shouldComponentUpdate函数重要，是因为它决定了一个组件什么时候不需要渲染。
		
		componentWillUpdate(nextProps, nextState) // 更新之前
		
			shouldComponentUpdate返回true或者调用forceUpdate之后，componentWillUpdate会被调用。
		
		componentDidUpdate() // 更新之后
		
			除了首次render之后调用componentDidMount，其它render结束之后都是调用componentDidUpdate。
			componentDidUpdate函数，并不是只在浏览器端才执行的，
			无论更新过程发生在服务器端还是浏览器端，该函数都会被调用。
		
		componentWillUnmount() // 卸载之前
		
			当React组件要从DOM树上删除掉之前，对应的componentWillUnmount函数会被调用，
			所以这个函数适合做一些清理性的工作。

> 整体流程

		当组件第一次被渲染的时候，依次调用的函数是
		
			constructor
			
			componentWillMount
			
			render
			
			componentDidMount
			
		更新过程会依次调用下面的生命周期函数，并不是所有的更新过程都会执行全部函数
		
			componentWillReceiveProps
			
			shouldComponentUpdate
			
			componentWillUpdate
			
			render
			
			componentDidUpdate
			
		组件的卸载过程只涉及一个函数
		
			componentWillUnmount

### less的使用

		使用create-react-app创建的项目默认不支持less，以下增加less配置的步骤
		
		1.暴露配置文件
		
			create-react-app生成的项目文，看不到webpack相关的配置文件，需要先暴露出来，使用如下命令即可：
		
			npm run eject
			
		2.安装less-loader和less
		
			npm install less-loader less --save-dev
			
		3.修改webpack配置
		
			修改 webpack.config.dev.js 和 webpack.config.prod.js 配置文件
		
			改动1：
			
				/\.css$/ 改为 /\.(css|less)$/，修改后如下：
				
				exclude: [
				  /\.html$/,
				  /\.(js|jsx)$/,
				  /\.(css|less)$/,
				  /\.json$/,
				  /\.bmp$/,
				  /\.gif$/,
				  /\.jpe?g$/,
				  /\.png$/,
				],
			
			改动2：
			
				test: /\.css$/ 改为 /\.(css|less)$/
				test: /\.css$/ 的 use 数组配置增加 less-loader
				修改后如下：
				{
				  test: /\.(css|less)$/,
				  use: [
				    require.resolve('style-loader'),
				    {
				      loader: require.resolve('css-loader'),
				      options: {
				        importLoaders: 1,
				      },
				    },
				    {
				      loader: require.resolve('postcss-loader'),
				      options: {
				        // Necessary for external CSS imports to work
				        // https://github.com/facebookincubator/create-react-app/issues/2677
				        ident: 'postcss',
				        plugins: () => [
				          require('postcss-flexbugs-fixes'),
				          autoprefixer({
				            browsers: [
				              '>1%',
				              'last 4 versions',
				              'Firefox ESR',
				              'not ie < 9', // React doesn't support IE8 anyway
				            ],
				            flexbox: 'no-2009',
				          }),
				        ],
				      },
				    },
				    {
				      loader: require.resolve('less-loader') // compiles Less to CSS
				    }
				  ],
				},

[segmentfault文章链接，请点我](https://segmentfault.com/a/1190000010162614)

### react-swipe的使用

		import React,{Component} from 'react';
		import ReactSwipe from 'react-swipe';
		class Slider extends Component{
		    constructor(){
		        super();
		        this.state = {
		            index:0
		        }
		    }
		    render(){
		        let opt = {
		            auto:1600,
		            //每隔多少毫秒运动一次
		            callback:(index) => {
		                this.setState({
		                    index: index
		                })
		                //console.log(index)
		            }
		        }
		        return(
		            <div className="slider">
		                <ReactSwipe  swipeOptions={opt}>
		                    <img src="1.jpg" alt="img"/>
		                    <img src="2.jpg" alt="img"/>
		                    <img src="3.jpg" alt="img"/>
		                </ReactSwipe>
		                <div className="zSwitch">
		                    <span className={this.state.index === 0 ? 'active':''}></span>
		                    <span className={this.state.index === 1 ? 'active':''}></span>
		                    <span className={this.state.index === 2 ? 'active':''}></span>
		                </div>
		            </div>
		        )
		    }
		    //测试下是否引入
		    componentDidMount() {
		        //console.log(ReactSwipe)
		    }
		}
		export default Slider;

### 关于react引入图片

> 1.通过import的方法

		import imgURL from '../image/xxx.png';
		
		<img src={imgURL} />

> 2.通过require的方法

		<img src={require('../image/xxx.png')}>
		
		需要注意： 以上两种方式存在弊端：
		
			1.require只可以写字符串，不可以写变量
			
			2.只适用于图片较少的方式，如果图片是存在一个json文件中管理的话，推荐使用以下方法：

> 3.使用 require.context 的方法： 

		第一步：通过 require.context从存放图片的文件夹中引入所有文件
		
			const imgURL = require.context('../image',true,/^\.\/.*\.png$/)
		
			require.context的参数，第一个参数是图片存放的相对路径地址
			
			第二个参数是是否查找子文件夹，第三个参数是匹配图片的正则表达式
		
		第二步：
		
			const imgs = imgURL.keys().map(imgURL);
		
		第三步：
		
			循环遍历这个存放所有图片的数组，判断json中的图片名称是否与之匹配
			
			如果匹配成功，则将图片地址赋值给img的src

```javascript
	let img = '';
	imgs.forEach(function(e){
	   if(e.indexOf(json.img) > 0){
	     img = e;
	   }
	  });
	
	<img src={img} />
```
