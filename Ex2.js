var tasks = [];
tasks=[{task_name:"Task 1",status:"open"},
       {task_name:"Task 2",status:"closed"}];
//Consider the function updateTask(index,update_task) that updates the task at given index in "tasks" array.
function UpdateTask(index, update_task) {
    if (index > tasks.length) {
        throw new Error("Array Out of Bounds Exception");
    }

    tasks[index] = update_task;
}
//Write a test for the following scenario that throws an Array Out of Bounds Exception.

//index is greater than "tasks" array length.

test('Lanza un error cuando el índice está fuera del rango', () => {
    // Creamos una función anónima para llamar a UpdateTask con un índice inválido
    const callUpdateTask = () => UpdateTask(10, { task_name: "Updated Task", status: "open" });
  
    // Verificamos que llamar a UpdateTask con un índice inválido lance un error
    expect(callUpdateTask).toThrowError('Array Out of Bounds Exception');
  
  });

