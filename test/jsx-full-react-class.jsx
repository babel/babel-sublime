
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
