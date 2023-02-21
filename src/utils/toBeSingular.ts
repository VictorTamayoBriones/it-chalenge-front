export const toBeSingular = (word: string) =>{
    const parseWord = word?.split(' ')[0];

    const newWord = parseWord?.split('').map((letter:string, i:number) => {
        if( i === parseWord.length -1 && letter === 's'){
            return ''
        }
        return letter
    }).join().replaceAll(',', '');
    
    return newWord
}