function solution(num) {
    return (y) => y + num;
}

let dimitrichko = solution(5);
console.log(dimitrichko(2));
console.log(dimitrichko(3));
