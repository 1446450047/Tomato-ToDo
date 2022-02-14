const getId = function(){
    return window.localStorage.getItem("id") || 1
}
const updateId = function(id){
    window.localStorage.setItem('id',id)
}
const getTasks = function(){
    return JSON.parse(window.localStorage.getItem("tasks") || "[]")
}
const addTask = function(task){
    const tasks = getTasks()
    tasks.push(task)
    window.localStorage.setItem("tasks",JSON.stringify(tasks))
}

const randomColor = function(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return '#' + (Array(6).join(0) + (r.toString(16) + g.toString(16) + b.toString(16))).slice(-6);
}
const setTask = function(tasks){
    window.localStorage.setItem("tasks",JSON.stringify(tasks))
}
const deleteTask = function(id){
    const tasks = getTasks()
    let taskIndex
    tasks.forEach((item,index)=>{
        if(item.id === id ) return taskIndex = index
    })
    tasks[taskIndex].done = true
    setTask(tasks)
}
export {getId,updateId,getTasks,addTask,randomColor,deleteTask}