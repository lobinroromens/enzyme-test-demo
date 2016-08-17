---
order: 0
title: 基本网站头部导航栏
---

只有主导航。

传入list属性list为数组渲染主导航用

````js
import React, {PropTypes} from 'react';
import { Navbar} from 'romens-ui';
import 'romens-ui/navbar/style';//按需加载style
const list=[
        {title:'进口设备',route:'dfsa'},
        {title:'手术器械',route:'hfs'},
        {title:'医疗辅助',route:'er'}，
        {title:'独家代理',route:'teg'},
        {title:'新品上市',route:'ddfds'},
        {title:'促销专区',route:'trhrt'},
        {title:'关于我们',route:'http://badiu.com',islink:true}
    ];
ReactDOM.render(
  <Navbar list={list} />,
  mountNode
);
````
