import React,{useState} from 'react'

export const Element = () => {
    const [element, setelement] = useState(
        {"fName":"","lName":"","dob":"","email":"","mobileNumber":""})
        const [elements, setelements] = useState([])
        const [index, setindex] = useState(0)

        const handleChange=(e)=>{
            let newElement ={...element};//creating copy of an object
            newElement[e.target.name]= e.target.value;//name:will know what we are typing ex:fname,email,productname,password
            setelement(newElement)
        };
        const handleSubmit=()=>{
            console.log(element)
            let newElements=[...elements]
            newElements.push(element)
            setelements(newElements)//use todisplay the data one by one.
            ClearForm()
        };
        const ClearForm=()=>{
            setelement( {"fName":"","lName":"","dob":"","email":"","mobileNumber":""})

        }
        const deleteelement=(fName)=>{
            let newElements=elements.filter((myElement)=>myElement.fName !=fName);
            setelements(newElements)
        }
        const handleEdit=(myElement,i)=>{
            setelement(myElement);
            setindex(i)//i is saved in indexvalue
    
        }
    
        const handleUpdate=()=>{
            let newElements =[...elements];
            newElements[index]=element;//index:what ever row we are clicking it will save in another button.
            setelements(newElements)
            ClearForm()
        }
        const{fName,lName,dob,email,mobileNumber}=element;

  return (
         <div>
                  <h2>HTML FORM</h2>

          <form> 
            <label htmlFor="">First Name:</label> 
            <input type="text" name="fName" value={fName} onChange={(e)=>{handleChange(e)}}/><br/>
            <label htmlFor="">Last Name:</label> 
            <input type="text" name="lName" value={lName} onChange={(e)=>{handleChange(e)}}/><br/>
            <label htmlFor="">Date of Birth:</label> 
            <input type="text" name="dob" value={dob} onChange={(e)=>{handleChange(e)}} /><br/>
            <label htmlFor="">Email :</label> 
            <input type="text" name="email" value={email} onChange={(e)=>{handleChange(e)}}/><br/>
            <label htmlFor="">Mobile Number:</label> 
            <input type="text" name="mobileNumber" value={mobileNumber} onChange={(e)=>{handleChange(e)}}/><br/>
            <button onClick={handleSubmit} type="button">SUBMIT</button>
            <button onClick={handleUpdate} type="button">Update</button>
          </form>
          <div className="container">
      <table className="table table-success table-striped-columns">
        <thead>
          <tr>
            <th >First Name</th>
            <th >Last Name</th>
            <th > Date of Birth</th>
            <th >Email</th>
            <th>Mobile Number</th>
            <th> Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
      {elements.map((element,i)=>{
        return <tr key={i}>
          <td >{element.fName}</td>
          <td >{element.lName}</td>
          <td >{element.dob}</td>
          <td >{element.email}</td>
          <td >{element.mobileNumber}</td>
          <td><button type="button" className='btn btn-warning' onClick={()=>{handleEdit(element,i)}}>Edit</button></td>
          <td><button type="button" className='btn btn-danger' onClick={()=>{deleteelement(element.fName)}}>Delete</button></td>

        </tr>
      })}
        </tbody>
        </table>
    </div>
          </div>
  )
}