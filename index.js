console.log("Hello");
var readlineSync = require("readline-sync");
const chalk= require("chalk")
{
  playeName:"Aurobindo Gupta"
}


var name = readlineSync.question(chalk.red("What is your Name? "));
console.log("Welcome "+chalk.bgBlue(name)+" to the game..");
var q1=
{ questionS:"What is my Name? ", 
  answerS: "Aurobindo Gupta"
};
var q2= 
{
  questionS:"Where do i live  ",
  answerS:"Lucknow"
}
var score=0;
function play(ques,ans)
 {
   var ans_fuc=readlineSync.question(chalk.green(ques));
  //  console.log(ans_fuc.toLowerCase())
   
   if (ans_fuc.toLowerCase() === ans.toLowerCase())
   {
     console.log(chalk.blue("Currect!!"));
     score++;
   }
   else{
     console.log(chalk.bgYellow("Wrong!!!"));
   }
 }
 var questions_0= [q1,q2]
 for(var i=0;i<questions_0.length;i++)
 {
   play(questions_0[i].questionS,questions_0[i].answerS);
 }
 console.log(chalk.redBright.bold.underline("ZINDAGI TUMARI KATAI KHALLI HAO "));
 console.log(chalk.bgBlue.bold.underline("Score "+score));