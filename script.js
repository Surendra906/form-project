let employees=[];
let currentId=1;

const nameInput=document.getElementById('name');
const professionInput=document.getElementById('profession');
const ageInput=document.getElementById('age');
const addUserBtn=document.getElementById('add-user-btn');
const messageContainer=document.getElementById('message-container');
const employeeListContainer=document.getElementById('employee-list');

addUserBtn.addEventListener('click', () => {
  const name=nameInput.value.trim();
  const profession=professionInput.value.trim();
  const age=ageInput.value.trim();
  if(!name || !profession || !age){
    showMessage("Error: Please  Make sure All the fields before adding in an employee", 'error');
    return;
  }
  const newEmployee={
    id:currentId++,
    name:name,
    profession:profession,
    age:Number(age)
  };
  employees.push(newEmployee);

  nameInput.value='';
  professionInput.value='';
  ageInput.value='';
  showMessage('Success: Employee Added!', 'success');
  renderEmployees();
});
function showMessage(text, type){
 messageContainer.textContent=text;
 messageContainer.className=`message ${type==='error' ? 'error-msg' : 'success-msg'}`;
}
  
function renderEmployees() {
      if (employees.length === 0) {
        employeeListContainer.innerHTML = '<p class="empty-text">You have 0 Employees.</p>';
        return;
      }
      employeeListContainer.innerHTML = '';
      employees.forEach((employee) => {
        const card=document.createElement('div');
        card.className = 'employee-card';

        card.innerHTML = `
          <div class="employee-info">
            <span>${employee.id}.</span>
            <span>Name: ${employee.name}</span>
            <span>Profession: ${employee.profession}</span>
            <span>Age: ${employee.age}</span>
          </div>
          <button class="delete-btn" onclick="deleteEmployee(${employee.id})">Delete User</button>
        `;

        employeeListContainer.appendChild(card);
      });
    }

    
    function deleteEmployee(id) {
      employees = employees.filter(emp => emp.id !== id);
      renderEmployees();
    }