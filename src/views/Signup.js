//we need to set up a signup, with username,email, password, and confirm password
//then it needs to confirm that its created followed by redirecting us to the login page.
//will need some background images and css formatting of the cards.
import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { Form } from 'react-router-dom';

function Signup() {
    const [newFirstName, setNewFirstName] = useState('');
    const [newLastName, setNewLastName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newCnfmPW, setNewCnfmPW] = useState('');

    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");


    const createUser = async () => {
        await addDoc(usersCollectionRef, {
            fname: newFirstName,
            lname: newLastName,
            email: newEmail,
            username: newUsername,
            password: newPassword,
            cnfmpw: newCnfmPW,
        })
    };


    return (
        
        <div className="container">
            <div>
                <input placeholder='First Name' onChange={(event) => { setNewFirstName(event.target.value); }} />
                <input placeholder='Last Name' onChange={(event) => { setNewLastName(event.target.value); }} />
                <input placeholder='Email' onChange={(event) => { setNewEmail(event.target.value); }} />
                <input placeholder='Username' onChange={(event) => { setNewUsername(event.target.value); }} />
                <input placeholder='Password' type="password" onChange={(event) => { setNewPassword(event.target.value); }} />
                <input placeholder='Confirm Password' type="password" onChange={(event) => { setNewCnfmPW(event.target.value); }} />
                <button onClick={createUser}>Submit</button>
            </div>
        </div>
         );
}

export default Signup;