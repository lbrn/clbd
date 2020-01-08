import React, { Fragment } from "react";
import { CssBaseline, makeStyles } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

import { theme } from "./theme/theme";
import Header from "./components/Header";
import RouterWrapper from "./components/router/RouterWrapper";
import Footer from "./components/Footer";

const useStyles = makeStyles({
	appWrapper: {
		position: "relative",
		minHeight: "100vh"
	},
	contentWrap: {
		paddingBottom: "2.5rem"
	},
});

const App: React.FC = () => {
	const classes = useStyles();

	return (
		<Fragment>
			<div className={classes.appWrapper}>
				<div className={classes.contentWrap}>
					<CssBaseline />
					<ThemeProvider theme={theme}>
						<Header />
							<RouterWrapper />
						<Footer />
					</ThemeProvider>
				</div>
			</div>
		</Fragment>
	);
};

export default App;
