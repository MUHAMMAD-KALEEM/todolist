window.addEventListener('load',()=>
{
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');
    form.addEventListener('submit',(e)=>
    {
        e.preventDefault(); 
        const task =input.value;
        if(!task)
        {
            alert("PLEASE FILL OUT THE TASK");
            return;
        }
        const task_el = document.createElement("div");
        task_el.classList.add("task")
        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
       
        task_el.appendChild(task_content_el);

        const input_el= document.createElement("input");
        input_el.classList.add("text")
        input_el.type="text"
        input_el.value = task
        input_el.setAttribute("readonly","readonly")
        task_content_el.appendChild(input_el);

        const task_action_el = document.createElement("div");
        task_action_el.classList.add("action")

        const task_edit = document.createElement("button");
        task_edit.classList.add("edit");
        task_edit.innerText="Edit"
        const task_delete = document.createElement("button");
        task_delete.classList.add("delete");
        task_delete.innerText="Delete"

        task_action_el.appendChild(task_edit);
        task_action_el.appendChild(task_delete);

        task_el.appendChild(task_action_el)
        list_el.appendChild(task_el);
        input.value=""

        task_edit.addEventListener('click',()=>
        {
            if(task_edit.innerText.toLowerCase() == "edit")
            {
                input_el.removeAttribute("readonly");
                input_el.focus();
                task_edit.innerText="Save";

            }
            else
            {
                input_el.setAttribute("readonly","readonly");
                task_edit.innerText="Edit";
            }
        })
        task_delete.addEventListener('click',()=>
        {
            list_el.removeChild(task_el)
        })

    })
})