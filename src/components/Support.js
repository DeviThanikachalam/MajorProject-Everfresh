import './Support.css'
import { ExternalLink } from 'react-external-link';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
function Support(){
    return(
            <div className='SupportBody'>
                <div className='supportContent'>
                    <h1>Let's get Connected!</h1>
                    <strong>
                    <p>We're happy to help you! Please reach us for more information</p>
                    </strong>
                </div>
                <div className='contactinfo'>
                    <div className='mailbox'>
                        <div>
                             <ExternalLink href='#'><MdEmail size={100}></MdEmail></ExternalLink>
                            <h1>Email</h1>
                            <p>Mail us for quick communication</p>
                            <p>everfreshplatform@gmail.com</p>
                        </div>
                    </div>
                    <div className='phonebox'>
                        <div>
                            <ExternalLink href='#'><FaPhoneAlt size={80}></FaPhoneAlt></ExternalLink>
                            <h1>Phone number</h1>
                            <p>Contact us for further details</p>
                            <p>+91 99430 21968</p>
                            <p>+91 94444 39022</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Support;