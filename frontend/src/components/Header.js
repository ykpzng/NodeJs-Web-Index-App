import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

export default class Header extends Component {
  render() {
    const header = this.props.activeItem;

    return (
      <Card fluid color='black'
        header={header}
      />
    )
  }
}
