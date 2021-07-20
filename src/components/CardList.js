import React from 'react';
import { Card, Header, Divider } from 'semantic-ui-react'
import { Cards, Head } from './styles'
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

const CardList = () => {
   return (
     <div>
      <Header textAlign='center' style={{width: '100%', fontSize: '50px', fontStyle: 'italic', fontFamily: 'Helvetica'}} > 
        PUBLIK GUESSING GAME
      </Header>
      
      <Card.Group itemsPerRow={4}>
        <Cards>
          <Card.Header><Head>MILES GOODYEAR CABIN</Head>  </Card.Header>
            <Card.Content> 
              <MilesOrigin/> 
              <Divider hidden/>
              <MilesNotes/> 
            </Card.Content> 
        </Cards>
        <Cards>
          <Card.Header><Head>BEEKEEPER</Head> <Divider hidden/>  </Card.Header>
            <Card.Content> 
              <BeekeeperOrigin/> 
              <Divider hidden/>
              <BeekeeperNotes/> 
            </Card.Content> 
        </Cards>
        <Cards>
          <Card.Header><Head>CENTRAL NINTH ESPRESSO</Head>  </Card.Header>
            <Card.Content> 
              <CentralOrigin/> 
              <Divider hidden/>
              <CentralNotes/> 
            </Card.Content> 
        </Cards>
        <Cards>
          <Card.Header><Head>MARMALADE DECAF</Head> <Divider hidden/> </Card.Header>
            <Card.Content> 
              <DecafOrigin/> 
              <Divider hidden/>
              <DecafNotes/> 
            </Card.Content> 
        </Cards>
        <Cards>
          <Card.Header><Head>NICARAGUA FINCA LA BENDICION</Head>  </Card.Header>
            <Card.Content> 
              <NicaraguaOrigin/> 
              <Divider hidden/>
              <NicaraguaNotes/> 
            </Card.Content> 
        </Cards>
        <Cards>
          <Card.Header><Head>GUATEMALA EL ZAPOTAL</Head>  </Card.Header>
            <Card.Content> 
              <GuatemalaOrigin/> 
              <Divider hidden/>
              <GuatemalaNotes/> 
            </Card.Content> 
        </Cards>
        <Cards>
          <Card.Header><Head>COLOMBIA FINCA SAN JOSE</Head>  </Card.Header>
            <Card.Content> 
              <ColumbiaOrigin/> 
              <Divider hidden/>
              <ColumbiaNotes/> 
            </Card.Content> 
        </Cards>
        <Cards>
          <Card.Header><Head>SUMATRA BENER MERIAH NANDHELING</Head>  </Card.Header>
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