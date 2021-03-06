import {MdOutlineSecurity} from 'react-icons/md'

import QRcode from 'qrcode'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { reactLocalStorage } from 'reactjs-localstorage';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast,ToastContainer } from 'react-toastify'

import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const Index = ({Next,close})=>{
    const history = useHistory();
    const closeButton = ()=>{
        close(false);
        reactLocalStorage.remove('user');
        reactLocalStorage.remove('token');
        reactLocalStorage.remove('kyc');
        history.push('/client/login')
      
    }
  
    return(
        <div>
            
            <div className='welcome2fa-section slide-right'>
                 
                <p>
                    Congratulations!..The 2FA activation process was successful.
                </p>
                <p>
                    Going Forward, you will need your Authenticator as used for the activation to login to your profile.
                </p>
            </div>
            <div className='TabInput SubmitModal mt-4' onClick={closeButton}>
                    FINALIZE SETUP
            </div>

            
        </div>
    )
}
export default Index;