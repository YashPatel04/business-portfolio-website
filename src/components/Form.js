import React from 'react';
import './Form.css';
import{IconMapPinFilled,IconPhoneFilled,IconMailFilled} from '@tabler/icons-react';
import {useForm} from "react-hook-form";
function Form() {
  const { register, handleSubmit, formState:{errors, isValid} } = useForm({mode: 'onChange',criteriaMode: 'all'});
  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <div className='page'>
      <div className='Tone-1'></div>
      <div className='content'>
        <section className='dialouge'>
         <div className='talk'> 
        <h2>Talk with our team</h2>
        <br></br>
        <p>Fill out your information and an our representative will reach out to you.</p>
        </div>
        <div className='cards'>
          <a><IconMapPinFilled/><h2>Address</h2></a>
          <p>577 Barnes Blvd Suite 650, Rockledge, FL, 32955.</p>
        </div>
        <div className='cards'>
          <a><IconPhoneFilled/><h2>Call us</h2></a>
          <p>+1 386-XXX-XXXX</p>
        </div>
        <div className='cards'>
          <a><IconMailFilled/><h2>E-mail us</h2></a>
          <p>email@email.com</p>
        </div>
        </section>
        <div className='form-container'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-item'>
            <label>First Name<a className='asterisk'>*</a></label>
            <input className='box' name="firstName" {...register("firstName",{required:true})}/>
            {errors.firstName && <p className='warnings'>First name is required.</p>}
          </div>
          <div className='form-item'>
            <label>Last Name</label>
            <input className='box' name="lastName" {...register("lastName",{required:false})}/>
          </div>
          <div className='form-item'>
            <label>Phone Number<a className='asterisk'>*</a></label>
            <input className='box' name="phone" {...register("phone",{required:true , pattern: /^(?:\+1)?\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/})}/>
            {/* 
            This regex pattern allows for phone numbers in various formats, such as:
            (123) 456–7890
            123–456–7890
            123.456.7890
            1234567890
            +11234567890
            */}
            {errors.phone && <p className='warnings'>Phone number is required and must be valid.</p>}
          </div>
          <div className='form-item'>
            <label>Email<a className='asterisk'>*</a></label>
            <input className='box' name="email" {...register("email",{required:true, pattern:/^\S+@\S+$/i})}/>
            {errors.email && <p className='warnings'>Email is required and must be valid.</p>}
          </div>
          <div className='form-item'>
            <label>Message<a className='asterisk'>*</a></label>
            <textarea
            id='message'
            name='message'
            rows='4'
            className='box'
            {...register('message', { required: true })}></textarea>
            {errors.message && <p className='warnings'>Message is required.</p>}
          </div>
          <div className='form-item'>
          <button  id='submit' type="submit" disabled={!isValid}>Submit</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
