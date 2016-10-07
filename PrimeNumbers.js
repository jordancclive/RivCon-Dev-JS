//Prints prime numbers up to a given value

                    function printPrime(value) {
                        let primes = [];
                        for(let i = 2; i < value; i++) {
                            primes[i] = true;
                        }
                        let limit = Math.sqrt(value);
                        for(let i = 2; i < limit; i++) {
                            if(primes[i] === true) {
                                for(let j = i * i; j < value; j += i) {
                                    primes[j] = false;
                                }
                            }
                        }
                        for(let i = 2; i < value; i++) {
                            if(primes[i] === true) {
                                console.log(i + " " + primes[i]);
                            }
                        }
                    }

                    printPrime(50);

// Returns an array of prime numbers up to a value

                    function PrimeValues(value) {
                        let primes = [], tempArr=[];

                        //fills an array with 'true' from 2 to the given value.
                        for(let i = 2; i < value; i++) {
                            primes[i] = true;
                        }

                        //work way thru array tagging primes & non-primes
                        let limit = Math.sqrt(value);
                        for(let i = 2; i < limit; i++) {
                            if(primes[i] === true) {
                                for(let j = i * i; j < value; j += i) {
                                    primes[j] = false;
                                }
                            }
                        }

                        // remove nonprimes from array.
                        for(let i = 2; i < value; i++) {
                            if(primes[i] === true) {
                                tempArr.push(i);
                            }
                        }
                        return tempArr;
                    }

                    PrimeValues(50);
                    
                    //returns: [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ]
