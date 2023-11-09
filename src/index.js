import React from 'react'
import FunnelChart from './FunnelChart'

export const Funnel = ({ data, width, hideLegend, rowHeight, onRowClick, fontSize, marginText }) => {
  return <FunnelChart
    data={data}
    width={width}
    hideLegend={hideLegend}
    rowHeight={rowHeight}
    onRowClick={onRowClick}
    fontSize={fontSize}
    marginText={marginText}
  />
}
