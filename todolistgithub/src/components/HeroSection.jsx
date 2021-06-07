import React ,{useState} from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';



const HeroSection = () => {

    const [TodoList, setTodoList] = useState([]);
    const onAddBtnClick = event => {
        setTodoList(TodoList.concat(<input key={TodoList.length} />));
    };

    return (
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
        />
        <div>
        {TodoList}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
