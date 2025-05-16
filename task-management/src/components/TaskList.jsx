import {Link} from "react-router-dom";
 

const TaskList = ({tasks}) => {


    return(
        <div className="title">
            <h1> List of Tasks </h1>
            <ul>
                { tasks.map((task) => 
                <li key = {task.id}>
                    <Link to ={`/task/${task.id}`}>{task.title}</Link>
                </li>)}

            </ul>
        </div>
    );
};

export default TaskList;
