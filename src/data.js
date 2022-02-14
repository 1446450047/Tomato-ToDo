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

const randomColor = function(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return '#' + (Array(6).join(0) + (r.toString(16) + g.toString(16) + b.toString(16))).slice(-6);
}
export {getId,updateId,getTasks,setTask,randomColor}