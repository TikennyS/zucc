var txt="'I'm the student' he said"
console.log(txt);


console.log(txt.replace(/(^|\W)'|'(\W|$)/g, '$1"')); //\W匹配非单词，不是字符