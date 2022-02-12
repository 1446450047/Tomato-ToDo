const getId = function(){
    return window.localStorage.getItem("id") || 1
}
const updateId = function(id){
    window.localStorage.setItem('id',id)
}
const getTasks = function(){
    return JSON.parse(window.localStorage.getItem("tasks") || "[]")
}
const setTask = function(task){
    const tasks = getTasks()
    tasks.push(task)
    window.localStorage.setItem("tasks",JSON.stringify(tasks))
}

export {getId,updateId,getTasks,setTask}