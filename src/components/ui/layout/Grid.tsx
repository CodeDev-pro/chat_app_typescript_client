import React from 'react'
import * as CSS from 'csstype'
import { DefaultTheme, makeStyles } from '@mui/styles'

type GridOwnProps = {
    children?: React.ReactNode,
}

type GridContainerProps = GridOwnProps & {
    container?: boolean,
    item?: never,
    autofit?: boolean,
    lg?: number,
    sm?: number,
    xs?: number,
    xl?: number,
    rowGap?: CSS.Property.RowGap,
    columnGap?: CSS.Property.ColumnGap,
}

type GridItemProps = GridOwnProps & {
    container?: never,
    item?: boolean,
    rowSpan?: CSS.Property.GridRow,
    columnSpan?: CSS.Property.GridColumn,
}

type GridProps = GridContainerProps | GridItemProps 

const useContainerStyles = makeStyles<DefaultTheme, GridContainerProps>({
    root: {
        display: 'grid',
        gridTemplateColumns: ({autofit}) => 'repeat(2, 1fr)',
        columnGap: (props) => props.columnGap,
        rowGap: ({rowGap}) => rowGap,
        width: '100%',
        gridAutoRows: 'fit-content'
    }
})

const useItemStyles = makeStyles<DefaultTheme, GridItemProps>({
    root: {
        rowSpan: ({ rowSpan }) => rowSpan
    }
})

const Grid = (props: GridProps) => {
    
    const container = useContainerStyles(props as GridContainerProps)
    const item = useItemStyles(props as GridItemProps)
    return (
        <div className={props.item ? item.root: container.root}>
            {props.children}            
        </div>
    )
}

export default Grid
