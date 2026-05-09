//Class inheritance

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

const myCar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = myCar.show();



//Asynchronous JavaScript Callback
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);


//Asynchronous JavaScript setTimeout
document.getElementById("demo").innerHTML = "I think !!";

setTimeout(function() {
  document.getElementById("demo").innerHTML = "no i am sure !!";
}, 1000);

setTimeout(function() {
  document.getElementById("demo").innerHTML = "I hate You !!";
}, 3000);


//Asynchronous JavaScript setInterval
setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}


//callback example

const paymentSuccess = true;
const marks =90;

function enroll(callback) {
  console.log("Course enrollment is in progress...");
    setTimeout(function() {
         if(paymentSuccess) {
      console.log("Course enrolled successfully!");
         callback();    
    } else {
      console.log("Payment failed. Enrollment unsuccessful.");
    }
    }, 2000);
}

function progress(callback) {
    console.log("Preparing your certificate...");
    setTimeout(function() {
      if(marks >= 80) {
        console.log("Congratulations! You have received your certificate.");
         callback();
      } else {
        console.log("Sorry, you did not pass the course. No certificate awarded.");
      }
    }, 2000);
}

function getCertificate() {
    console.log("congratulations! you have received your certificate");
    }



enroll(function() {
  progress(getCertificate);
});


//Promise example

const paymentSuccess = true;
const marks =90;

function enroll() {
  console.log("Course enrollment is in progress...");
  const promise = new Promise(function(resolve, reject) {
     setTimeout(function() {
         if(paymentSuccess) {
      resolve("Course enrolled successfully!");
    } else {
      reject("Payment failed. Enrollment unsuccessful.");
    }
    }, 2000);
  });
  return promise;
}

function progress() {
    console.log("Preparing your certificate...");
    const promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(marks >= 80) {
                resolve("Congratulations! You have received your certificate.");
            } else {
                reject("Sorry, you did not pass the course. No certificate awarded.");
            }
        }, 2000);
    });
    return promise;
}


function getCertificate() {
    console.log("preparing your certificate...");
    const promise = new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Congratulations! You have received your certificate.");
        }, 2000);
    }
    );
    return promise;
}


enroll()
  .then(progress)
    .then(getCertificate)
    .then(function(value) {
        console.log(value);
    })
    .catch(function(error) {
        console.log(error);
    }); 
    
  
  //Async/Await example

const paymentSuccess = true;
const marks =90;

function enroll() {
  console.log("Course enrollment is in progress...");
  const promise = new Promise(function(resolve, reject) {
     setTimeout(function() {
         if(paymentSuccess) {
      resolve("Course enrolled successfully!");
    } else {
      reject("Payment failed. Enrollment unsuccessful.");
    }
    }, 2000);
  });
  return promise;
}

function progress() {
    console.log("Preparing your certificate...");
    const promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(marks >= 80) {
                resolve("Congratulations! You have received your certificate.");
            } else {
                reject("Sorry, you did not pass the course. No certificate awarded.");
            }
        }, 2000);
    });
    return promise;
}


function getCertificate() {
    console.log("preparing your certificate...");
    const promise = new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Congratulations! You have received your certificate.");
        }, 2000);
    }
    );
    return promise;
}



async function courseProgress() {
    try {
        const enrollmentMessage = await enroll();
        console.log(enrollmentMessage);
        const progressMessage = await progress();
        console.log(progressMessage);
        const certificateMessage = await getCertificate();
        console.log(certificateMessage);
    } catch (error) {
        console.error(error);
    }
}