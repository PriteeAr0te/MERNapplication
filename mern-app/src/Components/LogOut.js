import React, {useEffect} from 'react';
// useContext
import { useNavigate } from 'react-router-dom';
// import { UserContext } from '../App';

const LogOut = () => {
    
// const {state, dispatch} = useContext(UserContext);
// const [userName, setUserName] = useState('');
// const [showName, setShowName] = useState(false);
const navigate = useNavigate();
useEffect(() =>{
    fetch('/logout', {
        method:"GET",
        headers :{
            Accept:"application/json",
            "Content-Type" : "application/json",
        },
        credentials:"include",
    }).then((res)=>{
        // dispatch({type:"USER", payload:false});
        navigate('/login', {replace: true})
        // setUserName(''); // Reset userName to empty string
        // setShowName(false);
        if(res.status !== 200){
            const error = new Error(res.error);
            throw error;
        }
    }).catch((err) =>{
        console.log(err);
    })
}, []);
// dispatch, navigate


  return (
    <div>
      <h1>LogOut Page</h1>
    </div>
  )
}

export default LogOut;
