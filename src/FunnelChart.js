import React from 'react';
import styles from "./styles.module.css";

export default function FunnelChart({ data, width, hideLegend, rowHeight, onRowClick, fontSize, marginText }) {
    if (!rowHeight)
        rowHeight = 20;
    if (!width)
        width = 500;
    if (!fontSize)
        fontSize = '14px';
    if (!marginText)
        marginText = '-20px';
    const colors = ['#8D91CB', '#69D5D1', '#F59C9A', '#FFD670', '#91CBB0', '#D0B4E8', '#94DCF5'];
    return (
        <div className={styles.funnel_outer} style={{ width: width }}>
            <ul>
                {data.map(function (item, i) {
                    const rowWidth = i === 0 ? '100%' : (item.value / data[0].value * 100) + '%';
                    let pPosition = ((width / 2 + (width / 100 * rowWidth.replace('%', '')) / 2) + 5) + 'px';
                    let colorIndex = i;
                    while (colorIndex > (colors.length - 1))
                        colorIndex = colorIndex - colors.length;
                    return (<li key={i} style={{ height: rowHeight }} onClick={() => { if (onRowClick) onRowClick(item) }}>
                        <span title={item.name + ": " + item.value} style={{ borderTopWidth: rowHeight, borderTopColor: colors[colorIndex], width: rowWidth }}>
                            {!hideLegend && <p style={{ marginTop: marginText, left: pPosition }}>{item.name + ": " + item.value}</p>}
                        </span>
                    </li>)
                })}
            </ul>
        </div >
    );
}