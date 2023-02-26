export const verifyIsEmail = (email: string)=>{

    const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if( email.match(regexEmail) ){
        
        return{
            msg: 'This is a valid email.',
            success: true
        }

    }else{
        
        return{
            msg: 'This is not a valid email.',
            success: false
        }
        
    }

}