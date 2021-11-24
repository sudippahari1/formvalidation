import React, {useState} from 'react'

function Main() {

    const [username , setUsername]=useState('');
    const [email , setEmail]= useState('');
    const [password , setPassword]= useState('');
    const [cpassword , setCpassword] = useState('');

    const [eUsername , setEusername]= useState('');
    const [eEmail , setEemail]= useState('');
    const [ePassword , setEpassword] = useState('');
    const [eCpassword, setEcpassword] = useState('');


    const [uColor , setUcolor] = useState('');
    const [eColor , setEcolor] = useState('');
    const [pColor , setPcolor] = useState('');
    const [cColor , setCcolor] = useState('');


    function validate(){
        if(username.length>8){
            setEusername('')
            setUcolor('green')
        }else{
            setEusername('username must be of 8 characters')
            setUcolor('red')
        }
        if(email.includes('@.'))
        {
            setEemail('')
            setEcolor('green')
        }else{
            setEcolor('red')
            setEemail('email must contain @ and .')
        }
        

        if(password.length>8 & password.includes('.'))
        {
            setEpassword('')
            setPcolor('green')
        }
        else{
            setEpassword('password must contain 8 character & .')
            setPcolor('red')
        }

        if(cpassword!='' & password==cpassword){
            setEcpassword('')
            setCcolor('green')
        }
        else{
            setEcpassword('password does not matched')  
            setCcolor('red')
        }
    }

    return (
        <div>
            <div className="row justify-content-center">
                <div className='col-md-5 shadow-lg p-3 mb-5 bg-white rounded'>
                    <h1>Form Validation</h1>

                    <input type='text' placeholder='username' className='form-control' style={{borderColor:uColor}}
                    value={username} onChange={(e)=>{setUsername(e.target.value)}}
                     />
                     <p>{eUsername}</p>

                    <input type='text' placeholder='email' className='form-control' style={{borderColor:eColor}}
                    value={email} onChange={(e)=>{setEmail(e.target.value)}}
                    />
                    <p>{eEmail}</p>

                    <input type='text' placeholder='password' className='form-control' style={{borderColor:pColor}}
                        value={password} onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    <p>{ePassword}</p>

                    <input type='text' placeholder='Confirm password' className='form-control' style={{borderColor:cColor}}
                        value={cpassword} onChange={(e)=>{setCpassword(e.target.value)}}
                    />
                    <p>{eCpassword}</p>
                    
                    <button className='btn btn-success' onClick={validate}>SUBMIT</button>
                </div>
            </div>
        </div>
    )
}

export default Main;