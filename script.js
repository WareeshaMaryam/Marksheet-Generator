
let subject1 = prompt("Enter Your 1st subject");
let subject2 = prompt("Enter Your 2nd subject");
let subject3 = prompt("Enter Your 3rd subject");
let marks = 100;
let mark1 = +prompt("Enter the marks obtained in " + subject1);
let mark2 = +prompt("Enter the marks obtained in " + subject2);
let mark3 = +prompt("Enter the marks obtained in " + subject3); 
let percen1 = mark1 / marks * 100 
let percen2 = mark2 / marks * 100 
let percen3 = mark3 / marks * 100 
let totalMarks = marks * 3;
let obtainedMarks = mark1 + mark2 + mark3;
let totalPercentage = percen1 +percen2 +percen3;


document.write("<table border='1' cellpadding='15'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + marks + "</td><td>" + mark1 + "</td><td>" + percen1 +"%"  + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + marks + "</td><td>" + mark2 + "</td><td>" + percen2 +"%" + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + marks + "</td><td>" + mark3 + "</td><td>" + percen3 +"%" + "</td></tr>");
document.write("<tr><td>" + "All Subjects" + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks + "</td><td>" + totalPercentage + "%" + "</td></tr>");
document.write("</table>");