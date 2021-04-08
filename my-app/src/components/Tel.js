
function handleClicktel(tel){
    const regexTel = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
    
    return `window.open(tel:${tel})`;
}

export default handleClicktel;