
console.log("task-2")


function calcAverageCalories(days) {

   if (days.length === 0) {
      return 0;
   }

   let totalCalories = 0

   for (const item of days) {
      totalCalories += item.calories
   }

   return totalCalories / days.length
      
}


