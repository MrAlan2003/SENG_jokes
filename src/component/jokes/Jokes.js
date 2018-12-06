import React, { Component } from 'react';
import j from './alljokes.txt';
import './Jokes.css';


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
		joke: "Мудрец - на ПИНЖе не жилец",
		name: "Серёжа",
		course: 1,
		semester: 1
	},
	{
		joke: "Я понимаю \"do\" и \"does\", а всё, что между ними - не могу скомпиллировать",
		name: "Лёша",
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
		joke: "- В душе я - школьник, а физически - в армии\n- У вас когнитивный диссонанс\n- Нет, у меня - неаттестация",
		name: "Серёжа",
		course: 1,
		semester: 1
	},
	{
		joke: "Нужно собрать ПИНЖей, которые зареганы в mail.ru... Просто, поливаешь их бензином и поджигаешь",
		name: "Неизвестный ПИНЖ",
		course: 3,
		semester: 2
	},
	{
		joke: "Если проблемы с кодировкой, попробуйте windows 1251. Если это не помогает, то koi-8. Если и это не помогает, плюньте на этот сайт, он вам не нужен",
		name: "Шульга Т.Э.",
		course: 3,
		semester: 2
	},
	{
		joke: "\"Ещё чуть-чуть до отмены приёма пищи\" звучит как \"Ещё чуть-чуть до апокалипсиса\"",
		name: "Серёжа",
		course: 1,
		semester: 1
	},
	{
		joke: "Это? Это отбросы ПИНЖА - выкидыши МФПИТа",
		name: "Диана",
		course: 1,
		semester: 1
	},
	{
		joke: "Шульга. И всё расцвело",
		name: "Арина",
		course: 1,
		semester: 2
	},
	{
		joke: "Если бы она не умерла без радиации, то всё равно бы умерла",
		name: "Неизвестный ПИНЖ",
		course: 1,
		semester: 2
	},
	{
		joke: "Мёртвый котёнок - ещё 40 минут котёнок",
		name: "Дима",
		course: 1,
		semester: 2
	},
	{
		joke: "Я сижу, играю в карты и понимаю, что я сижу и сортирую их \"пузырьком\" - козыри в одну сторону, поменьше мастью - в другую",
		name: "Серёжа",
		course: 1,
		semester: 2
	},
	{
		joke: "Харламова - это первый член прогрессии, а ряд ПИНЖей стремится к нулю",
		name: "Ярик",
		course: 1,
		semester: 1
	},
	{
		joke: "Супер-корень - это корень из корня в бесконечной башне корней",
		name: "Ульзутуев И.Е.",
		course: 1,
		semester: 2
	},
	{
		joke: "Четырёхмерный гиперобъём четырёхмерного гиперболоида, натянутого на четыре вектора",
		name: "Ульзутуев И.Е.",
		course: 1,
		semester: 2
	},
	{
		joke: "Идём со мной, адепты Золотого Пути! За Клинком Узурпатора!",
		name: "Дима",
		course: 1,
		semester: 2
	}
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
	/*state = {
		name: null,
		course: [],
		semestr: []
	}
	*/
	constructor(props) {
    super(props);
    this.state = {value: 'Харламова И.Ю.', falljokes : [], first: true};
    this.handleChange = this.handleChange.bind(this);
	 this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
	
	
   handleChange(event) {
    this.setState({value: event.target.value});
  }

	
	handleSubmit(event) {
   /* alert('You choose: ' + this.state.value);*/
	const falljokes = alljokes.filter(item => item.name == this.state.value);
    const first = false;
	this.setState({first});
	this.setState({falljokes});
	event.preventDefault();
  }
  handleCancel(event){
	  const first = true;
	  this.setState({first});
		this.setState({alljokes});
	event.preventDefault();
  }
	
	
    render() {
		return (
            <div className="Jokes-content">
                    <p className="textJ">Шуточки</p>
					{/*js array filter;
					 react checkbox onchange;
					 console.log;
					*/}
					<form className="form">
						<select value={this.state.value} onChange={this.handleChange} className="select" >
							<option value="Харламова И.Ю.">Харламова И.Ю.</option>
							<option value="Ульзутуев И.Е.">Ульзутуев И.Е.</option>
							<option value="Ярик">Ярик</option>
							<option value="Арина">Арина</option> 
							<option value="Дима">Дима</option> 
							<option value="Серёжа">Серёжа</option> 
							<option value="Лёша">Лёша</option>
						</select>
						Курс: <input type="checkbox" name="course1" value="1" className="check"/>1
							  <input type="checkbox" name="course2" value="2" className="check"/>2
							  <input type="checkbox" name="course3" value="3" className="check"/>3
							  <input type="checkbox" name="course4" value="4" className="check"/>4
						Семестр: 
							  <input type="checkbox" name="semestr1" value="1" className="check"/>1
							  <input type="checkbox" name="semestr2" value="2" className="check"/>2
							  <br /><br />
							  <button type="button"  onClick={this.handleSubmit} className="but">Применить</button> 
							  <button type="button" onClick={this.handleCancel} className="but">Отменить</button>
						{/*<button>Отменить</button>*/}
					</form>
					
					{
						this.state.first ?
							alljokes.map((item, index) => 
							<div className="contentJ" key={index}>
								<div className="cloud">
									{item.joke}
									<div className="name">
									 <span className="copy">&copy;</span> {item.name}
									</div>
								</div>
							</div>
							)
						:
							this.state.falljokes.map(item => 
							<div className="contentJ">
								<div className="cloud">
									{item.joke}
									<div className="name">
									 <span className="copy">&copy;</span> {item.name}
									</div>
								</div>
							</div>
							)
					}
            </div>

        );
    }
}



export default Jokes;
