// 2.1 Looping a Triangle
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);

// 2.2 FizzBuzz
for (let n = 1; n <= 100; n++) {
  let output = '';
  if (i % 3 === 0 && i % 5 === 0) console.log("fizzbuzz");
  
  else if (n % 3 == 0) output += "Fizz";
  
  else if (n % 5 == 0) output += "Buzz";
  
  console.log(output || n);
};

//2.3 Chessboard
function chessboard(rows)
{
    let row_1 = " # # # #", row_2="# # # # ";
    for(let i = 0; i<rows; i++)
    {
        if(i%2==0) console.log(row_1);

        else console.log(row_2);
    }
}







