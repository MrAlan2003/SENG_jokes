import React, { Component } from 'react';
import './Games.css';
import c1 from './sprites/c1.png';
import c2 from './sprites/c2.png';
import c3 from './sprites/c3.png';
import run from './music/run.mp3'


	const mas = [c1, c2, c3];
	let a;
	let audio= new Audio();
	audio.src = run;


	
function stop(){
		clearTimeout(a);
		audio.pause();
		//audio.currentTime = 0; 	
	}


	
class Games extends Component {	
	
	
	constructor(props) {
		super(props);
		this.change = this.change.bind(this);
		this.stop = this.stop.bind(this);
		this.music = this.music.bind(this);
		this.start = this.start.bind(this);
		this.state = {image : c3, i: 0};
	  }
	
		change()
		{	
			let i = this.state.i;
			i++;
			
			if (i>2) i=0;
			this.setState({image : mas[i], i: i});
			
			//music();
			a=setTimeout(this.change,200);
		}
		stop()
		{
			clearTimeout(a);
			audio.pause();
			//audio.currentTime = 0; 	
		}
		music() {
		  /*audio = new Audio();
		  audio.src = run;*/ // Создаём новый элемент Audio
		  // Указываем путь к звуку "клика"
		  audio.play(); // Автоматически запускаем
		}
		
		start() {
			this.music();
			this.change();
		}
		
		
		
    render() {
		 const {image} = this.state; 
        return (
            <div className="Games-content">
				<div className="textJ">Картиношки</div>
				Мы тащим контентом, а не графоном.<br />
				Кот, побитый жизнью и setTimeout()'ами
				
				<br /><br />
				<img src={image} onMouseOver={this.start} onMouseOut={this.stop} id="tim"/> 
				<br />
				<span className="textSpan">Музыка: Баста Ноггано N1NT3ND0 </span><br />
				<span className="textSpan">Автор идеи: Серёжа</span><br />
				<span className="textSpan">Оригинальный исполнитель: Ярик</span><br />
				<br />
            </div>

        );
    }
}

export default Games;
