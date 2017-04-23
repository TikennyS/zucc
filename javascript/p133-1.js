function verify(regexp, yes, no) {
 for(var i=0;i<yes.length;i++){
     if(!regexp.test(yes[i]))
      console.log("不是正确的输入示范"+yes[i])

 }
  for(var i=0;i<no.length;i++){
     if(regexp.test(no[i]))
      console.log("不是错误的输入示范"+no[i])
 }
}

verify(/ca(r|t)/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

verify(/pr?op/,
       ["pop culture", "mad props"],
       ["plop"]);

verify(/ferr(et|y|ari)/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(/ious\b/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(/\s[.:;]/,
       ["bad punctuation ."],
       ["escape the dot"]);

verify(/[A-Za-z]{7,}/,
       ["hotttttt"],
       ["no", "hotten totten tenten"]); 

verify(/\b[a-df-z]+\b/,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape"]);