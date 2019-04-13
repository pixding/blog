## 主要内容
> #### Babel*是什么*？
> #### 怎么使用？
> #### 是如何工作的？
> #### Plugin和Preset介绍
> #### 初使化配置
> #### 配套工具的使用

### 1. Babel*是什么*？
如官方文档中描述的，它是一个工具链，主要用来将es2015+的代码转换为之前版本js或旧版本浏览器环境可执行的代码。以下是Babel可以为你做的事：
+ 语法转换 (如async/await, jsx等)
+ 通过 @babel/polyfill 给你的目标环境添加相应的polyfill。
+ 代码的转换和重构建
+ 更多（等你来发掘）

### 2. 怎么使用？
Babel提供 babel-cli 工具，用于命令行转码。安装命令如下：

  ```shell
  $ npm install --global babel-cli
  ```

当然，不推荐全局安装，避免项目对环境产生依赖。本地安装

  ```shell
  $ npm install --save-dev babel-cli
  ```

> **注意：** 此时在项目根目录下运行babel，还是会使用全局安装的babel-cli。

+ 方式一：直接指定路径

  //根目录下执行

  ```shell
  $ node ./node_modules/@babel/cli/bin/babel src/index.js -o dist/index.bundle.js
  ```
 
+ 方式二：修改package.json，
  
  ```javascript
  "devDependencies": {
    "@babel/cli": "7.2.0"
  },
  "scripts": {
    "babel": "babel src/index.js -o dist/index.bundle.js"
  }
  ```

  ```shell
  $ npm run babel   
  ```

+ 方式三：使用npx

  ```shell
  $ npx babel src/index.js -o dist/index.bundle.js
  ```

  npx需要依赖npm@5.2.0以上，它可以方便的使用项目内部安装的模块。[npx介绍](https://www.npmjs.com/package/npx)

### 3. 是如何工作的？
babel运行分为三个介段：解析、转换、生成
+ 解析，

<!-- 一些问题
 + babel.config.js、.babelrc优先级
 (@babel/parse，babel6使用) -->