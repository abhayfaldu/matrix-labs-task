import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Styles/Sidebar.module.css";

const Sidebar = () => {
	return (
		<div className={styles.sidebar__main}>
			<NavLink
				to="/token-address"
				className={({ isActive }) =>
					isActive ? `${styles.active}` : `${styles.pending}`
				}
			>
				Token Address
			</NavLink>

			<NavLink
				to="/pair-address"
				className={({ isActive }) =>
					isActive ? `${styles.active}` : `${styles.pending}`
				}
			>
				Pair Address
			</NavLink>
		</div>
	);
};

export default Sidebar;
