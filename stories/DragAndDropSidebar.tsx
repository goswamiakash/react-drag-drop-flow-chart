import * as React from 'react'
import styled from 'styled-components'
import { FlowChartWithState } from '../src'
import { Content, Page, Sidebar, SidebarItem } from './components'
import { chartSimple } from './misc/exampleChartState'
// import RouterIcon from '@mui/icons-material/Router';
// // import SwitchIcon from '@mui/icons-material/Switch';
// import SecurityIcon from '@mui/icons-material/Security';
// import StorageIcon from '@mui/icons-material/Storage';

const Message = styled.div`
margin: 10px;
padding: 10px;
background: rgba(0,0,0,0.05);
`

const routerImage = 'https://picsum.photos/40?random=1';
const switchImage = 'https://picsum.photos/40?random=2';
const firewallImage = 'https://picsum.photos/40?random=3';
const serverImage = 'https://picsum.photos/40?random=4';

export const DragAndDropSidebar = () => (
 <Page>
    <Content>
      <FlowChartWithState initialValue={chartSimple} />
    </Content>
    <Sidebar>
      <Message>Drag and drop these network elements onto the canvas.</Message>

      <SidebarItem
        type="router"
        imageSrc={routerImage}

        ports={{
          port1: { id: 'port1', type: 'left', properties: { custom: 'property' } },
          port2: { id: 'port2', type: 'right', properties: { custom: 'property' } },
        }}
        properties={{ custom: 'router' }}
      />

      <SidebarItem
        type="switch"
        imageSrc={switchImage}
      
        ports={{
          port1: { id: 'port1', type: 'left', properties: { custom: 'property' } },
          port2: { id: 'port2', type: 'right', properties: { custom: 'property' } },
          port3: { id: 'port3', type: 'top', properties: { custom: 'property' } },
          port4: { id: 'port4', type: 'bottom', properties: { custom: 'property' } },
        }}
        properties={{ custom: 'switch' }}
      />

      <SidebarItem
        type="firewall"
        imageSrc={firewallImage}

        ports={{
          port1: { id: 'port1', type: 'left', properties: { custom: 'property' } },
          port2: { id: 'port2', type: 'right', properties: { custom: 'property' } },
        }}
        properties={{ custom: 'firewall' }}
      />

      <SidebarItem
        type="server"
        imageSrc={serverImage}

        ports={{
          port1: { id: 'port1', type: 'top', properties: { custom: 'property' } },
          port2: { id: 'port2', type: 'bottom', properties: { custom: 'property' } },
        }}
        properties={{ custom: 'server' }}
      />
    </Sidebar>
  </Page>
)
