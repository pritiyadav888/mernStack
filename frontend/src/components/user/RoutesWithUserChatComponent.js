import {Outlet} from 'react-router-dom';
import UserChatComponent from './UserChatComponents';
const RoutesWithUserChatComponent = () =>{
    return(
        <>
        <UserChatComponent/><Outlet/>
       </>
    );
   
    

}

export default RoutesWithUserChatComponent