//დაწერეთ შემდეგი სკრიპტი:
 //მოცემულია ცვლადი, რომლის მნიშვნელობაა 100.
 //დაწერეთ if პირობა, თუ ცვლადის მბიშვნელობა ნაკლებია 50ზე დაუბეჭდოს - ნაკლებია 50ზე, თუ ცვლადის მნიშვნელობა მეტია 20ზე დაიბეჭდოს მეტია 20ზე, ყველა სხვა დანარჩენ შემთხვევაში დაიბეჭდოს - შეცდომა.
 //დავალება1
let number = 100;
if (number < 50) {
    console.log("number < 50");
}
else if (number > 20) {
    console.log("number > 20");
}
    else {
        console.log("error");
      }
      //ternary operator
      let number1 = 100;

      let result = number1 > 20 ? "number > 20" : "error";
      console.log(result);
    //დავალება2
    //მოცემულია ცვლადი, რომლის მნიშვნელობაა მარიამ. ახალი if ის სინტაქსით დაწერეთ,
     //თუ ცვლადის მნიშვნელობა უდრის მარიამ-ს დაიბეჭდოს - true, 
   // ყველა სხვა დანარჩენ შემთხვევაში დაიბეჭდოს - false;
    let firstName = "mariam";

    if (firstName = "mariam") {
        console.log(true);
    }
    else if (firstName = "giorgi"){
        console.log(true);
    }
    else {
        console.log(false);
      }

     // მოცემულია ცვლადი, რომლის მნიშვნელობაა მარიამ.
      // switch case ის საშუალებით დაწერეთ, თუ ცვლადის მნიშვნელობა უდრის 
     //  მარიამ-ს დაიბეჭდოს
     //  - true,ყველა სხვა დანარჩენ შემთხვევაში დაიბეჭდოს - false; 
     
let firstName2 = "mariam";

switch (firstName2) {
  case "giorgi":
    alert( 'true' );
    break;
  case "mariam":
    alert( 'true' );
    break;
    default:
    alert( "false" );
}
//10/18/2023 davit kokhodze (task1)