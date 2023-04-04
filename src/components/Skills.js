
function Skill(props){
    return<div className={"col-md-4"}>
        <div className="card px-2 my-2 ">
            <div className="card-body">
                <h5 className="card-title">{props.language}</h5>
                <div className="progress" >
                    <div className="progress-bar" style={{width:props.lvl}} role="progressbar" aria-valuemin="0"
                         aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    </div>
}

export function Skills(){
    return <>

        <div className="container px-4 pb-5" id="hanging-icons">
            <h2 className="pb-2 border-bottom">Skills</h2>

            <div className="row">

                <Skill language={"HTML/CSS"} lvl={"85%"}/>

                <Skill language={"JS"} lvl={"75%"}/>

                <Skill language={"JAVA"} lvl={"70%"}/>

                <Skill language={"SQL"} lvl={"65%"}/>

                <Skill language={"Flutter"} lvl={"70%"}/>

                <Skill language={"ReactJS"} lvl={"85%"}/>

            </div>
        </div>
    </>
}