import firestore from '@react-native-firebase/firestore';
import {useSelector, useDispatch} from 'react-redux';
import { addTask } from '../Redux/TaskSlice';



const addTasksToFirestore = (data) => {
    try{
        firestore()
  .collection('Users')
  .doc(""+data.uid).collection('Tasks').doc(""+data.id)
  .set({
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
    console.log('Total users: ', querySnapshot.docs);

    querySnapshot.forEach(documentSnapshot => {
      console.log(documentSnapshot.data(),"Hello");      
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
    title: data.title,
    subTitle: data.subTitle,
    date: data.date,
    time: data.time,
    priority: data.priority,
    dateNo: data.dateNo,
  })
  .then(() => {
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