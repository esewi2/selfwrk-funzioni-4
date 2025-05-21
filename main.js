
//selfwork-funzioni 4

function controlstring(stringa) {
    
    stringa = stringa.replace(/\w/g, '')

    let reversed = stringa.split('').reverse().join('');
    
    if (stringa == reversed) {
        
        return true

    }else {

        return false
    }
}

console.log(controlstring('i topi non avevano nipoti') );
 