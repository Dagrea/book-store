import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const validationSchema = yup.object({
	firstName: yup
		.string()
		.min(3, 'First name should be of minimum 3 characters length')
		.required('First name is required'),
	lastName: yup
		.string()
		.min(3, 'Last name should be of minimum 3 characters length')
		.required('Last name is required'),
	phone: yup
		.string()
		.min(8, 'Phone number should be of minimum 8 characters length')
		.required('Phone number is required'),
	email: yup.string().email('Enter a valid email').required('Email is required'),
	password: yup
		.string()
		.min(8, 'Password should be of minimum 8 characters length')
		.required('Password is required'),
});

const Registration = () => {
	const formik = useFormik({
		initialValues: {
	firstName: '',
	lastName: '',
	phone: '',
	email: '',
	password: '',
},
		validationSchema: validationSchema,
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	return (
		<div>
		<Container sx={{ minHeight: '100vh', justifyContent: 'center' }}>
			<h1>Registration</h1>
			<h5>Be sure to fill all fields</h5>
			<form onSubmit={formik.handleSubmit}>
			<TextField
					fullWidth
					id='firstName'
					name='firstName'
					label='First name'
					value={formik.values.firstName}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.firstName && Boolean(formik.errors.firstName)}
					helperText={formik.touched.firstName && formik.errors.firstName}
					sx={{ m: '20px' }}
				/>
				<TextField
					fullWidth
					id='lastName'
					name='lastName'
					label='Last name'
					type='lastName'
					value={formik.values.lastName}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.lastName && Boolean(formik.errors.lastName)}
					helperText={formik.touched.lastName && formik.errors.lastName}
					sx={{ m: '20px' }}
				/>
				<TextField
					fullWidth
					id='phone'
					name='phone'
					label='Phone number'
					type='phone'
					value={formik.values.phone}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.phone && Boolean(formik.errors.phone)}
					helperText={formik.touched.phone && formik.errors.phone}
					sx={{ m: '20px' }}
				/>
				<TextField
					fullWidth
					id='email'
					name='email'
					label='Email'
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.touched.email && formik.errors.email}
					sx={{ m: '20px' }}
				/>
				<TextField
					fullWidth
					id='password'
					name='password'
					label='Password'
					type='password'
					value={formik.values.password}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.password && Boolean(formik.errors.password)}
					helperText={formik.touched.password && formik.errors.password}
					sx={{ m: '20px' }}
				/>
				<Button color='primary' variant='contained' fullWidth type='submit'>
					Submit
				</Button>
			</form>
			</Container>
		</div>
		);
};

export default Registration;
