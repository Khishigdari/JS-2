// STAR PATTERN 1

// *****
// *****
// *****
// *****
// *****

let row = 5;
while (row > 0) {
  let column = 5;
  let result = "";
  while (column > 0) {
    result = result + "* ";
    column = column - 1;
  }
  console.log(result);
  row = row - 1;
}

// STAR PATTERN 2

// *****
// *   *
// *   *
// *   *
// *****

let size2 = 5;
let row2 = size2;
while (row2 > 0) {
  let column = size2;
  let result = "";
  while (column > 0) {
    if (row2 == 1 || row2 == size2 || column == 1 || column == size2) {
      result = result + "* ";
    } else {
      result = result + "  ";
    }
    column = column - 1;
  }
  console.log(result);
  row2 = row2 - 1;
}

// STAR PATTERN 3
//  12345
//1 *****
//2 **  * //2-2
//3 * * * //3-3
//4 *  ** //4-4
//5 *****

let size3 = 5;
let row3 = size3;

while (row3 > 0) {
  let column = size3;
  let result = "";
  while (column > 0) {
    if (
      row3 == 1 ||
      row3 == size3 ||
      column == 1 ||
      column == size3 ||
      row3 - 1 == column - 1
    ) {
      result = result + "* ";
    } else {
      result = result + "  ";
    }
    column = column - 1;
  }
  console.log(result);
  row3 = row3 - 1;
}

//  12345
//1 *****
//2 *  ** //2-4
//3 * * * //3-3
//4 **  * //4-2
//5 *****

let size3n = 5;
let row3n = size3n;

while (row3n > 0) {
  let column = size3n;
  let result = "";
  while (column > 0) {
    if (
      row3n == 1 ||
      row3n == size3n ||
      column == 1 ||
      column == size3n ||
      row3n - 1 == size3n - column
    ) {
      result = result + "* ";
    } else {
      result = result + "  ";
    }
    column = column - 1;
  }
  console.log(result);
  row3n = row3n - 1;
}

// STAR PATTERN 4
//  12345
//1     ***** //1-5
//2    *****  //2-4
//3   *****   //3-3
//4  *****    //4-2
//5 *****     //5-1

let size4 = 5;
let row4 = 1;
while (row4 <= size4) {
  let column = 1;
  let result = "";
  while (column <= size4) {
    result = result + "* ";
    column = column + 1;
  }
  let starCount = column - 1 - row4;
  while (starCount > 0) {
    result = result + "-";
    starCount = starCount - 1;
    // column = 0;
  }
  console.log(result);
  row4 = row4 + 1;
}

// STAR PATTERN 8
// *
// **
// ***
// ****
// *****

let size8 = 5;
let row8 = 1;
while (row8 <= size8) {
  let result = "";
  let column = 1;
  while (column <= size8) {
    result = result + "  ";
    column = column + 1;
  }
  let starCount = row8;
  while (starCount > 0) {
    result = result + "* ";
    starCount = starCount - 1;
  }
  console.log(result);
  row8 = row8 + 1;
}

// STAR PATTERN 9
//     *
//    **
//   ***
//  ****
// *****
let size9 = 5;
let row9 = 1;
while (row9 <= size9) {
  let result = "";
  let column = 1;
  while (column <= size9 - row9) {
    result = result + "  ";
    column = column + 1;
  }
  let starCount = row9;
  while (starCount > 0) {
    result = result + "* ";
    starCount = starCount - 1;
  }
  console.log(result);
  row9 = row9 + 1;
}

// STAR PATTERN 11
// *****
// ****
// ***
// **
// *

let size11 = 5;
let row11 = size11;
while (row11 > 0) {
  let result = "";
  let column = row11;
  while (column > 0) {
    result = result + "* ";
    column = column - 1;
  }
  console.log(result);
  row11 = row11 - 1;
}
