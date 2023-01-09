 document.addEventListener("DOMContentLoaded",()=>{
    const addBtn = document.querySelector("#new-stud-btn");
    const studentForm = document.querySelector(".add-student-form");
    const studentList = document.querySelector("#student-list");
  const API_URL = "http://localhost:3000/students" 



function renderStudents(stud){
  const studDiv = document.createElement("div");
  studDiv.className = "card";
  studDiv.innerHTML +=
  ` <div class="info">
   <img src="${stud.image} alt="${stud.name} class= "stud-avatar"/>
   
    <h2>${stud.name}</h2>
    <p><span>class : </span>${stud.class}</p>
    <p><span>country : </span>${stud.country}</p>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">delete</button>
    </div>
    `
    studentList.appendChild(studDiv);
}
  function renderAllStudents(students){
    studentList.innerHTML = "";
    students.forEach(student => {
        renderStudents(student);
    });
  }

  fetch(API_URL,{
    method:"GET"
  })
.then((response)=>response.json())
.then((data)=>renderAllStudents(data))
// 
 })
 