import {GET_NOTIFICATION_ERROR,GET_NOTIFICATION_SUCCESS,GET_NOTIFICATION_LOADING} from '../../constants/actionTypes'


const getNotification = (state,{payload,type})=>{
    
    switch(type){
        
        case GET_NOTIFICATION_SUCCESS:
            return {
                ...state,
                getnotification:{
                    ...state.getnotification,
                    loadingNotification:false,
                },
                errorNotification:null,
                dataNotification:payload,
            }
        
            case GET_NOTIFICATION_ERROR:
                return {
                    ...state,
                    getnotification:{
                        ...state.getnotification,
                        errorNotification:null,
                        dataNotification:payload,
                        loadingNotification:false,
                    }
                   
            }
            case GET_NOTIFICATION_LOADING:
                return {
                    ...state,
                    getnotification:{
                        ...state.getnotification,
                        loadingNotification:true,
                    },
                    errorNotification:null,
                    dataNotification:null,
                }
            
        default :
        return state;
    }

};

export default getNotification;