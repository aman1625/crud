import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../store';

export const Addcontact = () => {
    const [name , setName] = useState("");
    const[email , setEmail] = useState("");
    const[phone , setPhone] = useState("");

    const dispatch = useDispatch();
  
    function createContact(e){
        e.preventDefault();
        console.log("name:", name);

        const new_contact = {
            name: name,
            phone: phone,
            email:email
        }
        dispatch(addContact(new_contact))
    }

    return (
        <div>
            <div className="card border-0 shadow">
                <div className="card-header">Add a contact</div>
                <div className="card-body"></div>
                <form onSubmit={(e)=>createContact(e)}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="enter your name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="enter your name"
                        value={phone}
                        onChange={(e)=>setPhone(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="enter your name"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-primary" type="submit">Add</button>
                </form>
            </div>
        </div>
    )
}