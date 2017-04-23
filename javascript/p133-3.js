function check(regexp, number) {
 for(var i=0;i<number.length;i++){
     if(!regexp.test(number[i]))
      console.log("不是javascript风格"+number[i])

 }
}

var number = /^(\+|-|)(\d+(\.\d*)?|\.\d+)([eE](\+|-|)\d+)?$/;

check(/^(\+|-|)(\d+(\.\d*)?|\.\d+)([eE](\+|-|)\d+)?$/,["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2","1+1", "1e4.5", ".5.", "1f5"]);

// /^(\+|-|)(\d+(\.\d*)?|\.\d+)([eE](\+|-|)\d+)?$/