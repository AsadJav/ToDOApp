import firestore from '@react-native-firebase/firestore';


const addArchivesToFirestore = (data) => {
    try{
        firestore()
  .collection('Users')
  .doc(""+data.uid).collection('Archives').doc(""+data.id)
  .set({
    title: data.title,
    subTitle: data.subTitle,
    date: data.date,
    time: data.time,
    priority: data.priority,
    dateNo: data.dateNo,
  })
  .then(() => {
    console.log('Archive Task added!');
  });
        }
        catch(err){
            console.log(err);
        }
};
const getArchivesFromFirestore = async() => {
  try{
    firestore()
.collection('Archives')
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
// const updateTasksInFirestore = (data) => {
//     try{
//         firestore()
//   .collection('Archives')
//   .doc(""+data?.id)
//   .set({
//     title: data.title,
//     subTitle: data.subTitle,
//     date: data.date,
//     time: data.time,
//     pripority: "success",
//   })
//   .then(() => {
//     console.log('User Updated!');
//   });
//     }
//     catch(err){
//         console.log(err);
//     };
// };
const removeArchiveFromFirestore = (data) => {
    try{
        firestore()
        .collection('Users')
        .doc(""+data.uid).collection('Archives').doc(''+data.id)
        .delete()
        .then(() => {
          console.log('User deleted!');
        });
    }
    catch(err){
        console.log(err);
    };
};


export {addArchivesToFirestore, getArchivesFromFirestore, removeArchiveFromFirestore};