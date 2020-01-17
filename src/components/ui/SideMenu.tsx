import React, { Fragment } from "react";
import { ListItem, ListItemText, makeStyles, List } from "@material-ui/core";

interface link {
	name: string;
	clickHandler: () => Promise<void> | void;
}

interface sideMenuProps {
	links: link[];
}

const useStyles = makeStyles({
	list: {
		width: "100%",
		backgroundColor: `rgba(19, 127, 222, .2)`
	}
});

const SideMenu = ({ links }: sideMenuProps) => {
	const classes = useStyles({});

	const createLinks = links => {
		return links.map(link => (
			<ListItem button key={link.name}>
				<ListItemText
					key={link.name}
					onClick={e => link.clickHandler()}
					primary={link.name}
				/>
			</ListItem>
		));
	};
	return (
		<Fragment>
			<List className={classes.list}>{createLinks(links)}</List>
		</Fragment>
	);
};

export default SideMenu;
