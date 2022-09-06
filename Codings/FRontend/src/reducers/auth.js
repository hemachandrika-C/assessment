import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAILURE,
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_FAILURE,
    LOG_OUT,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAILURE,
    PASSWORD_RESET_CONFIRM_SUCCESS,
    PASSWORD_RESET_CONFIRM_FAILURE,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAILURE

}from '../actions/types'

const initialState ={
    access:localStorage.getItem('access'),
    refresh:localStorage.getItem('refresh'),
    isAuthenticated:null,
    user:null,

}
export default function(state=initialState,action){
    const {type,payload} =action

    switch(type){
        case LOGIN_SUCCESS:
            localStorage.setItem('access',payload.access)
            return{
                ...state,
                isAuthenticated:true,
                access:payload.access,
                refresh:payload.refresh              

            }

        case LOGIN_FAIL:
        case SIGNUP_FAILURE:
        case LOG_OUT:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh')
                return{
                    ...state,
                    access:null,
                    refresh:null,
                    isAuthenticated:false,
                    user:null
                    
                }

        case LOAD_USER_SUCCESS:
             return{
                 ...state,
                 user:payload

             }

        
        case LOAD_USER_FAILURE:
                return{
                    ...state,
                    user:null
   
                }

        case AUTHENTICATION_SUCCESS:
                 return{
                     ...state,
                     isAuthenticated:true
                 }
        
        case AUTHENTICATION_FAILURE:
                    return{
                        ...state,
                        isAuthenticated:false
                    }

        
        case  PASSWORD_RESET_SUCCESS:            
        case  PASSWORD_RESET_FAILURE:
        case  PASSWORD_RESET_CONFIRM_SUCCESS:
        case  PASSWORD_RESET_CONFIRM_FAILURE:
        case  ACTIVATION_SUCCESS:
        case  ACTIVATION_FAILURE:
                return{
                    ...state
                }


        case SIGNUP_SUCCESS:
              return{
                  ...state,
                  isAuthenticated:false
              }
        
        default:
            return state
    }
}
