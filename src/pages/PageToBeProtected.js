import {withRouter} from 'react-router-dom';


function PageToBeProtected(){
    return <div>you can see this</div>

}

export default withRouter(PageToBeProtected);