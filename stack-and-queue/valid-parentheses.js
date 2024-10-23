const isValid = (str) => {
    let stack = [];

    for(let i=0; i<str.length; i++) {
        console.log(`str[${i}]: ${str[i]}`);
        console.log(`stack: `, stack);
        if(str[i] === "(" || str[i] === "{" || str[i] === "[") {
            stack.push(str[i]);
            console.log("Stack after pushing: ", stack);
        } else {
            if (!stack.length || (str[i] === ')' && stack[stack.length-1] !== '(') || 
                (str[i] === '}' && stack[stack.length-1] !== '{') || 
                (str[i] === ']' && stack[stack.length-1] !== '[')) {
                console.log("inside")
                console.log("Stack in else if: ", stack);
                return false;
            }
            stack.pop();
        }
    }
    console.log("Stack outside: ", stack);
    return stack.length === 0;
}

console.log(isValid("{{}}]"));