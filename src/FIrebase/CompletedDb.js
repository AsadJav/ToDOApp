import firestore from '@react-native-firebase/firestore';


const addCompletedToFirestore = (data) => {
    try{
        firestore()
  .collection('Users')
  .doc(""+data.uid).collection('Completed').doc(""+data.id)
  .set({
    title: data.title,
    subTitle: data.subTitle,
    date: data.date,
    time: data.time,
    priority: data.priority,
    dateNo: data.dateNo,
  })
  .then(() => {
    console.log('Completed Task added!');
  });
        }
        catch(err){
            console.log(err);
        }
};
const getCompletedFromFirestore = async() => {
  try{
    firestore()
.collection('Completed')
  .get()
  .then(querySnapshot => {
    console.log('Total users: ', querySnapshot.size);

    querySnapshot.forEach(documentSnapshot => {
      console.log('User ID: ', documentSnapshot.data());
    });
  });
    // const users = await firestore().collection('Tasks').get();
    // console.log(users._data);
  }
  catch(err){
    console.log(err);
  };
};
const removeCompletedFromFirestore = (data) => {
    try{
        firestore()
  .collection('Users')
  .doc(""+data.uid).collection('Completed').doc(''+data.id)
  .delete()
  .then(() => {
    console.log('User deleted!');
  });
    }
    catch(err){
        console.log(err);
    };
};


export {addCompletedToFirestore, getCompletedFromFirestore, removeCompletedFromFirestore};