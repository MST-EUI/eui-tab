# eui-tab

eui tab component 

## Usage
```js

import React from 'react';
import ReactDOM from 'react-dom';
import { Tabs, TabPane }  from 'eui-tab';
function callback(key) {
   console.log(key);
}

ReactDOM.render(
      <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="tab1" key="1">tab1 content</TabPane>
            <TabPane tab="tab2" key="2">tab2content</TabPane>
            <TabPane tab="tab3" key="3">tab3 content</TabPane>
      </Tabs>,
    document.getElementById('app')
);
```
## API
Tabs
keys | type |default | description
---|---|---|---
activeKey|String|null|当前激活选项key
defaultActiveKey|String|first active tabPane key | 设置默认选项
onChange|function( key:String) :void|切换回调
disabled | Boolean| false|是否禁用该选项
tabBarExtraContent|React Node||额外的元素 在tab右侧

type|line、card|line |选项卡模式 是否选择卡片模式

TabPane
keys | type |default | description
---|---|---|---
key|Object||当前激活key 唯一
tab |React.Node或者String| null |tab选项标题显示内容








