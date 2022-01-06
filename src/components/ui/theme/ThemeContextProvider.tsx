import React, { createContext } from 'react'
import { theme, Theme } from './Theme'

type ThemeContextProps = {
    children: React.ReactNode
}

export const ThemeContext = createContext<Theme>(theme)

const ThemeContextProvider = ({ children }: ThemeContextProps) => {
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
