import React, { Component } from 'react'
import { Button, Divider, Transition, Card } from 'semantic-ui-react'

export default class SumatraNotes extends Component {
  state = { visible: true }

  toggleVisibility = () =>
    this.setState((prevState) => ({ visible: !prevState.visible }))

  render() {
    const { visible } = this.state

    return (
      <div>
        <Button
          content={visible ? 'Show Tasting Notes' : 'Hide Tasting Notes'}
          onClick={this.toggleVisibility}
        />
        <Divider hidden />
        <Transition visible={!visible} animation='scale' duration={500}>
          <Card> Herbal, Shredded Wheat, Dates </Card>
        </Transition>
      </div>
    )
  }
}