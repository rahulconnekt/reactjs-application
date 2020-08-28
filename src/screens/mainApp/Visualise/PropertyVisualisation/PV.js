import React, { useState } from "react";
import { useBorderSelectStyles } from "@mui-treasury/styles/select/border";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { blue, grey } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import styles from "./PV.module.css";
import { Map, GoogleApiWrapper } from "google-maps-react";
const useStyles = makeStyles(() => ({
	select: {
		minWidth: "18vw",
		["@media (min-width: 320px) and (max-width: 375px)"]: {
			minWidth: "25vw",
		},
		["@media (min-width: 376px) and (max-width: 425px)"]: {
			minWidth: "25vw",
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
		right: 12,
		position: "absolute",
		userSelect: "none",
		pointerEvents: "none",
	},
	list: {
		paddingTop: 0,
		paddingBottom: 0,
		background: "white",
		fontSize: "smaller",
		color: "#64686D",
		"& li.Mui-selected": {
			fontWeight: 400,
		},
	},
}));
const BorderSelect = (props1) => {
	const [val, setVal] = useState(0);

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
				style={{ color: "#F2134F" }}
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
				<MenuItem value={0} disabled>
					{props1.holder}
				</MenuItem>
				<MenuItem value={1}>Overall Property Visualization</MenuItem>
				<MenuItem value={2}> Overall New Property</MenuItem>
				<MenuItem value={3}> Overall Failed Property </MenuItem>
				<MenuItem value={4}>Overall Aborted Property</MenuItem>
				<MenuItem value={5}>Overall Mapped Property</MenuItem>
				<MenuItem value={6}>Overall Dustbin Pick-ups</MenuItem>
			</Select>
		</FormControl>
	);
};

export default function PV(props) {
	return (
		<div className={styles.mainDiv}>
			<div className={styles.firstDiv}>
				<span
					style={{
						color: "#F2134F",
						fontSize: "20px",
						fontWeight: "bold",
						marginLeft: "3%",
						marginTop: "10%",
					}}
				>
					Property Visualize
				</span>
				<span
					style={{
						color: "#43425D",
						fontSize: "large",
						marginLeft: "3%",
						marginTop: "10%",
					}}
				>
					Property Visualization
				</span>
				<div
					style={{
						marginLeft: "3%",
						marginTop: "5%",
					}}
				>
					<BorderSelect holder="Select" />
					<div className={styles.innerDiv}>
						<span style={{ color: "#64686D", fontSize: "small" }}>
							Overall Property Visualization
						</span>
						<span style={{ color: "#64686D", fontSize: "small" }}>
							Overall New Property
						</span>
						<span style={{ color: "#64686D", fontSize: "small" }}>
							Overall Failed Property
						</span>
						<span style={{ color: "#64686D", fontSize: "small" }}>
							Overall Aborted Property
						</span>
						<span style={{ color: "#64686D", fontSize: "small" }}>
							Overall Mapped Property
						</span>
						<span style={{ color: "#64686D", fontSize: "small" }}>
							Overall Dustbin Pick-ups
						</span>
					</div>
					<Button
						variant="contained"
						style={{
							backgroundColor: "#F2134F",
							marginLeft: "35%",
							color: "white",
							marginTop: "10%",
							fontSize: "small",
						}}
					>
						SUBMIT
					</Button>
				</div>
			</div>
			<div className={styles.secondDiv}>
				<Map
					google={props.google}
					zoom={14}
					style={{ width: "100%", height: "100%" }}
					initialCenter={{
						lat: -1.2884,
						lng: 36.8233,
					}}
				/>
			</div>
		</div>
	);
}
