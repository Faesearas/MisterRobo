# Mr. Roboger's js "counter"
#### By: Amy Hruska
[Mr.R's jsc](https://github.com/AmyHruska/MisterRobo) is a counting mechanism which will count to the given number, sometimes *even* correctly!
### Installation
#### First method (remotely hosted)
* Open the web browser of your choice. 
* Navigate [here](https://amyhruska.github.io/MisterRobo).
#### 2nd method (locally hosted <advanced> )
* Run the below command in the terminal: 
````bash
$ git clone https://github.com/AmyHruska/MisterRobo.git
````
* Host the folder in a webserver of your choice.
* Navigate to the locally hosted index.html webpage.
### Technologies Used:
* HTML
* JavaScript
* CSS
### Known Issues
* CSS is kind of rough **still**.
* Negative numbers can be entered but won't be processed.
* README.md could use [alot](https://knowyourmeme.com/memes/the-alot) attention.
### License:
[MPL 2.0](https://www.mozilla.org/en-US/MPL/2.0/)

### Test Cases:
```js
Describe: arrayCounter();

Test! "It should add the number to an array"
Code: 
let emptyArray = [];
emptyArray = arrayCounter(5);
Expected output: emptyArray = [5]

Test: "It should add all of the numbers, from 0 to the number provided, to the array"
Code: 
let emptyArray = [];
emptyArray = arrayCounter(5);
Expected output: emptyArray = [0,1,2,3,4,5]

Test: "It should check to see if what is input is a number"
Code: 
let emptyArray = [];
let errorMessage = "Please input a positive number"
emptyArray = arrayCounter("kittens");
Expected output: "Please input a positive number"

Test: "It should not accept a negative number"
Code:
let emptyArray = [];
let errorMessage = "Please input a positive number"
emptyArray = arrayCounter(-5);
Expected output: "Please input a positive number"

Describe: arrayStringifyer();

Test: "It should accept an array of numbers and turn it into an array of strings"
Code: 
let emptyArray = [];
let testNumberArray = [0,1,2,3];
emptyArray = arrayStringifyer(testNumberArray);
Expected output: emptyArray = ['0','1','2','3']

Test: "It should accept any array and turn it into an array of strings"
Code: 
let emptyArray = [];
let testMixedArray = [1,"kittens!",2,"so cute",3];
emptyArray = arrayStringifyer(testMixedArray);
Expected output: emptyArray = ['1','kittens','2','so cute','3'];

function arrayStringReplacer()

Test: "It should take an array of one element and split it into separate elements"
code:
let splitArray = [];
let testArray = ["1234"]
splitArray = arrayStringReplacer(testArray);
Expected output: splitArray = ['1','2','3','4'];

Test: "It should take an array with multiple elements and splits them into separate elements"
code:
let splitArray = [];
let testArray = ["1234","4321"];
splitArray = arrayStringReplacer(testArray);
Expected output: splitArray = ['1','2','3','4','4','3','2','1'];

Test: "It should be able to reassemble the arrays before pushing them back into the original array"
let splitArray = [];
let testArray = ["1234","4321"];
splitArray = arrayStringReplacer(testArray);
Expected output: splitArray = ["1234","4321"]

Test: "It should insert the modifier variable when it incounters the comparator variable inside the array"
let cuteness = "9"
let excaimation = "So Cute!"
let kittenArray = ["9","19","29","39","49","59","1"]
cutenessOverload = arrayStringReplacer(kittenArray, cuteness, excaimation)
Expected output: cutenessOverload = ["So Cute!","So Cute!","So Cute!","So Cute!","So Cute!","1"]
```