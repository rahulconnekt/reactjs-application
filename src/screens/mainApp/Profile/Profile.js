import React from "react";
import styles from "./Profile.module.css";
import { useBorderSelectStyles } from "@mui-treasury/styles/select/border";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { blue, grey } from "@material-ui/core/colors";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "50em",
		},
	},
	select: {
		minWidth: "20.5vw",
		["@media (min-width: 321px) and (max-width: 374px)"]: {
			minWidth: "89vw",
		},
		["@media (min-width: 375px) and (max-width: 400px)"]: {
			minWidth: "85vw",
		},
		["@media (max-width:320px)"]: {
			minWidth: "98vw",
		},
		["@media (min-width: 426px) and (max-width: 768px)"]: {
			minWidth: "60vw",
		},
		background: "white",
		color: grey[700],
		borderColor: "#D7DAE2",
		borderStyle: "solid",
		borderWidth: "2px",
		borderRadius: "4px",
		paddingLeft: "5px",
		paddingTop: "10px",
		paddingBottom: "10px",
		"&:hover": {
			borderColor: grey[400],
		},
		"&:focus": {
			borderRadius: "4px",
			background: "white",
			borderColor: blue[200],
		},
	},
	icon: {
		color: grey[500],
		right: 12,
		position: "absolute",
		userSelect: "none",
		pointerEvents: "none",
	},
	list: {
		paddingTop: 0,
		paddingBottom: 0,
		background: "white",
		color: "#4d4f5c",
		fontSize: "smaller",
		"& li.Mui-selected": {
			fontWeight: 400,
		},
	},
}));

const Dropdown = (props1) => {
	const [val, setVal] = React.useState(0);

	const handleChange = (event) => {
		setVal(event.target.value);
	};

	const borderSelectClasses = useBorderSelectStyles();
	const menuProps = {
		classes: {
			list: borderSelectClasses.list,
		},
		anchorOrigin: {
			vertical: "bottom",
			horizontal: "left",
		},
		transformOrigin: {
			vertical: "top",
			horizontal: "left",
		},
		getContentAnchorEl: null,
	};

	const classes = useStyles();

	const iconComponent = (props) => {
		return (
			<ExpandMoreIcon
				className={props.className + " " + borderSelectClasses.icon}
			/>
		);
	};

	return (
		<FormControl>
			<Select
				disableUnderline
				labelId="inputLabel"
				placeholder={props1.holder}
				IconComponent={iconComponent}
				className={classes.select}
				MenuProps={menuProps}
				value={val}
				onChange={handleChange}
				style={{
					marginRight: "2%",
				}}
			>
				<MenuItem value={0}> {props1.holder} </MenuItem>{" "}
				<MenuItem value={1}> One </MenuItem>{" "}
				<MenuItem value={2}> Two </MenuItem>{" "}
				<MenuItem value={3}> Three </MenuItem>{" "}
			</Select>
		</FormControl>
	);
};

export default function Profile(props) {
	const classes = useStyles();
	const [state, setState] = React.useState({
		age: "",
	});

	const [checkState, setCheckState] = React.useState({
		checkedA: true,
		checkedB: true,
		checkedC: true,
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
		<>
			<div className={styles.row1}>
				<TextField
					id="outlined-basic"
					label={<span className={styles.label}>First Name</span>}
					variant="outlined"
					style={{ width: "45%" }}
				/>
				<TextField
					id="outlined-basic"
					label={<span className={styles.label}>Last name</span>}
					variant="outlined"
					style={{ width: "45%" }}
				/>
			</div>
			<div className={styles.row1}>
				<TextField
					id="outlined-basic"
					label={<span className={styles.label}>Username</span>}
					variant="outlined"
					style={{ width: "45%" }}
				/>
				<TextField
					id="outlined-basic"
					label={<span className={styles.label}>E-mail address</span>}
					variant="outlined"
					style={{ width: "45%" }}
				/>
			</div>
			<div className={styles.row1}>
				<TextField
					id="outlined-basic"
					label={<span className={styles.label}>Phone number</span>}
					variant="outlined"
					style={{ width: "45%" }}
				/>
				<TextField
					id="outlined-basic"
					label={
						<span className={styles.label}>
							Emergency phone number
						</span>
					}
					variant="outlined"
					style={{ width: "45%" }}
				/>
			</div>
			<div className={styles.row2} style={{}}>
				<Dropdown holder="Blood Group" />
				<Dropdown holder="Preferred Language" />
			</div>
		</>,
		<>
			<div className={styles.row1}>
				<TextField
					id="outlined-basic"
					label={<span className={styles.label}>Address</span>}
					variant="outlined"
					size="normal"
					style={{ width: "100%" }}
				/>
			</div>
			<div className={styles.row1}>
				<Dropdown holder="Blood Group" />
				<Dropdown holder="Blood Group" />
			</div>
			<div className={styles.row1}>
				<Dropdown holder="Blood Group" />
				<TextField
					id="outlined-basic"
					label={<span className={styles.label}>Postal Code</span>}
					variant="outlined"
					style={{ width: "45%" }}
				/>
			</div>
		</>,
		<>
			<div className={styles.row1} style={{ justifyContent: "center" }}>
				<span className={styles.lastFormElement}>
					Review the change and Submit!
				</span>
			</div>
		</>,
	];
	return (
		<div className={styles.formDiv}>
			<form className={classes.root} noValidate autoComplete="off">
				{forms[props.formNumber]}
			</form>
		</div>
	);
}
