import { useState } from "react";
import axios from "axios";

export const Form13=()=> {
  const [image, setImage] = useState('')

  const handleChange = (e) => {
    console.log(e.target.files)
    setImage(e.target.files[0])
  }

  const handleApi = () => {
    //call the api
    const url = 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'

    const formData = new FormData()
    formData.append('image', image)
    axios.post(url, formData).then(result => {
      console.log(result.data)
      alert('success')
    })
      .catch(error => {
        alert('service error')
        console.log(error)
      })
  }

  return (
    <div>
      IMAGE UPLOAD
      <input type="file" onChange={handleChange} /> <br />
      <button onClick={handleApi} >SUBMIT</button>
    </div>
  );
}

