import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'

export class Userform extends Component {

    state ={
        step: 1,
        firstname: '',
        lastname: '',
        email:'',
         maidenname:'',
          title:'',
          status:'',
          address:'',
          phone:'',
           dob:'',
           pob:'',
           nationality:'',
           nin:'',
           skype:'',
           drivinglicense:'',
           securityquestion:'',
           age:'',
           updateField:''


    }

    //procees to next step
    nextStep =()=>{
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }
    //prev step
    prevStep =()=>{
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    //handle field change
    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }



  render() {
    const {step}= this.state;
    const {firstname, lastname, maidenname, title, status, address, phone, email, 
        dob, pob, nationality, nin, skype, drivinglicense, securityquestion, age, updateField} = this.state;
    const values = {firstname, lastname, maidenname, title, status, address, phone, email, 
        dob, pob, nationality, nin, skype, drivinglicense, securityquestion, age, updateField}

        
   switch(step) {
    case 1:
        return(
            <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            />
        )
    case 2:
        return <h1>FormPersonalDetails</h1>
    case 3:
        return <h1>Confirm</h1>
    case 4:
        return <h1>Success</h1>

   }

  }
}

export default Userform
