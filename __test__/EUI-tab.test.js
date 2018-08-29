import React, { Component } from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-14';
// import EmptyData from '../src/';
import { Tabs, TabPane } from '../src/index';

Enzyme.configure({ adapter: new Adapter() });

// test('EmptyData should render correctly', () => {   mount(<EmptyData />); });
// test('EmptyData props', () => {   // Render a checkbox with label in the
// document   const emptydata = shallow(<EmptyData className="test" />);
// expect(emptydata.find('.eui-empty-data-content')).toBeTruthy(); });

const callback = () => {};
class TabTester extends Component {
  render() {
    return (
      <div >
        <Tabs defaultActiveKey="3" onChange={callback}>
          <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
          <TabPane tab="选项卡2" key="2">选项卡二内容</TabPane>
          <TabPane tab="选项卡3" key="3">选项卡三内容</TabPane>
        </Tabs>
      </div>
    );
  }
}

export default TabTester;

describe('Tab', () => {
  it('render correctly', () => {
    // 检测是否正常渲染
    const wrapper = mount(<TabTester />);
    expect(wrapper.render()).toMatchSnapshot();
  });
  const wrapper = mount(<TabTester />);
  const item = wrapper
    .find('.eui-tabs-tab')
    .at(2);
  it('defaultActiveKey correctly', async () => {
    // 检测默认选项
    expect(wrapper.find('.eui-tabs-tabpane').text()).toEqual('选项卡三内容');

    // await endAni();
    // expect(wrapper.find('.eui-tabs-tabpane').text()).toEqual('选项卡三内容');
    // function endAni() {
    //   return new Promise((res, rej) => {
    //     setTimeout(() => {
    //       res();
    //     }, 100);
    //   });
    // }
  });
  it('change correctly', async () => {
    // 检测切换选项
    item.simulate('click');
    expect(item.hasClass('eui-tabs-tab-active')).toEqual(true);
    expect(wrapper.find('.eui-tabs-tabpane').at(0).text()).toEqual('选项卡三内容');
    // await endAni();
    // expect(item.hasClass('eui-tabs-tab-active')).toEqual(true);
    // expect(wrapper.find('.eui-tabs-tabpane').at(0).text()).toEqual('选项卡三内容');
    // function endAni() {
    //   return new Promise((res, rej) => {
    //     setTimeout(() => {
    //       res();
    //     }, 100);
    //   });
    // }
  });
});
