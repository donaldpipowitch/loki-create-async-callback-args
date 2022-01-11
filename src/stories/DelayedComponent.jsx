import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class DelayedComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { done: false };
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ done: true });
      if (this.props.onDone) {
        this.props.onDone();
      }
    }, this.props.delay);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return <div>{this.state.done ? this.props.text : 'Loading…'}</div>;
  }
}

DelayedComponent.propTypes = {
  text: PropTypes.string,
  delay: PropTypes.number,
  onDone: PropTypes.func,
};

DelayedComponent.defaultProps = {
  text: 'Done!',
  delay: 1000,
  onDone: null,
};
