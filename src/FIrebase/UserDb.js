import firestore from '@react-native-firebase/firestore';
var userCount = 0;

const addUserDataToFirestore = (data) => {
  try{
    firestore()
.collection('Users')
.doc(""+data.id)
.set({
  id: data.id,
  name: data.name,
  email: data.email,
  password: data.password,
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
    return user._data;
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