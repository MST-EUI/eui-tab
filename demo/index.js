import React from 'react';
import ReactDOM from 'react-dom';
import './demo.scss';
import { Tabs, TabPane } from '../src/index';
import Icon from '@mistong/eui-icon'; // eslint-disable-line
function callback() {
  // console.log(key);
}

class Demo extends React.Component {
  render() {
    return (
      <div className="demo">
        <div className="demo1">
          <Tabs defaultActiveKey="3" onChange={callback}>
            <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
            <TabPane tab="选项卡2" key="2">选项卡二内容</TabPane>
            <TabPane tab="选项卡3" key="3">选项卡三内容</TabPane>
          </Tabs>
          <div className="desc">
            defaultActiveKey 设置默认选项
            <br />
            onChange设置回调函数
          </div>
        </div>
        <div className="demo2">
          <Tabs defaultActiveKey="1">
            {/* disabled 禁用某一项 */}
            <TabPane tab="选项卡一" key="1">选项卡一</TabPane>
            <TabPane tab="选项卡二" disabled key="2">选项卡二</TabPane>
            <TabPane tab="选项卡三" key="3">选项卡三</TabPane>
          </Tabs>
          <div className="desc">
            disabled 禁用该项
          </div>
        </div>
        <div className="demo3">
          <Tabs defaultActiveKey="2">
            {/* 自定义tab卡标题 */}
            <TabPane
              tab={<span > <i className="iconfont icon-kefuyouxian" />选项卡一 </span>}
              key="1"
            >
              选项卡一
            </TabPane>
            <TabPane
              tab={<span > <i className="iconfont icon-tianmaopaidui" />选项卡二 </span>}
              key="2"
            >
              选项卡二
            </TabPane>
          </Tabs>
          <div className="desc">
            有图标的标签。
          </div>
        </div>
        <div className="demo4">
          <Tabs defaultActiveKey="1">
            {/* 可以左右滑动，容纳更多标签。   */}
            <TabPane tab="选项卡二选项卡二内容选项卡二内容内容" key="1">选项卡一</TabPane>
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

          <Icon type="error" />
          <i className="icon iconfont test">&#xe641;</i>
        </div>
        <div className="demo5">
          <Tabs onChange={callback} type="icon">
            {/* card提供另外样式 */}
            <TabPane
              tab={<div > <div className="tab_icon"><i className="iconfont icon-tianmaopaidui" /></div>选项卡二 </div>}
              key="1"
            >type icon
            </TabPane>
            <TabPane
              tab={<div > <div className="tab_icon"><i className="iconfont icon-tianmaopaidui" /></div>选项卡二 </div>}
              key="2"
            >选项卡二选项卡二内容选项卡二内容内容
            </TabPane>
            <TabPane
              tab={<div > <div className="tab_icon"><i className="iconfont icon-tianmaopaidui" /></div>选项卡二 </div>}
              key="3"
            >选项卡三内容
            </TabPane>
          </Tabs>
        </div>
        <div className="demo6">
          <Tabs onChange={callback} type="card">
            {/* card提供另外样式 */}
            <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
            <TabPane tab="选项卡二" key="2">选项卡二内容</TabPane>
            <TabPane tab="选项卡三" key="3">选项卡三内容</TabPane>
          </Tabs>
        </div>

      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('app'));
