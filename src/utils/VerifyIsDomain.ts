export const verifyIsDomain = (domain: string)=>{

    const regexDomain = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/

    if( domain.match(regexDomain) ){
        
        return{
            msg: 'This is a valid domain',
            success: true
        }

    }else{
        
        return{
            msg: 'This is not a valid domain',
            success: false
        }
        
    }

}