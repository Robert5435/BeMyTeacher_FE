import classes from "./Subject.module.css"


function Subject(props) {
    return(

    <div className={classes.containercards} >
        <div className={classes.container}>
            <div className={classes.card}>
                <div className={classes.box}>
                    <div  >
                        <i className={`${classes.fab} ${classes.python}`}></i>
                        <h3 className={classes.h3} >{props.name}</h3>
                    </div>
                </div>

            </div>
        </div>
    </div>
    )

}


export default Subject;