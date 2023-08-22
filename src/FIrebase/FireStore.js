import firestore from '@react-native-firebase/firestore';

const db = firestore();

const addDataToFirestore = (data) => {
    db.collection("users").add({
        name: "Anbu Selvan",
        email: "anbu.selvan@email.com",
        password: "123456"
    })
    return console.log(data);
};
const updateDataInFirestore = (data) => {
    return console.log(data);
};
const removeDataFromFirestore = (data) => {
    return console.log(data);
};

export {addDataToFirestore, updateDataInFirestore, removeDataFromFirestore};