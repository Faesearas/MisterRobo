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
```js
Test Cases:

Describe: arrayElementReplacer();
Utility

Test:"Check for "

Test: "It sould check to see if the parameter exists within an array"
Code: 
arrayElementReplacer(comparator, testArray);
let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let comparator = 5
Expected Output: true

Test: "It should check an array and if the item includes any of the first parameter replace with the second parameter"
```