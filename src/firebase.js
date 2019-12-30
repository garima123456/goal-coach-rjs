import * as firebase from 'firebase';


const config ={
    
    apiKey: "AIzaSyCu9sJyBv-AWgNS0ra0aGdSwoSUXKiN2SM",
    authDomain: "goal-coach-d97a5.firebaseapp.com",
    databaseURL: "https://goal-coach-d97a5.firebaseio.com",
    projectId: "goal-coach-d97a5",
    storageBucket: "goal-coach-d97a5.appspot.com",
    messagingSenderId: "785951538745",
    appId: "1:785951538745:web:03084d16c68c5b2dfe97e8",
    measurementId: "G-3RKXMVGG1X"
};
export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef=firebase.database().ref('completeGoals')