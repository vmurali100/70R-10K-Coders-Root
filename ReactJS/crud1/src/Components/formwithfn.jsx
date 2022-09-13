import React, {useState} from 'react'

export const Formwithfn = () => {
    const [userDetails, setuserDetails] = useState({
        Username:"",
        Password:"",
        EmailAddress:"",
        Dob:"",
        Ht:"",
        Wt:"",

    })
    const [usersData, setusersData] = useState([]);
    const [index, setindex] = useState(0);
    const {Username,Password,EmailAddress,Dob, Ht,Wt} = {userDetails};
    const [genderDes, setgenderDes] = useState(["I am a man","I am a women"]);
    const [genderOpp, setgenderOpp] = useState(["I want to find man","I want to find  women"])

  return (
    <div>
        <form action="">
            <label htmlFor="">Username</label><br />
            <input type="text" name="Username" value={Username} /><br />
            <label htmlFor="">Password</label><br />
            <input type="text" name="Password" value={Password} /><br />
            <label htmlFor="">EmailAddress</label><br />
            <input type="text" name="EmailAddress" value={EmailAddress} /><br />
            <select name="" id="">
            {genderDes.map((gen)=> <option value={gen}>{gen}</option>)}
            </select><br />
            <select name="" id="">
            {genderOpp.map((gen)=> <option value={gen}>{gen}</option>)}
            </select><br />
            <label htmlFor="">Dob</label><br />
            <select name="" id="" type="date">
            <option value="" type="date"></option> 
            </select>
                 <br />
            <label htmlFor="">Ht/Wt</label><br />
            
        </form>
    </div>
  )
}
