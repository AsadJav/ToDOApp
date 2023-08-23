import firestore from '@react-native-firebase/firestore';


const addUserDataToFirestore = (data) => {
    try{
        firestore()
  .collection('Users')
  .add({
    name: data.name,
    email: data.email,
  })
  .then(() => {
    console.log('User added!');
  });
        }
        catch(err){
            console.log(err);
        }
};
const getUserDataFromFirestore = async(data) => {
  try{
    const user = await firestore().collection('Users').doc(data).get();
    console.log(user._data);
  }
  catch(err){
    console.log(err);
  };
};
const updateDataInFirestore = (data) => {
    return console.log(data);
};
const removeDataFromFirestore = (data) => {
    return console.log(data);
};


export {addUserDataToFirestore, getUserDataFromFirestore,updateDataInFirestore, removeDataFromFirestore};