import React from 'react'

import { Funnel } from 'simple-funnel-chart'
import 'simple-funnel-chart/dist/index.css'

const data = [
  { value: 100, name: 'Leads' },
  { value: 70, name: 'Calls' },
  { value: 50, name: 'Meetings' },
  { value: 10, name: 'Sales' }
];

const App = () => {
  return <Funnel
    data={data}
    width={250}
    hideLegend={false}
    rowHeight={20}
    onRowClick={(item) => alert(item.name + ' ' + item.value)}
    fontSize={'14px'}
    marginText={'-20px'}
  />
}

export default App
