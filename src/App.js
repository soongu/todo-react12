import React, {useState, useEffect} from 'react'; 
import './css/main.css';
import Todo from './components/Todo';
import { List, Paper, Container } from '@mui/material';
import AddTodo from './components/AddTodo';

export const BASE_URL = 'http://localhost:8181/api/todos';

const App = () => {

  const [itemList, setItemList] = useState([
    // {
    //     id: 1,
    //     title: '점심메뉴 고르기',
    //     done: true
    // },
    // {
    //     id: 2,
    //     title: '책 읽기',
    //     done: false
    // },
    // {
    //     id: 3,
    //     title: '동영상 강의 보기',
    //     done: false
    // }
  ]);


  
  // AddTodo에게 전달할 함수
  // 할 일 추가 처리 함수
  const add = (item) => {
    
      fetch(BASE_URL, {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(item)
      })
      .then(res => res.json())
      .then(json => {
          // console.log(json);
          setItemList(json.todos);
      });
  };
  
  // Todo에게 보낼 삭제함수
  // target: 내가 삭제할 객체, item: 배열에 저장된 객체
  const remove = target => {
      // console.log(target);

      fetch(BASE_URL + `/${target.id}`, {
          method: 'DELETE'
      })
      .then(res => res.json())
      .then(json => {
          setItemList(json.todos);
      });
  };

  // 서버에 수정요청하는 함수
  const update = (item) => {
    console.log('2:',item);
    fetch(BASE_URL, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(item)
    })
    ;
};
  
  const todoItems = itemList.map(item => 
  <Todo key={item.id} item={item} remove={remove} update={update} />);

  useEffect(() => {
      
     fetch(BASE_URL)
      .then(res => res.json())
      .then(json => {
          // console.log(json.todos);
          setItemList(json.todos);
      });

  }, []);


  return (
    <div className="wrapper">
      <Container maxWidth="md">
        <AddTodo add={add} />
        <Paper style={{margin: 16}}>
          <List>
              {todoItems}
          </List>
        </Paper>
      </Container>
    </div>
  );
};

export default App;
