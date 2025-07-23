const clgStudent = new Object(); //DECLARED BY CONSTRUTOR
// const obj2 = {}; //DECLARED BY LITERAL

clgStudent.name = "BHOOVESH";
clgStudent.id = "23BCE10242";
clgStudent.school = "SCOPE";
clgStudent.sem = "SIXTH";

// console.log(clgStudent);

const BHOOVESH = {
  school: {
    name: "ETERNAL",
    address: "SHAJAPUR",
    principal: "SOUDAMINI JHALA",
  },
  clg: {
    name: "VIT BHOPAL UNIVERSITY",
    school: "SCOPE",
    address: "BHOPAL",
    branch: "CSE CORE",
    sem: {
      type: "FALL SEMESTER",
      number: "SIXTH",
      subjects: ["AWS", "IWP", "MATHS", "TOC", "CP"],
      credits: {
        AWS: 3,
        IWP: 4,
        MATHS: 3,
        TOC: 3,
        CP: 4,
      },
      epic: {
        project_name: "HOSPITAL MANAGEMENT SYSTEM",
        PROJECT_MEMBERS: ["ARYAN", "BHOOVESH", "HARSH", "RAJAT", "SAMEER"],
        project_supervisor: "DR.MK JAYANTI",
      },
    },
  },
};

// console.log(BHOOVESH.clg);

// console.log(BHOOVESH.clg.sem);

// console.log(BHOOVESH.clg.sem.epic);

const obj1 = { 1: "ONE", 2: "TWO" };
const obj2 = { 3: "THREE", 4: "FOUR" };

//const obj3 = {obj,cbj2};//ek object ke ander dusre 2 objects banadega

// METHOD_1
// const obj3 = Object.assign({}, obj1, obj2); //Object.assign() method

// METHOD_2
const obj3 = { ...obj1, ...obj2 }; //spread operator
// console.log(obj3);

// OBJECT PROPERTIES ACCESS
// console.log(Object.keys(BHOOVESH.clg.sem.epic));
// console.log(Object.values(BHOOVESH.clg.sem.epic));
// console.log(Object.entries(BHOOVESH.clg.sem.epic));
// console.log(BHOOVESH.hasOwnProperty("clg"))
// console.log(BHOOVESH.hasOwnProperty("epic"))

