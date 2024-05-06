import React from 'react'
import img from "./image5.png";
export default function AddPriscription(){
  return (
    <>
    
    
    <div className='container d-flex justify-content-center pt-5 gap-5 bg-light book'>
        <img src={img} alt="bg"  className='w-25 h-25 rounded pt-5'/>
        <form className='d-flex flex-column gap-2'>
            <h4>Priscription</h4>
            <input type="text" placeholder='Enter Medicine name' required/>
            <input type="text" placeholder='condition' required/>
            <textarea name="text" id="" cols="30" rows="10" placeholder='Feedback'></textarea>
            <button type='sumbit' className='btn btn-primary rounded mb-5'>send</button>
        </form>
    </div>
    
    </>
  )
}
