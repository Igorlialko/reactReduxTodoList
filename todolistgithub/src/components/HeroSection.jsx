import React ,{useState} from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import './Cards.css'
import ToDo from "./Todo/ToDo";



const HeroSection = () => {

    const [TodoList, setTodoList] = useState([]);

    const removeTodoList = () => {
         if(TodoList.length>0){
        const removedArr = TodoList.slice(0,TodoList.length-1);
        setTodoList(removedArr);
        console.log('remove last')}else{
            const removedArr = [];
            setTodoList(removedArr);
        }
    };
    const onAddBtnClick = event => {
        setTodoList(TodoList.concat(<ToDo
            removeTodoList={removeTodoList}
            key={TodoList.length}
            className='todolist-items'/>));
    };
  const a=()=>{
      if (TodoList.length>0){
      return  <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          children={'Delete Last Todo List'}
          onClick={removeTodoList}
      />
  }}
    return (
        <div className='hero-section'>
    <div className='hero-container'>
        <video src='videos/video-2.mp4' autoPlay loop muted />
            <h1>Todo List</h1>
            <p>What do you want to write?</p>
             <div className='hero-btns'>
                 <Button
                      className='btns'
                      buttonStyle='btn--outline'
                      buttonSize='btn--large'
                      children={TodoList.length===0?' GET STARTED':'ADD more TodoList'}
                      onClick={onAddBtnClick}
                 />{a()}
             </div>
    </div>
        <div className='container-todolist' >
                  <ul className='cards__items'>
                        {TodoList}
                  </ul>
        </div>
        </div>

  );
}

export default HeroSection;
