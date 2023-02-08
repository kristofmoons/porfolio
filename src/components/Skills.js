
function Skill(props){
    return<div className={"col-md-4"}>
        <div className="card px-2 my-2 ">
            <div className="card-body">
                <h5 className="card-title">{props.language}</h5>
                <div className="progress" >
                    <div className="progress-bar" style={{width:"75%"}} role="progressbar" aria-valuemin="0"
                         aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    </div>
}

export function Skills(){
    return <>

        <div className="container px-4 py-5" id="hanging-icons">
            <h2 className="pb-2 border-bottom">Hanging icons</h2>

            <div className="row">

                <Skill language={"HTML/CSS"}/>

                <Skill language={"JS"}/>

                <Skill language={"JAVA"}/>

                <Skill language={"SQL"}/>

                <Skill language={"Git"}/>

                <Skill language={"ReactJS"}/>

            </div>
        </div>
    </>
}