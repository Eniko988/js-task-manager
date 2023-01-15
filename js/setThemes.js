

export const setTheme = (mode) =>{
    if(mode === 'light'){
        document.getElementById('theme-style').href ='../css/default.css';
    }
    if(mode === 'blue'){
        document.getElementById('theme-style').href ='../css/blue.css';
    }
    if(mode ==='green'){
        document.getElementById('theme-style').href = '../css/green.css'
    }
    if(mode ==='purple'){
        document.getElementById('theme-style').href = '../css/purple.css'
    }
}



