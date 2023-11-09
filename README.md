# simple-funnel-chart

> Simple Funnel Chart on React

[![NPM](https://img.shields.io/npm/v/simple-funnel-chart.svg)](https://www.npmjs.com/package/simple-funnel-chart) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save simple-funnel-chart
```

## Usage

```jsx
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
```

## License

MIT © [nekiyl1](https://github.com/nekiyl1)
