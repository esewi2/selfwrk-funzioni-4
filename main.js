
//selfwork-funzioni 4

function controlString(stringa) {
    
    stringa = stringa.replace(/\W/g, "")

    let reversed = stringa.split('').reverse().join('');
    
    if (stringa == reversed) {
        
        return true

    }else {

        return false
    }
}

console.log(controlString('i topi non avevano nipoti') );
 