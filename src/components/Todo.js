import React, { useState } from 'react';

//https://mui.com/material-ui/getting-started/learn/
import {ListItem, ListItemText, 
    InputBase, Checkbox, 
    ListItemSecondaryAction, IconButton} from "@mui/material";
import { DeleteOutline } from '@mui/icons-material';


const Todo = ({ item, remove, update }) => {

    // console.log(item);

    const [itemState, setItemState] = useState({item:item});

    const {id, title, done} = itemState.item;
    // console.log('itemState:', itemState);

    // 삭제 이벤트 핸들러
    const removeHandler = e => {
        // console.log(item);
        remove(itemState.item);
    };

    

    // 체크박스 체인지 이벤트 핸들러
    const checkHandler = e => {
        // console.log('체크박스 버튼 누름1');
        const thisItem = itemState.item;
        thisItem.done = !thisItem.done;
        setItemState({...itemState, thisItem});
        update(itemState.item);
    };


    return (
        <ListItem>
            <Checkbox checked={done} onChange={checkHandler} />
            <ListItemText>
                <InputBase
                    inputProps={{"aria-label" : "naked"}}
                    type="text"
                    id={id.toString()}
                    name={id.toString()}
                    value={title}
                    multiline={true}
                    fullWidth={true}
                />
            </ListItemText>
            {/* 삭제 버튼 */}
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete Todo" onClick={removeHandler}>
                    <DeleteOutline/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default Todo;