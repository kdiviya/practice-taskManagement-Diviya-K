import {Link} from "react-router";
import {useState} from "react";
import {useParams} from "react-router";

const TaskDetail = ({tasks}) => {

    const {id} = useParams();
    const selectedTask = tasks.find((task) => task.id == id);

    if(!selectedTask){
        return <p id="message">Tasks not found</p>;
    }

    else {
        return (
            <div className="description">
                <h1>Task Details of {selectedTask.title}</h1>
                <p>{selectedTask.description}</p>
            </div>
            
          );
    }
    
  
};

export default TaskDetail;