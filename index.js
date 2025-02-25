const employee = {};
employee.name = 'Sam';

function updateEmployeeWithKeyAndValue(employee,key,value){
  const new_employee = {...employee};
  new_employee[key]=value;
  console.log(new_employee,employee)
  return new_employee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
  employee[key]=value;
  return employee;
};


function deleteFromEmployeeByKey(employee,key){
  const new_employee = {...employee};
  delete new_employee[key];
  return new_employee
};

function destructivelyDeleteFromEmployeeByKey(employee,key){
  delete employee[key];
  return employee
};
