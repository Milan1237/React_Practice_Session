import service from "../appwrite/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/storeConfig";
function LogoutBtn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function logoutHandler(){
        service.logout().then(()=>{
             dispatch(logout())
             navigate("/");
        })
    }
    return ( <button onClick={logoutHandler} className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-ful">Logout</button>  )
}

export default LogoutBtn;