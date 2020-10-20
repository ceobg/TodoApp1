import React, { useReducer, useState } from 'react';
const formReducer = (state, event) => {
  if (event.reset) {
    return {
      name: '',
      email: 0,
      password: { value: '', isValid: true, },
      message: '',
      choose: '',
      signup: '',
      'accept': true,
    }
  }
  return {
    ...state,
    [event.name]: event.value
  }
}

function Contact() {
  const [formData, setFormData] = useReducer(formReducer, {
  });
  const [submitting, setSubmitting] = useState(true);

  const handleSubmit = event => {
    event.preventDefault();
    alert('Hey gorgeous! Thanks for submitting the form.')
    setSubmitting(true);
    console.log(formData);

    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true
      })
    }, 3000)
  }

  const handleChange = event => {
    const isCheckbox = event.target.type === 'checkbox';
    setFormData({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value,
    });
  }
  const handleClick = e => {
    const buttonValue = e.target.value === 'purpleflower';
    console.log(buttonValue);
  }

  return (
    <div className="d-flex justify-content-center">
        <React.Fragment>
    <div className="row h-75 justify-content-center align-items-center">
      <form className="form-dark" onSubmit={handleSubmit}>

        <div className="card card-image justify-content-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/57401/flowers-nature-macro-petals-57401.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')", width: '28rem', }}>
          <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">

            {submitting &&
              <div>
                You are submitting the following:
         <ul>
                  {Object.entries(formData).map(([name, value]) => (
                    <h3 key={name}><strong>{name}</strong>✦{value.toString()}</h3>

                  ))}
                </ul>
              </div>
            }

            <div className="text-center">
              <h3 className="mb-5 mt-4 font-weight-bold"><strong>LOG</strong> <a href="./"
                className="font-weight-bold"><strong> IN</strong></a></h3>
            </div>
      
            <div className="md-form">
              <input type="text" id="name3" className="form-control" name="name" placeholder="name" onChange={handleChange} value={formData.name} style={{ backgroundColor: 'rgb(170, 89, 245)', color: 'blue', fontWeight: 'bold', WebkitTextFillColor: 'orange', boxShadow: 'none', borderColor: 'black', }} />
              <label for="Form-email5"><h6>Your name</h6></label>
            </div>

            <div className="md-form">
              <input type="text" id="Form-email" className="form-control" name="email" placeholder="email" onChange={handleChange} value={formData.email} style={{ backgroundColor: 'rgb(170, 89, 245)', color: 'blue', fontWeight: 'bold', WebkitTextFillColor: 'orange', boxShadow: 'none', borderColor: 'black', }} />
              <label for="Form-email5"><h6>Your email</h6></label>
            </div>

            <div className="md-form pb-3">
              <input type="password" id="Form-pass" className="form-control is-valid" name="password" placeholder="password" value={formData.password} style={{ backgroundColor: 'rgb(170, 89, 245)', color: 'blue', fontWeight: 'bold', WebkitTextFillColor: 'orange', boxShadow: 'none', borderColor: 'black', }} />
              <label for="Form-pass5"><h6>Your password</h6></label>


              <div class="md-form">
                <textarea type="text" id="message" placeholder="message" rows="2" name="message" className="form-control md-textarea" onChange={handleChange} value={formData.message} style={{ backgroundColor: 'rgb(170, 89, 245)', color: 'blue', fontWeight: 'bold', WebkitTextFillColor: 'orange', boxShadow: 'none', borderColor: 'black', }}></textarea>
                <label for="message"><h6>Your message</h6></label>
              </div>


              <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Preference</label>
              <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="choose" value={formData.choose} onChange={handleChange} required style={{ backgroundColor: 'rgb(170, 89, 245)', color: 'blue', fontWeight: 'bold', WebkitTextFillColor: 'orange', boxShadow: 'none', borderColor: 'black', }}>
                <option selected>Choose...</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
                <option value="3">I'll think about it.</option>
              </select>

              <div class="custom-control custom-checkbox my-1 mr-sm-2 d-flex justify-content-end">
                <input type="checkbox" class="custom-control-input" id="customControlInline" onChange={handleChange} name="signup" value={formData.signup} />
                <label class="custom-control-label" for="customControlInline"><h4>Sign me up love!</h4></label>
              </div>

              <br />
              <div className="form-check d-flex align-items-center mb-4">
                <input className="form-check-input" type="checkbox" name="radio-check" value="check mate!" id="defaultCheck17" onChange={handleChange} checked={formData['radio']} />
                <label className="form-check-label font-weight-bold" for="defaultCheck17"><h3><strong>Accept the</strong></h3><h3
                  className="green-text font-weight-bold">Terms and Conditions </h3></label>

              </div>
            </div>

            <div className="row d-flex align-items-center mb-4">

              <div className="text-center mb-3 col-md-12">
                <button style={{ boxShadow: 'none', }} onClick={handleClick} className="btn btn-light btn-block btn-rounded" value="pressed"><h4>Sign in</h4></button>
              </div>
             
            </div>

            <div className="col-md-12">
              <p className="font-small white-text d-flex justify-content-end">Have an account? <a href="./contact"
                className="green-text ml-1 font-weight-bold"> Log in</a></p>
            </div>

          </div> </div>
      </form>
    </div>
    </React.Fragment>
    </div>
  );
}



export default Contact;