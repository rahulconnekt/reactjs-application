import React from 'react'
import styles from './AddOrganisation.module.css'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '100%',
		},
	},
}));



export default function AddOrganisation(props) {
	const classes = useStyles();
	const [state, setState] = React.useState({
		age: '',
	});

	const [checkState, setCheckState] = React.useState({
		checkedA: true,
		checkedB: true,
		checkedC: true
	});

	const handleChange = (event) => {
		const name = event.target.name;
		setState({
			...state,
			[name]: event.target.value,
		});
	};

	const handleCheckChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};

	const forms = [
		(
			<>
				<div className={styles.row1}>
					<TextField id="outlined-basic" label={<span className={styles.label}>Organisation Name</span>} variant="outlined" size='normal' style={{ width: '40%' }} />
					<TextField id="outlined-basic" label={<span className={styles.label}>Sub domain name</span>} variant="outlined" size='normal' style={{ width: '40%' }} />
				</div>
				<div className={styles.row1}>
					<FormControl variant="outlined" className={classes.formControl} style={{ width: '40%' }}>
						<InputLabel htmlFor="outlined-age-native-simple">{<span className={styles.label}>Select State</span>}</InputLabel>
						<Select
							native
							value={state.age}
							onChange={handleChange}
							label="Select State"
							inputProps={{
								name: 'age',
								id: 'outlined-age-native-simple',
							}}
						>
							<option aria-label="None" value="" />
							<option value={10}>Ten</option>
							<option value={20}>Twenty</option>
							<option value={30}>Thirty</option>
						</Select>
					</FormControl>
					<FormControl variant="outlined" className={classes.formControl} style={{ width: '40%' }}>
						<InputLabel htmlFor="outlined-age-native-simple">{<span className={styles.label}>Select District</span>}</InputLabel>
						<Select
							native
							value={state.age}
							onChange={handleChange}
							label="Select District"
							inputProps={{
								name: 'age',
								id: 'outlined-age-native-simple',
							}}
						>
							<option aria-label="None" value="" />
							<option value={10}>Ten</option>
							<option value={20}>Twenty</option>
							<option value={30}>Thirty</option>
						</Select>
					</FormControl>
				</div>
				<div className={styles.row1}>
					<TextField id="outlined-basic" label={<span className={styles.label}>Postal Code</span>} variant="outlined" size='normal' style={{ width: '40%' }} />
					<TextField id="outlined-basic" label={<span className={styles.label}>Prefix</span>} variant="outlined" size='normal' style={{ width: '40%' }} />
				</div>
			</>
		),
		(
			<>
				<div className={styles.row1}>
					<TextField id="outlined-basic" label={<span className={styles.label}>Search name</span>} variant="outlined" size='normal' style={{ width: '40%' }} />
					<FormControl variant="outlined" className={classes.formControl} style={{ width: '40%' }}>
						<InputLabel htmlFor="outlined-age-native-simple">{<span className={styles.label}>Role</span>}</InputLabel>
						<Select
							native
							value={state.age}
							onChange={handleChange}
							label="Select District"
							inputProps={{
								name: 'age',
								id: 'outlined-age-native-simple',
							}}
						>
							<option aria-label="None" value="" />
							<option value={10}>Ten</option>
							<option value={20}>Twenty</option>
							<option value={30}>Thirty</option>
						</Select>
					</FormControl>
				</div>
			</>
		),
		(
			<div className={styles.checked}>
				<FormControlLabel
					control={
						<Checkbox
							checked={state.checkedB}
							onChange={handleCheckChange}
							name="checkedA"
							color="primary"
						/>
					}
					label="Module 1"
				/>
				<FormControlLabel
					control={
						<Checkbox
							checked={state.checkedB}
							onChange={handleCheckChange}
							name="checkedB"
							color="primary"
						/>
					}
					label="Module 2"
				/>
				<FormControlLabel
					control={
						<Checkbox
							checked={state.checkedB}
							onChange={handleCheckChange}
							name="checkedC"
							color="primary"
						/>
					}
					label="Module 3"
				/>
			</div>
		),
		(
			<>
				<div className={styles.row1}>
					<span className={styles.lastFormElement}>Review Organisation Details and Submit!</span>
				</div>
			</>
		)
	]
	return (
		<div className={styles.formDiv}>
			<form className={classes.root} noValidate autoComplete="off">
				{forms[props.formNumber]}
			</form>
		</div>
	)
}