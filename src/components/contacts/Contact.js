import React from 'react'
import { useSelector } from 'react-redux';

const Contact = () => {

  const contacts = useSelector((state)=>state.contacts)
  console.log(contacts);
    return (
        <div>
          <table class="table shadow">
  <thead>
    <tr>
      <th >
        <div className="custom-controls custom-checkbox">
          <input type="checkbox" className=""></input>
          <label className="custom-controls-label"></label>
        </div>
      
      </th>
      <th >Name</th>
      <th >Phone</th>
      <th >Email</th>
    </tr>
  </thead>
  <tbody>
    {contacts.map((contact)=>{
    return (<tr>
      <td scope="row">  <div className="custom-controls custom-checkbox">
          <input type="checkbox" className=""></input>
          <label className="custom-controls-label"></label>
        </div>
        </td>
      <td>{contact.name}</td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
    </tr>)
  })}
   
  </tbody>
</table>
        </div>
    )
}


export default Contact;