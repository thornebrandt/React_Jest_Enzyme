// Link.react.js
import React from 'react';

const STATUS = {
  NORMAL: 'normal',
  HOVERED: 'hovered',
};

let Link = React.createClass({
  getInitialState(){
    return {
      class: STATUS.NORMAL
    }
  },

  _onMouseEnter() {
    this.setState({class: STATUS.HOVERED});
  },

  _onMouseLeave() {
    this.setState({class: STATUS.NORMAL});
  },

  render() {
    return (
      <a
        className={this.state.class}
        href={this.props.page || '#'}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}>
        {this.props.children}
      </a>
    );
  }
});

module.exports = Link;