function solve(input) {    

    const operations = () => {
        let list = [];
        return {
            add: (el) => {
                list.push(el);
            },
            remove: (el) => {
                list = list.filter((x) => x !== el);
            },
            print: () => {
                console.log(list.join(','));
            },
        };
    };

    const result = operations();
    input
        .map((x) => x.split(' '))
        .map(([cmd, text]) => result[cmd](text));
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);