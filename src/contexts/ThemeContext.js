import React, { Component, createContext, useState } from 'react'

export const ThemeContext = createContext();
export class ThemeProvider extends Component {
    constructor(props) {
        super(props);
        this.state={isDarkMode: false}
    }
    
    render() {
        return (
            <ThemeContext.Provider value={{...this.state}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
};

export function ThemeProviderr(props) {
    const [isDarkMode, setisDarkMode] = useState(false)
    const toggleTheme = ()=>{
        setisDarkMode(!isDarkMode)
    }
    return (
        <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
