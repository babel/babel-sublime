
// components/EmailInput.jsx

import React from 'react';
import { InputsMixin } from './Forms';

export default React.createClass({

  mixins: [InputsMixin],

  submit() {
    var {email, question} = this.state;
    request
      .post(`${API_BASE}/askform`)
      .send({email, question})
      .end((err, res) =>
        this.setState({isValid: !err}));
  },

  render() {
    var {email} = this.state;
    return (
      <div {...this.props}>
        <input
          value={email}
          onChange={this.onChange}
          onClick={this.onClick}
          required />
      </div>
    );
  }
});

// With ES7+ Property Initializers

export class Counter extends React.Component {
  static propTypes = { initialCount: React.PropTypes.number };
  static defaultProps = { initialCount: 0 };
  static childContextTypes = () => {
    return {
      app: React.PropTypes.instanceOf(App).isRequired
    }
  };
  getChildContext = makeGetChildContext();
  state = { count: this.props.initialCount };
  tick() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div onClick={this.tick.bind(this)}>
        Clicks: {this.state.count}
      </div>
    );
  }
}
