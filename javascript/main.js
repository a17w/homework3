// PART 1: STUDENT GRADES

$(document).ready(function() {
  $("#instructions0").click(function() {
    $("#instructions1").toggle();
  });
});

function getGrade() {
  // declare needed input and result variables
  // convert numbers from strings to integers
  var myHwkAvg, myMidtermScore, myFinalExam, myAcr, myScore;

  myHwkAvg = parseInt(document.forms["gradesForm"].elements["hwk_avg_input"].value);
  myMidtermScore = parseInt(document.forms["gradesForm"].elements["midterm_score_input"].value);
  myFinalExam = parseInt(document.forms["gradesForm"].elements["final_exam_input"].value);
  myAcr = parseInt(document.forms["gradesForm"].elements["acr_input"].value);

  if (isNaN(myHwkAvg) || isNaN(myMidtermScore) || isNaN(myFinalExam) || isNaN(myAcr)) {
    document.getElementById("inputValidation1").innerHTML = "<p>Please enter a valid input<p>";
  } else if (myHwkAvg < 0 || myHwkAvg > 100 || myMidtermScore < 0 || myMidtermScore > 100 || myFinalExam < 0 || myFinalExam > 100 || myAcr < 0 || myAcr > 100) {
    document.getElementById("inputValidation2").innerHTML = "<p>Please enter a value between 0-100<p>";
  } else {
    myScore = calculateAverage(myHwkAvg, myMidtermScore, myFinalExam, myAcr);
    displayGrade(myScore);
  }
}

/* Calculate average score */
function calculateAverage(hwkAvg, midtermScore, finalScore, acrScore) {
  var myFinalAvg = (0.5 * hwkAvg) + (0.2 * midtermScore) + (0.2 * finalScore) + (0.1 * acrScore);
  return parseInt(myFinalAvg);
}

function displayGrade(myScore) {
  var score = myScore;
  var letterGrade;

  if (score <= 100 && score >= 90) {
    letterGrade = "A";
    document.getElementById("results1").innerHTML = "<p>Your final average is: " + Math.round(score) + "</p>";
    document.getElementById("results2").innerHTML = "<p>Your final average is: " + letterGrade + "</p>";
  } else if (score <= 89 && score >= 80) {
    letterGrade = "B";
    document.getElementById("results1").innerHTML = "<p>Your final average is: " + Math.round(score) + "</p>";
    document.getElementById("results2").innerHTML = "<p>Your final average is: " + letterGrade + "</p>";
  } else if (score <= 79 && score >= 70) {
    letterGrade = "C";
    document.getElementById("results1").innerHTML = "<p>Your final average is: " + Math.round(score) + "</p>";
    document.getElementById("results2").innerHTML = "<p>Your final average is: " + letterGrade + "</p>";
  } else if (score <= 69 && score >= 60) {
    letterGrade = "D";
    document.getElementById("results1").innerHTML = "<p>Your final average is: " + Math.round(score) + "</p>";
    document.getElementById("results2").innerHTML = "<p>Your final average is: " + letterGrade + "</p>";
    document.getElementById("results3").innerHTML = "<p>Student must retake the course</p>";
  } else {
    letterGrade = "F";
    document.getElementById("results1").innerHTML = "<p>Your final average is: " + Math.round(score) + "</p>";
    document.getElementById("results2").innerHTML = "<p>Your final average is: " + letterGrade + "</p>";
    document.getElementById("results3").innerHTML = "<p>Student must retake the course</p>";
  }
}

/* reset form */
function resetForm() {
  document.getElementById("gradesForm").reset();
}


// PART 2: SALESPERSON COMMISSION
//
// $(document).ready(function() {
//         $(document).tooltip();
//       });

function calculateCommission() {
  var item1, item2, item3, item4;
  var item1total, item2Total, item3Total, item4Total;
  var sum = 0;
  var weekly_base_salary = 200,
    commission_rate = 0.09,
    weekly_salary;

  item1 = parseInt(document.forms["commissionForm"].elements["item1_input"].value);
  item2 = parseInt(document.forms["commissionForm"].elements["item2_input"].value);
  item3 = parseInt(document.forms["commissionForm"].elements["item3_input"].value);
  item4 = parseInt(document.forms["commissionForm"].elements["item4_input"].value);

  if (isNaN(item1) || isNaN(item2) || isNaN(item3) || isNaN(item4)) {
    alert("Inputted value is not an integer. Please try again.");
    // document.getElementById("input_validation").innerHTML="<p>Inputted value is not an integer. Please try again.</p>";
  } else {

    item1Total = (item1 * 239.99).toFixed(2);
    item2Total = (item2 * 129.75).toFixed(2);
    item3Total = (item3 * 99.95).toFixed(2);
    item4Total = (item4 * 350.89).toFixed(2);

    sum = ((item1 * 239.99) + (item2 * 129.75) + (item3 * 99.95) + (item4 * 350.89)).toFixed(2);

    weekly_salary = ((commission_rate * sum) + weekly_base_salary).toFixed(2);

    document.getElementById("commissionForm").elements["numsold_item1"].value = item1;
    document.getElementById("commissionForm").elements["numsold_item2"].value = item2;
    document.getElementById("commissionForm").elements["numsold_item3"].value = item3;
    document.getElementById("commissionForm").elements["numsold_item4"].value = item4;

    document.getElementById("commissionForm").elements["total_item1"].value = item1Total;
    document.getElementById("commissionForm").elements["total_item2"].value = item2Total;
    document.getElementById("commissionForm").elements["total_item3"].value = item3Total;
    document.getElementById("commissionForm").elements["total_item4"].value = item4Total;

    document.getElementById("commissionForm").elements["final_total"].value = sum;
    document.getElementById("commissionForm").elements["salary"].value = weekly_salary;
  }
}

