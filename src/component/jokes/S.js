import React, { Component } from 'react';
import j from './alljokes.txt';


/*
class Joke{
	joke="";
	course=1;
	semestr=1;
	name="Неизвестный мудрец";
	constructor(joke, course, semestr,  name) {
    this.joke = joke;
	this.course = course;
	this.semestr = semestr;
	this.name = name;
  }
  
}*/

const alljokes = [
	{
		joke: "А в это время женщины копали, и продвигались женщины вперёд",
		name: "Харламова И.Ю.",
		course: 1,
		semester: 1
	},
	{
		joke: "Это - двойная стелочка туды-сюды",
		name: "Харламова И.Ю.",
		course: 1,
		semester: 1
	},
	{
		joke: "Теория вероятности появилась тогда, когда математики пытались оценить свои шансы в азартных играх",
		name: "Харламова И.Ю.",
		course: 1,
		semester: 1
	},
	{
		joke: "Дали - это попса плюс искра",
		name: "Быстрова Ю.М.",
		course: 1,
		semester: 1
	},
	{
		joke: "",
		name: "",
		course: 1,
		semester: 1
	},
	{
		joke: "",
		name: "",
		course: 1,
		semester: 1
	},
	{
		joke: "",
		name: "",
		course: 1,
		semester: 1
	},
	{
		joke: "",
		name: "",
		course: 1,
		semester: 1
	},
	{
		joke: "",
		name: "",
		course: 1,
		semester: 1
	},
	{
		joke: "",
		name: "",
		course: 1,
		semester: 1
	},
	{
		joke: "",
		name: "",
		course: 1,
		semester: 1
	},
	{
		joke: "",
		name: "",
		course: 1,
		semester: 1
	},
]
/*
var fs = require('fs');
var arr = fs.readFileSync("./alljokes.txt").toString().split("\n");
for(var i=0; i < arr.length;i++) {
    alljokes.Push({
		joke: arr[i],
		name: arr[i+1],
		course: arr[i+2],
		semester: arr[i+3]
		
	});
	i+=3;
}
*/

class Jokes extends Component {
	
    render() {
        return (
            <div className="Jokes-content">
                    JoKES!!
					{
						alljokes.map(item => <div>{item.joke} - {item.name}</div>)
					}
            </div>

        );
    }
}

export default Jokes;
