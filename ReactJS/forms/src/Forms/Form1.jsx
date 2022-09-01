import React from 'react'

export const Form1 = () => {
  return (
    <div>
      <h2>Address</h2> <hr />
      <form action="">
        <table align='center'>
          <tr>
            <td><label htmlFor="">Street :</label></td>
            <td><input type="text" /><br />
              <input type="text" /></td>
          </tr>
          <tr>
            <td><label htmlFor="">City : </label></td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td><label htmlFor="">State : </label></td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td><label htmlFor="">ZipCode : </label></td>
            <input type="text" />
          </tr>
          <tr>
            <td><label htmlFor="">Country : </label></td>
            <td><input type="text" /></td>
          </tr>
          </table>
        <button type='button' >Okay</button>
        <button type="button">Cancel</button>
        
      </form>
    </div>
  )
}
