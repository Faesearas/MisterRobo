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
* README.md could use [alot](https://knowyourmeme.com/memes/the-alot) attention.
### License:
[MPL 2.0](https://www.mozilla.org/en-US/MPL/2.0/)

### Test Cases:
```js

Describe: arrayElementReplacer();
Under: Utility logic

Test: "It should check to see if the parameter exists within an array"
Code: 
arrayElementReplacer(comparator, testArray);
let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let comparator = 5
Expected Output: true

Test: "It should check to see if the parameter does not exist within an array"
Code: 
arrayElementReplacer(comparator, badTestArray);
let badTestArray = [1, 2, 3, 4, 5, 7, 8, 9]
let comparator = 6
Expected Output: false

Test: "It should replace an element within the array, if it matches correctly"
Code:
replacementArray =  arrayElementReplacer(comparator, replacer, testArray);
let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let comparator = 5
let replacer = 6
Expected Output: replacementArray = [1, 2, 3, 4, 6, 6, 7, 8, 9]

Describe: arrayCounter();
Under: Business logic

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
let errorMessage = "NaN, please input a number"
emptyArray = arrayCounter("kittens");
Expected output: "NaN, please input a number"

Describe: arrayStringifyer();
Under: Business logic

Test: "It should accept an array of numbers and turn it into an array of strings"
Code: 
let emptyArray = [];
let testNumberArray = [0,1,2,3];
emptyArray = arrayStringifyer(testNumberArray);
Expected output: emptyArray = ['0','1','2','3']
```