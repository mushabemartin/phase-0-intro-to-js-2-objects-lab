// Write your solution in this file!
// Initialize the employee object with default data
const employee = { name: 'Sam' };

function updateEmployeeWithKeyAndValue(employee, key, value) {
  // Create a new object by spreading the employee and adding the new key-value pair
  return { ...employee, [key]: value };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  // Mutate the original employee by adding the new key-value pair
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  // Create a new object by spreading the employee and omitting the specified key
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  // Mutate the original employee by deleting the specified key
  delete employee[key];
  return employee;
}

// Export the functions for testing
module.exports = {
  updateEmployeeWithKeyAndValue,
  destructivelyUpdateEmployeeWithKeyAndValue,
  deleteFromEmployeeByKey,
  destructivelyDeleteFromEmployeeByKey,
};

// Example usage:
const newEmployee = updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');
console.log(newEmployee); // { name: 'Sam', streetAddress: '11 Broadway' }

const updatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway');
console.log(updatedEmployee); // { name: 'Sam', streetAddress: '12 Broadway' }

const removedKeyEmployee = deleteFromEmployeeByKey(employee, 'name');
console.log(removedKeyEmployee); // { }

const destructivelyRemovedKeyEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');
console.log(destructivelyRemovedKeyEmployee); // { }

