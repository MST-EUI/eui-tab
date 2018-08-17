import RcTabs from 'rc-tabs';

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import 'rc-tabs/assets/index.css';
import './style/index.scss';

const { TabPane } = RcTabs;

class Tabs extends Component {
  static defaultProps = {
    prefixCls: 'eui-tabs',
    animation: 'slide-horizontal',
    type: 'line', // or 'card' 'editable-card'
    onChange() {},
    onEdit() {},
    hideAdd: false,
  }

  render() {
    const { prefixCls, type } = this.props;
    const { children } = this.props;
    const className = classNames({
      [`${prefixCls}-${type}`]: true,
    });
    return (
      <RcTabs
        {...this.props}
        className={className}
      >
        {children}

      </RcTabs>
    );
  }
}
Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  prefixCls: PropTypes.string,
  animation: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  onEdit: PropTypes.func,
  hideAdd: PropTypes.bool,
};
export { Tabs, TabPane };
