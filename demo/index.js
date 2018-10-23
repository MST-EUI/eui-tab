/*
* annotation like `placeholder begin *** and
* placeholder end ***` is required for generate eui manual, please keep it
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Code, Demo } from '@mistong/eui';

/* placeholder begin eui style */
import '@mistong/eui/dist/index.css';
/* placeholder end eui style */

/* placeholder begin src */
import { Tabs, TabPane } from '../src';
/* placeholder end src */

import './index.scss';

function callback() {
  // console.log(key);
}

/* placeholder begin class */
class DemoComponent extends React.Component {
  render() {
    const demo1 = `import React, {Component} from 'react';
import { Tab } from '@mistong/eui';

const { Tabs, TabPane } = Tab;
const  callback = () => {};

class demo1 extends Component {
    render() {
        return (
            <div className="demo1">
                <Tabs defaultActiveKey="3" onChange={callback}>
                    <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
                    <TabPane tab="选项卡2" key="2">选项卡二内容</TabPane>
                    <TabPane tab="选项卡3" key="3">选项卡三内容</TabPane>
                </Tabs>
                <div className="desc">
                    defaultActiveKey 设置默认选项
                    <br/>
                    onChange设置回调函数
                </div>
            </div>
        );
    }
}

export default demo1;
`;
    const demo2 = `import React, {Component} from 'react';
import { Tab } from '@mistong/eui';

const { Tabs, TabPane } = Tab;

function callback() {}

class demo2 extends Component {
    render() {
        return (
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
        );
    }
}

export default demo2;
`;

    const demo3 = `import React, {Component} from 'react';
import { Tab } from '@mistong/eui';

const { Tabs, TabPane } = Tab;
function callback() {}

class demo2 extends Component {
    render() {
        return (
            <div className="demo3">
                <Tabs defaultActiveKey="2">
                    <TabPane
                        tab={(
                        <span>
                            <i className="iconfont icon-kefuyouxian"/>选项卡一
                        </span>
                    )}
                        key="1">
                        选项卡一
                    </TabPane>
                    <TabPane
                        tab={(
                        <span>
                            <i className="iconfont icon-tianmaopaidui"/>选项卡二
                        </span>
                    )}
                        key="2">
                        选项卡二
                    </TabPane>
                </Tabs>

            </div>
        );
    }
}

export default demo2;
`;
    const demo4 = `import React, {Component} from 'react';
import { Tab } from '@mistong/eui';

const { Tabs, TabPane } = Tab;
function callback() {}

class demo4 extends Component {
    render() {
        return (

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

                <Icon type="error"/>
                <i className="icon iconfont test">&#xe641;</i>
            </div>
        );
    }
}

export default demo4;
`;
    const demo5 = `import React, {Component} from 'react';
import { Tab } from '@mistong/eui';

const { Tabs, TabPane } = Tab;
function callback() {}

class demo2 extends Component {
    render() {
        return (

            <div className="demo5">
                <Tabs onChange={callback} type="icon">
                    {/* card提供另外样式 */}
                    <TabPane
                        tab={(
                        <div>
                            <div className="tab_icon"><i className="iconfont icon-tianmaopaidui"/></div>
                            选项卡二
                        </div>
                    )}
                        key="1">type icon
                    </TabPane>
                    <TabPane
                        tab={(
                        <div>
                            <div className="tab_icon"><i className="iconfont icon-tianmaopaidui"/></div>
                            选项卡二
                        </div>
                    )}
                        key="2">选项卡二选项卡二内容选项卡二内容内容
                    </TabPane>
                    <TabPane
                        tab={(
                        <div>
                            <div className="tab_icon"><i className="iconfont icon-tianmaopaidui"/></div>
                            选项卡二
                        </div>
                    )}
                        key="3">选项卡三内容
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default demo2;`;

    const demo6 = `import React, {Component} from 'react';
import { Tab } from '@mistong/eui';

const { Tabs, TabPane } = Tab;
function callback() {}

class demo2 extends Component {
    render() {
        return (
            <div className="demo6">
            <Tabs onChange={callback} type="card">
              {/* card提供另外样式 */}
              <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
              <TabPane tab="选项卡二" key="2">选项卡二内容</TabPane>
              <TabPane tab="选项卡三" key="3">选项卡三内容</TabPane>
            </Tabs>
          </div>
        );
    }
}

export default demo2;
`;
    return (
      <Demo className="eui-tab-demo">
        <h2>Tabs 选项卡</h2>
        <p>选项卡切换组件。</p>
        <h3>何时使用</h3>
        <p>提供平级的区域将大块内容进行收纳和展现，保持界面整洁。</p>
        <h3>代码演示</h3>
        <Code sourceCode={demo1} buttonText="Demo1演示回调和默认Tab">
          <div className="demo1">
            <Tabs defaultActiveKey="3" onChange={callback}>
              <TabPane tab="选项卡一" key="1"><br /><br />选项卡一内容<br />选项卡一内容<br />选项卡一内容<br />选项卡一内容<br /><br /><br /></TabPane>
              <TabPane tab="选项卡2" key="2"><br /><br />选项卡二内容<br />选项卡二内容<br />选项卡二内容<br />选项卡二内容<br /><br /><br /></TabPane>
              <TabPane tab="选项卡3" key="3"><br /><br />选项卡三内容<br />选项卡三内容<br />选项卡三内容<br />选项卡三内容<br /><br /><br /></TabPane>
            </Tabs>
          </div>
        </Code>
        <Code sourceCode={demo2} buttonText="Demo2演示disabled">
          <div className="demo2">
            <Tabs defaultActiveKey="1">
              <TabPane tab="选项卡一" key="1"><br /><br />选项卡一内容<br />选项卡一内容<br />选项卡一内容<br />选项卡一内容<br /><br /><br /></TabPane>
              <TabPane tab="选项卡2" disabled key="2"><br /><br />选项卡二内容<br />选项卡二内容<br />选项卡二内容<br />选项卡二内容<br /><br /><br /></TabPane>
              <TabPane tab="选项卡3" key="3"><br /><br />选项卡三内容<br />选项卡三内容<br />选项卡三内容<br />选项卡三内容<br /><br /><br /></TabPane>
            </Tabs>
          </div>
        </Code>
        <Code sourceCode={demo3} buttonText="带图标的选项卡">
          <div className="demo3">
            <Tabs defaultActiveKey="2">
              <TabPane
                tab={(
                  <span>
                    <i className="iconfont icon-kefuyouxian" />选项卡一
                  </span>
              )}
                key="1"
              >
                <br /><br />选项卡一内容<br />选项卡一内容<br />选项卡一内容<br />选项卡一内容<br /><br /><br />
              </TabPane>
              <TabPane
                tab={(
                  <span>
                    <i className="iconfont icon-tianmaopaidui" />选项卡二
                  </span>
              )}
                key="2"
              >
                <br /><br />选项卡二内容<br />选项卡二内容<br />选项卡二内容<br />选项卡二内容<br /><br /><br />
              </TabPane>
            </Tabs>
          </div>
        </Code>
        <Code sourceCode={demo4} buttonText="可滑动选项卡">
          <div className="demo4">
            <Tabs defaultActiveKey="1">
              {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(item => <TabPane tab={`选项${item}`} key={item}><br /><br />选项卡{item}<br /><br />选项卡{item}<br /><br /></TabPane>)
              }
            </Tabs>
          </div>
        </Code>
        <Code sourceCode={demo5} buttonText="带图标的选项卡">
          <div className="demo5">
            <Tabs onChange={callback} type="icon">
              {/* card提供另外样式 */}
              <TabPane
                tab={(
                  <div>
                    <div className="tab_icon"><i className="iconfont icon-tianmaopaidui" /></div>
                  选项卡二
                  </div>
              )}
                key="1"
              >
                <br /><br />选项卡1<br /><br />选项卡1<br /><br />
              </TabPane>
              <TabPane
                tab={(
                  <div>
                    <div className="tab_icon"><i className="iconfont icon-tianmaopaidui" /></div>
                  选项卡二
                  </div>
              )}
                key="2"
              >
                <br /><br />选项卡2<br /><br />选项卡2<br /><br />
              </TabPane>
              <TabPane
                tab={(
                  <div>
                    <div className="tab_icon"><i className="iconfont icon-tianmaopaidui" /></div>
                  选项卡二
                  </div>
              )}
                key="3"
              >
                <br /><br />选项卡3<br /><br />选项卡3<br /><br />
              </TabPane>
            </Tabs>
          </div>
        </Code>
        <Code sourceCode={demo6} buttonText="卡片式选项卡">
          <div className="demo6">
            <Tabs onChange={callback} type="card">
              {/* card提供另外样式 */}
              <TabPane tab="选项卡一" key="1"><br /><br />选项卡1<br /><br />选项卡1<br /><br /></TabPane>
              <TabPane tab="选项卡二" key="2"><br /><br />选项卡2<br /><br />选项卡2<br /><br /></TabPane>
              <TabPane tab="选项卡三" key="3"><br /><br />选项卡3<br /><br />选项卡3<br /><br /></TabPane>
            </Tabs>
          </div>
        </Code>
        <h3>API</h3>
        <table>
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>activeKey</td>
              <td>当前激活选项key 背景图片类型
              </td>
              <td>(<Code mode="inline">String</Code>
                )
              </td>
              <td>
                <Code mode="inline">null</Code>
              </td>
            </tr>
            <tr>
              <td>defaultActiveKey</td>
              <td>设置默认选项(first active tabPane key )</td>
              <td>(<Code mode="inline">String</Code>
                )
              </td>
              <td>
                <Code mode="inline">null</Code>
              </td>

            </tr>
            <tr>
              <td>onChange</td>
              <td>切换回调</td>
              <td>function</td>
              <td />
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用该选项
              </td>
              <td>Boolean</td>
              <td>
                <Code mode="inline">false</Code>
              </td>
            </tr>
            <tr>
              <td>tabBarExtraContent</td>
              <td>额外的元素 在tab右侧</td>
              <td>React Node</td>
              <td>
                <Code mode="inline">null</Code>
              </td>
            </tr>
            <tr>
              <td>type</td>
              <td>line、card 选项卡模式 是否选择卡片模式</td>
              <td>String</td>
              <td>
                <Code mode="inline">line</Code>
              </td>
            </tr>

          </tbody>
        </table>
      </Demo>
    );
  }
}

/* placeholder end class */

/* placeholder begin ReactDOM */
ReactDOM.render(<DemoComponent />, document.getElementById('app'));
/* placeholder end ReactDOM */
