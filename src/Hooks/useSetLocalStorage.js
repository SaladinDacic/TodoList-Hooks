import {useState, useEffect} from 'react'

function useSetLocalStorage(key, initialData) {
    const [state, setState] = useState(JSON.parse(window.localStorage.getItem(key)) || initialData);
    try{
        useEffect(() => {
            window.localStorage.setItem(key, JSON.stringify(state));
        },[state]);
    }catch(e){
        setState(initialData)
    }
    return [state, setState]
}

export default useSetLocalStorage
