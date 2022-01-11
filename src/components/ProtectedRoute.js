import {Route, Redirect} from 'react-router-dom';



function ProtectedRoute({isAuth: isAuth, component: Component, ...rest}){
    debugger;
    return (
    <Route {...rest} render={(props)=>{
        if (isAuth){
            return <Component />
        }else{
            return(
                <Redirect to={{pathname: "/", state: {from: props.location}}} />
            )
        }
    }}
    />);
}

export default ProtectedRoute;