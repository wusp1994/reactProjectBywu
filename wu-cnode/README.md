
这是一个 以cNode为例的 react实战开发项目，项目中涉及到 React，Redux，antd 等 技术点的应用，是一个特别不错的 React  antd 的练手项目

## 技术栈
 createreactapp
 react
 redux 状态管理
 reactredux react与redux整合
 reduxthunk 异步更新redux
 reactrouterdom react路由
 axios ajax封装组件
 antd ui组件库（蚂蚁金服的）

## API接口
这里使用的是 cnodejs 官网给出的数据接口，接口文档地址：https://cnodejs.org/api

## 环境安装
>项目使用 [Create React App](https://github.com/facebook/createreactapp).创建

1. `npx createreactapp wucnode` 创建项目
2. `cd my_cnode` 进入目录
3. `npm i redux S` 安装redux
4. `npm i reactredux S` 安装redux
5. `npm i reduxthunk S` 安装中间件
6. `npm i reactrouterdom S` 安装react路由
7. `npm i axios S` 安装axios
8. `npm i antd S` 安装antd  

9. **按需加载antd**  
参考（ https://ant.design/docs/react/usewithcreatereactappcn#高级配置 )  
 >此时我们需要对 createreactapp 的默认配置进行自定义，这里我们使用  reactapprewired （一个对 createreactapp 进行自定义配置的社区解决方案）  
引入 reactapprewired 并修改 package.json 里的启动配置。由于新的 reactapprewired@2.x 版本的关系，你还需要安装 customizecra。
 `yarn add reactapprewired customizecra`
 修改package.json的启动配置  

  ```JSSON
  /* package.json */
  "scripts": {
     "start": "reactscripts start",
     "start": "reactapprewired start",
     "build": "reactscripts build",
     "build": "reactapprewired build",
     "test": "reactscripts test",
     "test": "reactapprewired test",
  }
  ```

 babelpluginimport 是一个用于按需加载组件代码和样式的 babel 插件（原理），现在我们尝试安装它并修改 configoverrides.js 文件。   
`yarn add babelpluginimport`
```js
 const { override, fixBabelImports } = require('customizecra');

 module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: 'css',
   }),
 );
```


然后在项目根目录创建一个 configoverrides.js 用于修改默认配置。  
 项目根目录创建configoverrides.js  
```js
module.exports = function override(config, env) {
  // do stuff with the webpack config...
  return config;
};
```  

## yarn的使用

**初始化一个新项目**

```sh
yarn init
```

**添加依赖包**
```sh
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```

**将依赖项添加到不同依赖项类别中**
```sh
yarn add [package] --dev
yarn add [package] --peer
yarn add [package] --optional
```
**升级依赖包**
```sh
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
```
**移除依赖包**
```sh
yarn remove [package]
```
**安装项目的全部依赖**
```sh
yarn
#或者
yarn install
```
