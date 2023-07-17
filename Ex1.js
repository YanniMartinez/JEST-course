
//Try to write a test that uses not.toBe to check tasks Array length by considering the reality that any array's length cannot be a negative value (not to be less than zero).

// Write your code in "index.test.js" file
var tasks=[];
tasks=['task one', 'task two'];


// Write your code here
       
//Write a test in Jest that checks the task array's length cannot be a negative value (not to be less than zero).
test('El arreglo no debe tener una longitud negativa', () => {
    // Verifica que el tamaño del arreglo sea mayor o igual a cero
    expect(tasks.length).not.toBeLessThan(0);
});