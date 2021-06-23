
const User_Login_Request="User_Login_Request";
const User_Login_Success="User_Login_Success";
const User_Login_Failure="User_Login_Failure";


let getLogin=(user,history)=>{
    return async(dispatch,getState)=>{
        try{
            dispatch({type:User_Login_Request});
            var data = getState();
            console.log(data);
            // console.log("USER EMAIL",user.email);
            // console.log("SYSTEM DATA",data.user.username);
            if(user.email === data.user.username && user.password === data.user.password){
                console.log("successfully")
                dispatch({type:User_Login_Success});
                console.log(history);
                history.push("/employeeList");
            }
            else{
                console.log("Error");
            }
        }
        catch(err){
            dispatch({type:User_Login_Failure,payload:err})
        }

    }

}


export {User_Login_Request,getLogin,User_Login_Success,User_Login_Failure,}