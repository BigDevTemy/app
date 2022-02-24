import {AiOutlineRise} from 'react-icons/ai'
import {AiOutlineFall} from 'react-icons/ai'
import {Button} from 'react-bootstrap'
import { useContext, useEffect, useState } from 'react'
import FetchNotification from '../../context/actions/getNotification'
import { reactLocalStorage } from 'reactjs-localstorage'
import {GlobalContext} from '../../context/Provider'
import Spinner from '../../assets/images/spinner.gif'
import empty from '../../assets/images/empty.png'
import Details from '../../utils/modal/notification_details'
import moment from 'moment'
import axios from 'axios'
import { IoCompassOutline } from 'react-icons/io5'
const Index = ()=>{

    const [notificationData,setnotificationData] = useState()
    const [modal,setmodal] = useState(false)
    const [userid,setuserid] = useState('')
    const [state, setState] = useState();
    const [myLoader, setmyLoader] = useState(true);
    const {getnotificationState:{getnotification:{loadingNotification},dataNotification,errorNotification}, getnotificationDispatch} = useContext(GlobalContext)
    const all_ids=[];
    // console.log('loader',loadingNotification);
    // console.log('dataNotificationwww',dataNotification);
    const Base_url = process.env.REACT_APP_BACKEND_URL;

    const updateRead =  async () =>{
      
        state.map((d)=>{
            all_ids.push(d._id)
        })

        
      
        await axios({
           method: "POST",
           url: `${Base_url}/threshold/update/read`,
           headers:{
               'Content-Type':'application/json',
               'Authorization':reactLocalStorage.get('token')
           },
           data:all_ids
       })
       .then((res)=>{
         
         
          console.log('notify',"Updated")
         
       })
       .catch((err)=>{
          
           console.log("err",err.response)
           
       })
   }

   const myNotification =  async () =>{

    const addressBTC = reactLocalStorage.getObject('user').btc_wallet[0].address;
    const addressUSDT = reactLocalStorage.getObject('user').usdt_wallet[0].address
    const Base_url = process.env.REACT_APP_BACKEND_URL;
    await axios({
            method: "POST",
            url: `${Base_url}/threshold/notification/fetch`,
            headers: {
            "Content-Type": "application/json",
            "Authorization":`Bearer ${reactLocalStorage.get('token')}`
            },
            data:JSON.stringify({addressBTC:addressBTC,addressUSDT:addressUSDT})
        })
        .then(res=>{
            setState(res.data)
            setmyLoader(false)

            // console.log('Best',res.data)
            // console.log('State',state.length)
    
        })
        .catch(err=>{
            console.log("err",err)
        })
    
  
    }


    useEffect(()=>{

        myNotification();
       
    },[])
    useEffect(()=>{
       state && updateRead();
    },[state])

    const handleModal =(id)=>{

        setuserid(id)
        setmodal(true);

    }   

    const _renderNotification =()=>{
        if(state && state.length > 0){
            // console.log(dataNotification)
            
            return state.map((d,index)=>{
               
                return (    
                        <div key={index} className="notifyDiv">
 
                            <div className='notify-flex-1'>
                                <div className={d.type === "2" ? 'red' : 'green'}>{d.type === "2" ? 'Withdrawal Alert': 'Deposit Alert'}</div>
                                <div className="notifyAmount">{d.asset} {d.amount} <span>{d.type === "2" ? <AiOutlineRise color={d.type === "2"? 'red':'green'} size={30}/> : <AiOutlineFall color={d.type === "2"? 'red':'green'} size={30}/>}</span> </div>
                                <small>{d.initiator === "sender" ? ` You have Initiated Transfer of ${d.amount}${d.asset} to ${d.to_address} Address `: `You have received a transfer of ${d.amount}${d.asset} from ${d.from_address} Address` }</small>
                                <div>{moment(d.updated).format("YYYY/MM/DD kk:mm:ss")}</div>
                            </div>
                            <div className='notify-flex-2'>
                            <Button onClick={()=>{setmodal(true);setuserid(d._id)}}>View Details</Button>
                            </div>

                        </div>
                    
                    
                        )
                   
           })
        }
        else{
            return   <div className='empty'>
                            <h1>EMPTY NOTIFICATION</h1>
                            <img src={empty}/>
                     </div>
        }
    }

    return (
        
            <div className="transaction">
                {modal && <Details closeModal={setmodal} userid={userid}/>}
                <div className='notifyTitle'>NOTIFICATION</div>
               {myLoader && <img src={Spinner}/>}
               {!myLoader && state && _renderNotification()}
               
                


                {/* <div className="notifyDiv">
                    <div className='notify-flex-1'>
                        <div style={{color:'green'}}>Deposit Alert</div>
                        <div className="notifyAmount">BTC 0.0005 <span><AiOutlineFall color='green' size={30} /></span> </div>
                        <small>You have received a  Transfer of 0.0005 BTC from yuyuinbjgnbngnnbbnbnbnbnb Address</small>
                    </div>
                    <div className='notify-flex-2'>
                       <Button>View Details</Button>
                    </div>
                     
                </div> */}
                
        </div>
        
    )
}

export default Index;