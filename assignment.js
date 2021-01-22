
    //  kilometerToMeter

function kilometerToMeter(kilometer) {
    var meter = kilometer*1000
    return meter;
    
}
var inMeter =kilometerToMeter(2)
console.log(inMeter)



    //    budgetCalculator

    function budgetCalculator(num1,num2,num3) {
        var watch = num1*50;
        var phone =num2*100;
        var laptop = num3*500;
        var totalPrice =(watch+phone+laptop);
        return totalPrice;   
        } 
    console.log(budgetCalculator(1,1,1))



        //  hotelCost

function hotelCost(nights){
    var amount = 0;
    if (nights<= 10) {
        amount = nights *100;
    } else if (nights<=20){
        var firstTenNights = 10*100;
        var remaining = nights - 10;
        var secondTenNights = remaining * 80;
        amount = firstTenNights + secondTenNights;
    } else{
        var firstTenNights= 10 * 100;
        var secondTenNights = 10 *80;
        var remaining =nights-20;
        var thirdPart = remaining*50;
        amount=firstTenNights+secondTenNights+thirdPart;
    }
     return amount;
    }
    var count = hotelCost(21);
    console.log(count);



        //   megaFriend

    function megaFriend(arr) {
        var long1 = arr[0];
        for (i = 0; i < arr.length; i++) {
          if (arr[i].length > long1.length) {
            long1 = arr[i];
          }
        }
        return long1;
      }
      
      var longest = ["Anik", "Rafikul Islam", "Andy san",];
      console.log(megaFriend(longest));