import {Route, Redirect} from 'react-router-dom';



function ProtectedRoute({component: Component,isAuth:isAuth, ...rest}){
    if (isAuth)  {
        return <Component {...rest} />
    }


    return (
    <Route {...rest} render={(props)=>{
    //     // console.log(isAuth);
    //     if (isAuth){
    //         return <component />
    //     }else{
            return(
                <Redirect to={{pathname: "/", state: {from: props.location}}} />
            )
    //     }
    }}
    />);
}

export default ProtectedRoute;