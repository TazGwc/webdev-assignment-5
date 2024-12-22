// 3.1 Minimum
function min(num1, num2) {
  if (num1 < num2) return num1;
  else return num2;
}

// 3.2 Recursion
function isEven(num)
{
    if(num == 0) return true;

    else if (num == 1) return false;

    else if (num < 0) return isEven(num+2);

    else return isEven(num-2);
}

// 3.3 Bean Counting 
function countChar(text, character)
{
    let counts = 0;
    for(let c = 0; c < text.length; c++)
        if(text[c] === character)
            counts++;

    return counts;
}

