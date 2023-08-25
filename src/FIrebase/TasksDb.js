import firestore from '@react-native-firebase/firestore';
import {useSelector, useDispatch} from 'react-redux';
import { addTask, updateTask } from '../Redux/TaskSlice';



const addTasksToFirestore = (data) => {
    try{
        firestore()
  .collection('Users')
  .doc(""+data.uid).collection('Tasks').doc(""+data.id)
  .set({
    id: data.id,
    title: data.title,
    subTitle: data.subTitle,
    date: data.date,
    time: data.time,
    priority: data.priority,
    dateNo: data.dateNo,
  })
  .then(() => {
    console.log('User added!');
  });
        }
        catch(err){
            console.log(err);
        }
};
const getTasksFromFirestore = (data) => {
  try{
    firestore()
.collection('Users').doc(""+data.uid).collection('Tasks')
  .get()
  .then(querySnapshot => {
    console.log('Total users: ', querySnapshot.size);
    let tasksId = [];
    tasksId.push(data?.taskId)
    querySnapshot.forEach(documentSnapshot => {
      console.log(documentSnapshot.data().id);
      const result = documentSnapshot.data();
      console.log(result);
      //data.dispatch(addTask(documentSnapshot.data()))    
      //console.log("IDS",data.taskId) 
      console.log(data?.tasks,"TASKS")
      let dataArray = [];
      data?.tasks.forEach(tasks=>dataArray.push(tasks.id))
      console.log(dataArray,"dataArray")
      // console.log(dataArray,"New TASKS")
      if(dataArray.length!=0){
        dataArray.every(id=>{
          //console.log(task.id,"Task Identifier")
          if( id != result.id){
            data.dispatch(addTask(result))
            console.log("Task already")
          }
        })
      }
      else{
        console.log("Empty TASKS")
        data.dispatch(addTask(documentSnapshot.data()))
      }
 
        
      
      
    });
  });
    // const users = await firestore().collection('Tasks').get();
    // console.log(users._data);
  }
  catch(err){
    console.log(err);
  };
};
const updateTasksInFirestore = (data) => {
    console.log("Data",data);
    try{
        firestore()
  .collection('Users')
  .doc(""+data.uid).collection('Tasks').doc(""+data.id)
  .update({
    id: data.id,
    title: data.title,
    subTitle: data.subTitle,
    date: data.date,
    time: data.time,
    priority: data.priority,
    dateNo: data.dateNo,
  })
  .then(() => {
    data.dispatch(updateTask({id: data.id,title: data.title,
      subTitle: data.subTitle,
      date: data.date,
      time: data.time,
      priority: data.priority,
      dateNo: data.dateNo,indexNo: data.indexNo}))
    console.log('User updated!');
  });
    }
    catch(err){
        console.log(err);
    };
};
const removeTasksFromFirestore = (data) => {
    try{
        firestore()
  .collection('Users')
  .doc(""+data.uid).collection('Tasks').doc(''+data.id)
  .delete()
  .then(() => {
    console.log('User deleted!');
  });
    }
    catch(err){
        console.log(err);
    };
};


export {addTasksToFirestore, getTasksFromFirestore,updateTasksInFirestore, removeTasksFromFirestore};