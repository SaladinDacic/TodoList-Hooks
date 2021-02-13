import React,{useState, createContext} from 'react';

export const LanguageContext = createContext();

export function LanguageProvider(props) {
    const [language, setlanguage] = useState("Bosnian");
    const changeLang = ()=>{
        setlanguage(()=>{
            if(language === "Bosnian"){
                return "English"
            }else{
                return "Bosnian"
            }
        })
    }
    return (
        <LanguageContext.Provider value={{language, changeLang}}>
            {props.children}
        </LanguageContext.Provider>
    )
}

export const withLanguageContext = Component => props => {
    return (
        <LanguageContext.Consumer>
            {value=> <Component languageContext={value} {...props}/>}
        </LanguageContext.Consumer>
    )
}
