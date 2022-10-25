import { useState,useEffect } from 'react'

const validateTheme = () =>{
    const saveTheme = JSON.parse(localStorage.getItem('items'));
    if (saveTheme) {
        if(saveTheme==="light"){
            document.body.dataset.theme = "light"
            return saveTheme
        }else{
            document.body.dataset.theme = "dark"
            return saveTheme   
        }
        
    }else{
        document.body.dataset.theme = "dark"
        return "dark"
    }
}

export default function ThemeButton() {
//el estado de theme se creo dinamico con funcion que nos valida si ya hay un estado guardado en localstore
    const [theme, settheme] = useState(validateTheme()) 


    //cambia cuando estado se modifica se guarda localstore y cambia el theme del body
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(theme));
        document.body.dataset.theme = theme
      }, [theme]);


      //evento cambiar de modo
    const handleToggle = () => {
	    const newTheme = theme === "dark" ? "light" : "dark"
	    settheme(newTheme)

    }

    return (
        <>
            <button className="themeBtn" onClick={handleToggle}>
                {theme=== "dark" ? <span>light</span> : <span>dark</span>}
            </button>
        </>
    )
}