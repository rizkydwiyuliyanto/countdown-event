 
    const myBtn = document.getElementById('Startbtn');
    const myBtn2 = document.getElementById('Stopbtn');
    
    myBtn.addEventListener('click', () =>{   
    const dayInput = document.getElementById('input_day')
    const monthInput = document.getElementById('input_month')
    const yearInput = document.getElementById('input_year')
    if (dayInput > 31 || monthInput > 12){
       document.write('wait error')
    }else {
      inputEvent(yearInput.value, monthInput.value, dayInput.value);
    }
  
     dayInput.value = "";
     monthInput.value = "";
     yearInput.value = "";

     document.getElementsByTagName('button')[0].setAttribute('disabled', 'disabled')
     document.getElementsByTagName('button')[1].removeAttribute('disabled')
    
})

 myBtn2.addEventListener('click', function() {
      
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');
            days.innerHTML = "";
            hours.innerHTML =  "";
            minutes.innerHTML = "";
            seconds.innerHTML = "";

  document.getElementById('time-until').innerHTML = " ";          
  clearInterval(myVar);
  document.getElementsByTagName('button')[1].setAttribute('disabled', 'disabled')
  document.getElementsByTagName('button')[0].removeAttribute('disabled');

})  
function inputEvent(y, m, d){
    const event = new Date(y, m-1, d);  
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    const month = ["January", "February", "Maret", "April", "May", "June",
   "July", "August", "September","October", 
   "November", "December"];

    const dayss = ["Sunday","Monday", "Tuesday", "Wednesday", 
    "Thursday", "Friday", "Saturday"];

    document.getElementById('time-until').innerHTML = "Time until " + dayss[event.getDay()] 
        +" " + event.getDate() + " " +month[event.getMonth()] + " " + event.getFullYear();
      
        myVar = setInterval(countdown, 1000);
        function countdown(){ 
            var s = new Date();
            s.getDate();
            var diff =event - s;
            diff = diff/1000/60/60;
            var dayEvent = Math.floor(diff/24);
            days.innerHTML = dayEvent;
            hours.innerHTML =  23-s.getHours();
            minutes.innerHTML = 59-s.getMinutes();
            seconds.innerHTML = 59-s.getSeconds();
          }
   
}
  



// function startOfWeek(date)
// {
//   var diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : date.getDate()-7);

//   return new Date(date.setDate(diff));
//   // return diff;

// }

// dt = new Date(); 

// console.log(startOfWeek(dt));
