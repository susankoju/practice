import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './styles.css';

/*
const validate = values => {
    const errors = {};
    if (!values.firstName) {
	errors.firstName = 'Required!';
    } else if (values.firstName.length > 15) {
	errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
	errors.lastName = 'Required!';
    } else if (values.lastName.length > 15) {
	errors.lastName = 'Must be 15 characters or less';
    }

    if (!values.email) {
	errors.email = 'Required!';
    } else if (!/^[A-Z-0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}%/i.test(values.email)) {
	errors.email = 'Invalid email address';
    }

    return errors;
};
*/

const SignupForm = () => {

    const formik = useFormik({
	initialValues: {
	    email: '',
	    firstName: '',
	    lastName: '',
	},
	//validate,
	validationSchema: Yup.object({
	    firstName: Yup.string()
		.max(15, 'Must be 15 characters or less')
		.required('Required!'),
	    lastName: Yup.string()
		.max(15, 'Must be 15 characters or less')
		.required('Required!'),
	    email: Yup.string()
		.email('Invalid email address')
		.required('Required'),
	}),
	onSubmit: values => {
	    alert(JSON.stringify(values, null, 2));
	},
    });
    return(
	    <form onSubmit={formik.handleSubmit}>
	      <label htmlFor="firstname">First Name</label>
	      <input
		id="firstName"
		name="firstName"
		type="text"
		//onBlur={formik.handleBlur}
		//onChange={formik.handleChange}
		//value={formik.values.firstName}
		{...formik.getFieldProps('firstName')}
		/>
	      {formik.errors.firstName && formik.touched.firstName ? <div>{formik.errors.firstName}</div> : null}
	      <label htmlFor="lastName">Last name</label>
	      <input
		id="lastName"
		name="lastName"
		type="text"
		onBlur={formik.handleBlur}
		onChange={formik.handleChange}
		value={formik.values.lastName}
		/>
	      {formik.errors.lastName && formik.touched.lastName ? <div>{formik.errors.lastName}</div> : null}
	      <label htmlFor="email">Email Address
	      </label>
	      <input id="email" name="email" type="email"
		onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />
	      {formik.errors.email && formik.touched.email ? <div>{formik.errors.email}</div> : null}
	      <button types="submit">Submit</button>
	    </form>
    );
};

ReactDOM.render(<SignupForm />, document.getElementById('root'));
