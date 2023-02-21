export const kwnowWhenPageReload = () =>{
    //EN typesScrip no exixte la propiedad type, pero si funciona ignorando la alerta
    const didReload:any = window.performance.getEntriesByType("navigation")[0]
    return didReload?.type;
}