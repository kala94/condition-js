/*1.find the numbers */
  
  var a=10;
  var b=5;
  var c=(a+b);
  a-=c;
  console.log(c);
  console.log(a);
  
/*2. Find the number */
  
  let w=34;
  let x=34;
  w+=x;
  x%=w;
  console.log(w);
  console.log(x);
  
/*3. check given day is weekend or not. */
  
  var n=prompt("Enter the number");
  if((n==1)||(n==7))
  {
    console.log("The given day is weekend");
  }
  else 
  {
    console.log("The given day is not weekend");
  } 
  
 /*4. To find the grade. */
 
  var mark=prompt("Enter the mark");
  if(mark>90)
  {
   console.log("Grade A");
  } 
  else if(mark>75)
  {
   console.log("Grade B"); 
  }
  else if(mark>60)
  {
   console.log("Grade C"); 
  }
  else if(mark>50)
  {
   console.log("Grade D"); 
  }
  else if(mark>40)
  {
   console.log("Grade E"); 
  }
  else 
  {
   console.log("Grade F"); 
  }
  
 /*5. The year is leap or not. */
  
  var year=prompt("Enter the year");
  if(year%4==0)
  {
    if(year%100!=0)
    {
      console.log("The year is Leap Year");
    }
    else 
    {
      console.log("The year is  not a Leap Year");
    }
  }
  else if(year%400==0)
  {
    console.log("The year is a Leap Year");
  }
  else 
  {
    console.log("The year is not a Leap Year");
  } 