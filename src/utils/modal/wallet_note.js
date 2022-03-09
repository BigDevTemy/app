import {useState,useEffect} from 'react'
import React from 'react'
import '../../assets/css/Modal/modal.css'
import {IoClose} from 'react-icons/io5'
import QRcode from 'qrcode'
import { reactLocalStorage } from 'reactjs-localstorage'
import {CopyToClipboard} from 'react-copy-to-clipboard';
const Index = ({closeModal})=>{
    
    return (
        <div className="modalBackground">
            <div className='modalContainer'>
                <div className='modalHeader'>
                    <div className='modalText'>
                        <div className='receiveText'>
                            Wallet Notification
                        </div>
                        
                        <IoClose size={25} onClick={()=>{closeModal(false)}} />
                    </div>
                    
                    <div><hr/></div>
                </div>
                
                <div className='modalbody walletbody'>
                   Dear Customer<br/>
                   The wallet section of this application is currently under development.<br/>
                   Kindly link us up on whatsapp to trade.
                </div>
                <div className='modalFooter'>
                    
                </div>
                <div className='modalClose' >
                    <input type="submit" value="Close" onClick={()=>{closeModal(false)}}/>
                </div>
            </div>
        </div>
    )
}

export default Index;