const title = document.getElementById("welcome-title");

title.textContent = "Welcome To My Portfolio";

const skill = "JavaScript";
console.log(skill);

const experience = 0;
console.log(experience);

const goals = document.getElementById("goal");
goals.textContent = "Be Success";

const ages = 25;

if (ages >= 18) {
    console.log("You are an adult.");
}

const status = document.getElementById("status");

const learningMern = false;

if (learningMern) {
    status.textContent = "Currently learning MERN ";
} else {
    status.textContent = "Currently exploring web development.";
}

const age = 24;

if (age >= 18) {
    console.log("Iam an adult");

} else {
    console.log("Iam under 18");

}

const learningHours =4;

if(learningHours >=2){
    console.log("Im seriously learning Programming!");
    
}else{
    console.log("I need to study more");
    
}

const projectsCompleted = 1;

if(projectsCompleted ===0){
    console.log("im just getting started");

}else if(projectsCompleted <=3){
    console.log("Im building my foundation");
    
}else{
    console.log("Im becoming a serious developer");
    
}
