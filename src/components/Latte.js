import React from 'react';
import { Card, Header } from 'semantic-ui-react'
import { Cards } from '../components/styles'

const Latte = () => (
  <div>
    <Header textAlign='center'> PUBLIK </Header>
    
    <Card.Group itemsPerRow={6}>
      <Cards> Latte </Cards>
      <Cards> Machiatto </Cards>
      <Cards> Mocha </Cards>
      <Cards> Cortado </Cards>
      <Cards> Flat White </Cards>
      <Cards> Capachino </Cards>
      <Cards> White Mocha </Cards>
      <Cards> HoneyBee </Cards>
      <Cards> Sparkling Limade </Cards>
      <Cards> Macha </Cards>
      <Cards> Americano </Cards>
      <Cards> Drip </Cards>
    </Card.Group>
  </div>
)

export default Latte;