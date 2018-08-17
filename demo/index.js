import React from 'react';
import ReactDOM from 'react-dom';
import './demo.scss';
import { Tabs, TabPane } from '../src/tabs';

function callback() {
  // console.log(key);
}

class Demo extends React.Component {
  render() {
    return (
      <div className="demo">
        <div>hellp tabs1</div>
        <Tabs defaultActiveKey="1" onChange={callback}>
          {/* defaultActiveKey 默认选项 onChange回调 */}
          <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
          <TabPane tab="选项卡2" key="2"><div style={{ textAlign: 'center' }}>aaaaaaaaaa</div></TabPane>
          <TabPane tab="选项卡3" key="3"><div style={{ textAlign: 'center' }}>aaaaaaaaaa</div></TabPane>
          {/* <TabPane tab="选项卡二" key="2">选项卡二内容</TabPane>
          <TabPane tab="选项卡三" key="3">选项卡三内容</TabPane> */}
        </Tabs>
        <hr />
        <Tabs defaultActiveKey="1">
          {/* disabled 禁用某一项 */}
          <TabPane tab="选项卡一" key="1">选项卡一</TabPane>
          <TabPane tab="选项卡二" disabled key="2">选项卡二</TabPane>
          <TabPane tab="选项卡三" key="3">选项卡三</TabPane>
        </Tabs>
        <hr />
        <Tabs defaultActiveKey="2">
          {/* 自定义tab卡标题 */}
          <TabPane tab={<span > 选项卡一 </span>} key="1">
            选项卡一
          </TabPane>
          <TabPane tab={<span > 选项卡二 </span>} key="2">
            选项卡二
          </TabPane>
        </Tabs>
        <hr />
        <Tabs defaultActiveKey="1">
          {/* 可以左右滑动，容纳更多标签。   */}
          <TabPane tab="选项一" key="1">选项卡一</TabPane>
          <TabPane tab="选项二" key="2">选项卡二</TabPane>
          <TabPane tab="选项三" key="3">选项卡三</TabPane>
          <TabPane tab="选项四" key="4">选项卡四</TabPane>
          <TabPane tab="选项五" key="5">选项卡五</TabPane>
          <TabPane tab="选项六" key="6">选项卡六</TabPane>
          <TabPane tab="选项七" key="7">选项卡七</TabPane>
          <TabPane tab="选项八" key="8">选项卡八</TabPane>
          <TabPane tab="选项九" key="9">选项卡九</TabPane>
          <TabPane tab="选项一" key="10">选项卡一</TabPane>
          <TabPane tab="选项二" key="22">选项卡二</TabPane>
          <TabPane tab="选项三" key="33">选项卡三</TabPane>
          <TabPane tab="选项四" key="44">选项卡四</TabPane>
          <TabPane tab="选项五" key="55">选项卡五</TabPane>
          <TabPane tab="选项六" key="66">选项卡六</TabPane>
          <TabPane tab="选项七" key="77">选项卡七</TabPane>
          <TabPane tab="选项八" key="86">选项卡八</TabPane>
          <TabPane tab="选项九" key="95">选项卡九</TabPane>

        </Tabs>
        <hr />
        <Tabs tabPosition="top">
          {/* tabPosition 调整页签位置 */}
          <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
          <TabPane tab="选项卡二" key="2">选项卡二内容</TabPane>
          <TabPane tab="选项卡三" key="3">选项卡三内容</TabPane>
        </Tabs>
        <hr />
        <Tabs tabBarExtraContent={<button > 额外功能 </button>}>
          {/* 可以再tab旁边增加额外功能 */}
          <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
          <TabPane tab="选项卡二" key="2">选项卡二内容</TabPane>
          <TabPane tab="选项卡三" key="3">选项卡三内容</TabPane>
        </Tabs>
        <hr />
        <Tabs defaultActiveKey="2" size="small">
          {/* size调整大小 */}
          <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
          <TabPane tab="选项卡二" key="2">选项卡二内容</TabPane>
          <TabPane tab="选项卡三" key="3">选项卡三内容</TabPane>
        </Tabs>
        <Tabs onChange={callback} type="card" destroyInactiveTabPane>
          {/* card提供另外样式 */}
          <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
          <TabPane tab="选项卡二" key="2">选项卡二内容</TabPane>
          <TabPane tab="选项卡三" key="3">选项卡三内容</TabPane>
        </Tabs>

      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('app'));
