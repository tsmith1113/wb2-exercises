"use strict";
//what I know
let studentName = "Tracie";
let studentMajor = "CSCI"

//what I need to compute
let majorName;
let departmentOffice;

if(studentMajor == "BIOL"){
    majorName ="Biology";
    departmentOffice = "Science Building, Room 310"
}
else if(studentMajor == "CSCI"){
    majorName ="Computer Science";
    departmentOffice = "Sheppard Hall, Room 314"
}
else if(studentMajor == "ENG"){
    majorName ="English";
    departmentOffice = "Kerr Hall, Room 201"
}
else if(studentMajor == "HIST"){
    majorName ="History";
    departmentOffice = "Kerr Hall, Room 114"
}
else if(studentMajor == "MKT"){
    majorName ="Marketing";
    departmentOffice = "Westly Hall, Room 310"
}

//display the results

console.log("Student: " +studentName);
console.log("Major: " +majorName);
console.log("Advising Location: " +departmentOffice);


