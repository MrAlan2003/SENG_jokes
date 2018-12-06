import React, { Component } from 'react';
import './Tasks.css';

/*lorem ipsum как массив сообщений*/
const LOREM_DATA = [
  {
    senderId: "ГосподинХорошенький228",
    text: "какие здесь колоритные люди... прям жесть фричьё"
  },
  {
    senderId: "НеизвестныйПИНЖ",
    text: "Вот попадёт в вас космический луч, и вы сдохните. Это вам не розовый пушистый браунинг морпеха из Doom'а"
  }
]


class Tasks extends Component {
    
	  /*данные добавляются в state*/
	constructor(props) {
		super(props)
		this.state = { messages: LOREM_DATA }	
        this.buttonClicked = this.buttonClicked.bind(this);
	  }
	   

	buttonClicked() {
        this.setState({messages: LOREM_DATA.push({senderId: document.getElementByID("inputname"), text: document.getElementByID("input")})});
    }
	
	
	
	render() {
        return (
            <div className="tasks-content">
               <p className="textT">Клуб анонимных ПИНЖей</p>
			    
				<div className="app">
				{/*<Title />*/}
					{/*инициализируем state в конструкторе и передаем this.state.messages компоненту MessageList. */}
					<MessageList messages={this.state.messages}/>
					<SendMessageForm />
				</div>
				
            </div>

        );
    }
	
}
	




class MessageList extends React.Component {
  render() {
    return (
      <ul className="message-list">                 
        {this.props.messages.map(message => {
          return (
           <li key={message.id}>
             <div className="onemessage">
				 <div className="namesender">
				   {message.senderId}
				 </div>
				 <div className="textsender">
				   {message.text}
				 </div>
			 </div>
           </li>
         )
       })}
     </ul>
    )
  }
}



class SendMessageForm extends React.Component {
  render() {
    return (
      <div className="cont">
		<input type="text" className="inputformname" id="inputname"/><br />
		<input type="text" className="inputform" id="input" /><br />
		<button className="send">Отправить</button>
	  </div>
    )
  }
}

/*onClick={buttonClicked()}*/



export default Tasks;
