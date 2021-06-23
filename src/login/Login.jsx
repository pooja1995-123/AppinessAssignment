import React,{useState} from "react";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getLogin} from "../redux/user/user.actions";


const Login = ()=>{
    const dispatch = useDispatch();
    const history=useHistory();
    // console.log(".....",history);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    var user ={email,password};
    
    let submitHandler=(e)=>{
         console.log(email+" "+password);
   
        e.preventDefault();
    
        if (!email) {
            alert("Email required");
          } 
          else if (!password) 
          {
            alert("Password required");
        }
        dispatch(getLogin(user,history));
    }
    return (<>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <section>
                    <div className="card mt-5">
                        <div className="card-header bg-warning">
                            <h1>Login Form</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={submitHandler}>
                            <div className="form-group">
                            <input className="form-control" placeholder="Email" type="email" name="email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
                            
                            </div>
                            <div className="form-group">
                                <input className="form-control mt-3" placeholder="Password" type="password" name="password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <input className="form-control btn btn-primary mt-3" type="submit" value="LOGIN"/>
                            </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
    </>);
}
export default Login;