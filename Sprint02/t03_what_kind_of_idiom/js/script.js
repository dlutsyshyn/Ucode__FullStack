const checkInput = () => {
    let value = prompt ('Please set a value from 1 to 10: ')

    switch (value) {
        case '1' : alert ('Back to square 1!'); break;
        case '2' : alert ('Goody 2-shoes!'); break;
        case '3' : //same result
        case '6' : alert ("Two's company, three's a crowd!"); break;
        case '4' : //same result
        case '9' : alert ('Counting sheep!'); break;
        case '5' : alert ('Take five!'); break;
        case '7' : alert ('Seventh heaven!'); break;
        case '8' : alert ('Behind the eight-ball!'); break;
        case '10' : alert ('Cheaper by the dozen!'); break; 
        default : alert ('Sorry, no matches found!')
        checkInput();  
}}
checkInput();