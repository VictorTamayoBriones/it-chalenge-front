export const toCapitalizefirstLetter = (word:string)=>{
    let newWord = word?.split('').map((letter, i)=>{
        
        if( i === 0 ){
            
            return letter.toUpperCase()
        }
        return letter
        
    }).join().replaceAll(',','').replaceAll('_', ' ')
    
    return newWord
}