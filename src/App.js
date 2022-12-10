import React, {useState, useEffect} from 'react'; 
import './App.css';
import Todo from './components/Todo';
import { List } from '@mui/material';
import AddTodo from './components/AddTodo';





const App = () => {

  const [itemList, setItemList] = useState([
    {
        id: 1,
        title: '점심메뉴 고르기',
        done: true
    },
    {
        id: 2,
        title: '책 읽기',
        done: false
    }
    ,
    {
        id: 3,
        title: '동영상 강의 보기',
        done: false
    }
  ]);


  const todoItems = itemList.map(item => <Todo key={item.id} item={item} />);

  // AddTodo에게 전달할 함수
  // 할 일 추가 처리 함수
  const add = (item) => {

      item.id = itemList.length + 1;
      item.done = false;

      // console.log('add 호출됨!!');
      // console.log(item);

      setItemList(itemList => itemList.concat(item));
  };


  useEffect(() => {
      // console.log('재 렌더링!!');
      // console.log(itemList);
  }, []);


  return (
    <div className="App">
      <AddTodo add={add} />
      <List>
          {todoItems}
      </List>
    </div>
  );
};

export default App;
