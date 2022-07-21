import SellBTCLayout from '../../layout/SellBTCLayout'
import '../../assets/css/settings/profile.css'
import WelcomeNote from '../../layout/BodyLayout/WelcomeNote';
import Footer from '.././../layout/BodyLayout/Footer'
const Index =({openClose,trigger,settrigger})=>{
    
    return (
        <div className={openClose ? 'bodyOpen':'bodyClose'}>
            
            <SellBTCLayout manageTrigger={settrigger} realTrigger={trigger}/>

        </div>
    )
}

export default Index;