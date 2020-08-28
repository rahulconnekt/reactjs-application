import React from "react";
import minimize from "../../../../../../../Assets/minimize.png";
import TextField from "@material-ui/core/TextField";
import styles from "./InstZoom.module.css";

export function Initial(props) {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				padding: "2%",
			}}
		>
			<div
				style={{
					backgroundColor: props.color,
					borderRadius: "5px",
					width: "1.5vw",
					height: "1vw",
					marginRight: "1%",
				}}
			></div>
			<span
				style={{
					color: "#4D4F5C",
					whiteSpace: "nowrap",
					fontSize: "small",
					textAlign: "center",
				}}
			>
				{props.info}
			</span>
		</div>
	);
}

export default function InstZoom() {
	return (
		<div className={styles.main}>
			<div className={styles.finale}>
				<img src={minimize} />
				<span
					style={{
						color: "#F2134F",
						fontSize: "large",
					}}
				>
					TRACKING ACROSS TIME OF THE DAY
				</span>
				<TextField
					id="date"
					variant="filled"
					type="date"
					size="small"
					defaultValue={new Date()}
					InputLabelProps={{
						shrink: true,
					}}
					style={{ backgroundColor: "#3B86FF", marginRight: "5%" }}
				/>
			</div>
			<div className={styles.trackingDiv}>
				<Initial
					color="#FFCD54"
					info="Average time spent per property installation per hour of the day"
				/>
				<Initial
					color="#F2134F"
					info="Average installation per user per hour of the day"
				/>
				<Initial
					color="#56BBFE"
					info="Installations per hour of the day"
				/>
				<Initial
					color="#0BD878"
					info="Active user’s per hour of the day"
				/>
				<Initial
					color="#C50000"
					info="Failed property per hour of the day"
				/>
				<Initial
					color="#FE0000"
					info="Aborted property per hour of the day"
				/>
				<Initial
					color="#43425D"
					info="New property added per hour of the day"
				/>
			</div>
		</div>
	);
}
