//Consider the function closingTask(task_name)

function closingTask(task_name){
    var success_flag=false;
      for(var i = 0; i < tasks.length; i++) {
          if(tasks[i].task_name === task_name) {
             tasks[i].status="closed";
             success_flag=true;
           }
      }
    return success_flag;
}
//Write a test for the above function, which mocks the real implementation of returning success flag to returning the closed task itself.



test('closingTask should return the closed task when task_name exists', () => {
    
    // Definimos la tarea que queremos cerrar
    const taskToClose = { task_name: 'Task 1', status: 'open' };
  
    // Mock el arreglo 'tasks' para contener la tarea que queremos cerrar
    tasks.push(taskToClose);
  
    // Llamamos a la función 'closingTask'
    const result = closingTask(taskToClose.task_name);
  
    // Verificamos que la tarea haya sido cerrada (el estado cambió a 'closed')
    expect(taskToClose.status).toBe('closed');
  
    // Verificamos que la función haya retornado la tarea cerrada
    expect(result).toEqual({
      task_name: taskToClose.task_name,
      status: 'closed',
    });
  
    // Verificamos que la función haya sido llamada una vez con el nombre de tarea correcto
    expect(closingTask).toHaveBeenCalledWith(taskToClose.task_name);
});

test('closingTask should return false when task_name does not exist', () => {
    // Mock el arreglo 'tasks' como vacío
    tasks.length = 0;
  
    // Definimos el nombre de tarea que no existe en el arreglo
    const nonExistentTaskName = 'NonExistentTask';
  
    // Llamamos a la función 'closingTask'
    const result = closingTask(nonExistentTaskName);
  
    // Verificamos que la función haya retornado false
    expect(result).toBe(false);
  
    // Verificamos que la función haya sido llamada una vez con el nombre de tarea correcto
    expect(closingTask).toHaveBeenCalledWith(nonExistentTaskName);
});