function resetForm() {
  document.getElementById("commissionForm").reset();
}

// PART 3: CUSTOMER CREDIT LIMIT
function calculateCreditLimit() {

  var accountNum, creditLimit, beginMonthlyBalance, totalAmountCharged, totalAmountCredited, newBalance, currentCredit, summary;

  accountNum = parseInt(document.getElementById("creditForm").elements["account_num"].value);
  if (isNaN(accountNum)) {
    alert("Account number contains numbers only. Please re-enter.");
  }
  creditLimit = parseInt(document.getElementById("creditForm").elements["credit_limit"].value);
  beginMonthlyBalance = parseInt(document.getElementById("creditForm").elements["begin_monthly_balance"].value);
  totalAmountCharged = parseInt(document.getElementById("creditForm").elements["total_amount_charged"].value);
  totalAmountCredited = parseInt(document.getElementById("creditForm").elements["total_amount_credited"].value);

  if (isNaN(creditLimit) || isNaN(beginMonthlyBalance) || isNaN(totalAmountCharged) || isNaN(totalAmountCredited)) {
    alert("Inputted value is not an integer. Please try again.")
  } else {
    newBalance = beginMonthlyBalance + totalAmountCharged - totalAmountCredited;
    currentCredit = creditLimit - newBalance;
    if (currentCredit > 0) {
      summary = "Summary: The new balance is " + newBalance + "\nCredit available is " + currentCredit;
    } else if (currentCredit < 0) {
      summary = "Summary: The new balance is " + newBalance + "\nCredit limit exceeded by " + Math.abs(currentCredit);
    }
  }

  document.getElementById("results").innerHTML =
    "Credit Account Summary Account Number: " + accountNum +
    "\nCredit Limit: " + creditLimit +
    "\nBalance At Beginning of Month: " + beginMonthlyBalance +
    "\nTotal Amount Charged This Month: " + totalAmountCharged +
    "\nTotal Amount of Credits This Month: " + totalAmountCredited +
    "\n" + summary;
}

function resetForm() {
  document.getElementById("creditForm").reset();
}

// PART 4: PALINDROME
function palindrome() {
  var str_num_input = document.getElementById("palindromeForm").elements["pal_num_input"].value; //$("#palindromeForm")[0].elements;
  var num_input = parseInt(str_num_input);
  if (isNaN(num_input) || str_num_input.length !== 5) {
    alert("Input invalid. Please input a five-digit integer.");
  } else if (str_num_input.charAt(0) === str_num_input.charAt(4) && str_num_input.charAt(1) === str_num_input.charAt(3)) {
    alert("It's a palindrome!");
  } else {
    alert("Not a palindrome!");
  }
}

function resetForm() {
  document.getElementById("palindromeForm").reset();
}

// PART 5: CONVERT TO CELSIUS AND FAHRENHEIT
function toCelsius(){
  var fTemp = parseInt(document.getElementById("conversionForm").elements["fInput"].value);
  if (isNaN(fTemp)){
    // alert("Please input a numeric value");
      document.getElementById("error1").innerHTML=("Please input a numeric value");
  } else {
      var cTemp = ((5 / 9) * (fTemp - 32));
      cTemp = cTemp.toFixed(1);
      document.getElementById("conversionForm").elements["fInput"].value = cTemp;
      document.getElementById("results1").innerHTML = (fTemp + " fahrenheit is equal to " + cTemp + " celsius");
  }
}

function toFahrenheit(){
    var cTemp = parseInt(document.getElementById("conversionForm").elements["cInput"].value);
    if (isNaN(cTemp)){
        // alert("Please input a numeric value");
        document.getElementById("error2").innerHTML=("Please input a numeric value");
    } else {
            var fTemp = ((9 / 5 * cTemp) + 32);
            fTemp = fTemp.toFixed(1);
            document.getElementById("conversionForm").elements["cInput"].value = fTemp;
            document.getElementById("results2").innerHTML = (cTemp + " celsius is equal to " + fTemp + " fahrenheit");
        }
}