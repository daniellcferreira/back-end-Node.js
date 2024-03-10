//truthy: [], {}, numero diferente de 0, string não vazia
//falsy: null, underfined, 0, "", NaN

console.log(!![], !!{}, !!1, !!"asdf");

console.log(!!null, !!undefined, !!0, !!"", !!NaN);
