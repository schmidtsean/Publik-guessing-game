import React from 'react';
import { Card, Header, Divider, Image } from 'semantic-ui-react'
import { Cards } from './styles'
import MilesOrigin from './flips/MilesOrigin'
import MilesNotes from './flips/MilesNotes'
import BeekeeperOrigin from './flips/BeekeeperOrigin';
import BeekeeperNotes from './flips/BeekeeperNotes';
import CentralOrigin from './flips/CentralOrigin';
import CentralNotes from './flips/CentralNotes';
import DecafOrigin from './flips/DecafOrigin';
import DecafNotes from './flips/DecafNotes';
import NicaraguaOrigin from './flips/NicaraguaOrigin';
import NicaraguaNotes from './flips/NicaraguaNotes';
import GuatemalaOrigin from './flips/GuatemalaOrigin';
import GuatemalaNotes from './flips/GuatemalaNotes';
import ColumbiaOrigin from './flips/ColumbiaOrigin';
import ColumbiaNotes from './flips/ColumbiaNotes';
import SumatraOrigin from './flips/SumatraOrigin';
import SumatraNotes from './flips/SumatraNotes';
import Wood from '../img/Wood.jpg';

const CardList = () => {
   return (
     <div style={{backgroundImage: `${Wood}`}}>
       {/* background not working yet */}
      <Header textAlign='center'> PUBLIK </Header>
      
      <Card.Group itemsPerRow={4}>
        <Cards>
          <Card.Header><h1>MILES GOODYEAR CABIN</h1>  </Card.Header>
            <Card.Content> 
              <MilesOrigin/> 
              <Divider hidden/>
              <MilesNotes/> 
            </Card.Content> 
        </Cards>
        <Cards>
          <Card.Header><h1>BEEKEEPER</h1> <Divider hidden/>  </Card.Header>
            <Card.Content> 
              <BeekeeperOrigin/> 
              <Divider hidden/>
              <BeekeeperNotes/> 
            </Card.Content> 
        </Cards>
        <Cards>
          <Card.Header><h1>CENTRAL NINTH ESPRESSO</h1>  </Card.Header>
            <Card.Content> 
              <CentralOrigin/> 
              <Divider hidden/>
              <CentralNotes/> 
            </Card.Content> 
        </Cards>
        <Cards>
          <Card.Header><h1>MARMALADE DECAF</h1> <Divider hidden/> </Card.Header>
            <Card.Content> 
              <DecafOrigin/> 
              <Divider hidden/>
              <DecafNotes/> 
            </Card.Content> 
        </Cards>
        <Cards>
          <Card.Header><h1>NICARAGUA FINCA LA BENDICION</h1>  </Card.Header>
            <Card.Content> 
              <NicaraguaOrigin/> 
              <Divider hidden/>
              <NicaraguaNotes/> 
            </Card.Content> 
        </Cards>
        <Cards>
          <Card.Header><h1>GUATEMALA EL ZAPOTAL</h1>  </Card.Header>
            <Card.Content> 
              <GuatemalaOrigin/> 
              <Divider hidden/>
              <GuatemalaNotes/> 
            </Card.Content> 
        </Cards>
        <Cards>
          <Card.Header><h1>COLOMBIA FINCA SAN JOSE</h1>  </Card.Header>
            <Card.Content> 
              <ColumbiaOrigin/> 
              <Divider hidden/>
              <ColumbiaNotes/> 
            </Card.Content> 
        </Cards>
        <Cards>
          <Card.Header><h1>SUMATRA BENER MERIAH NANDHELING</h1>  </Card.Header>
            <Card.Content> 
              <SumatraOrigin/> 
              <Divider hidden/>
              <SumatraNotes/> 
            </Card.Content> 
        </Cards>

         
        
        
      </Card.Group>
    </div>
  )
}

export default CardList;