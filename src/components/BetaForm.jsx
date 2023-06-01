import React, {useState} from 'react'
import { FirebaseApp, db } from '../config/firbase';
import 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';


function BetaForm(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      // Handle form submission here, such as sending the data to an API
      // Access the Firestore instance


  try {
    // Write the data to the "betaList" collection
    const docRef = await addDoc(collection(db, 'betaList'), {
      name: name,
      email: email,
    });

    console.log('Document written with ID: ', docRef.id);
    // Display a success alert
    alert('Congrats!! You are on the list!');
    // Clear the form fields
    setName('');
    setEmail('');
  } catch (error) {
    console.error('Error adding document: ', error);
  }

  
      // Clear the form fields
      setName('');
      setEmail('');
    };
  
    return (
      <form onSubmit={handleSubmit} className="flex flex-col space-y-5 w-[400px] ">
        <label className="flex flex-col text-sm font-bold">
          <p className="text-white">Name</p>
          <input
            className="rounded-lg h-10 px-2 "
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </label>
  
        <label className="flex flex-col text-sm font-bold ">
          <p className="text-white">Email</p>
          <input
          className="rounded-lg h-10 px-2 "
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </label>
  
        <button className="border border-tulip-tree-600 py-2 rounded-lg text-tulip-tree-700 font-bold hover:bg-[#ecbc5d20] duration-300 ease-in-out" type="submit">Sign Up For Beta</button>
      </form>
    );
}

export default BetaForm