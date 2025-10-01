export const Hesab = {
    // Generating a random integer between (min, Max).
    // Example: generating a random number between (10, 15), say 13
    generate_random_number: function(min, max){
    let temp = Math.random() * (max-min) + min;
    return Math.floor(temp);
    },

    // About the this object
    about: function(){
        return "I'm Alireza Hadipoor. This object is for simplifying the math functions.";
    },
    
    // Selecting an item from an array randomly
    // Example: select a random number from name = [ali, reza, mona, sina], say pick a[2]=mona
    select_random: function(x){
        let temp = Math.floor(Math.random() * x.length);
        return x[temp];
    },

    // Computing the average of an array (consist of numbers);
    // Example: a=[10, 20, 30], average=20;
    average_array: function(a){
        let temp = 0;
        for(let i=0; i < a.length; i++){
            if (typeof(a[i]) != 'number'){
                return 'There is/are item(s) other than number.';
            }
            temp += a[i];
        }
        return temp/a.length;
    },

    // Make copy of an array
    copy: function(x) {
        let temp = x.map(y => {return y})
        return temp
    },
};

