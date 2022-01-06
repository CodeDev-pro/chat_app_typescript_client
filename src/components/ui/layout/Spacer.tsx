import React from 'react'
import * as CSS from 'csstype'

type SpacerProps = {
    height?: CSS.Property.Height,
    width?: CSS.Property.Width
}

const Spacer = ({ height, width }: SpacerProps) => {
    return (
        <div style={{ height, width }}>
            
        </div>
    )
}

export default Spacer
