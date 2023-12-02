// Write your solution in this file!
const employee = {
    name: 'Markus',
    streetAddress: '4th Street'
};
function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
        ...employee,
        [key]: value
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const deleteEmp = {...employee};
    delete deleteEmp[key];
    return deleteEmp;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
