import { createMuiTheme } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';


export const theme = createMuiTheme({
	palette: {
		primary: {
			main: `rgba(19, 127, 222)`,
		},
	},
	typography: {
		body1: {
			fontFamily: "Nunito, Roboto, Helvetica, Arial, sans-serif"
		},
		body2: {
			fontFamily: "Nunito, Roboto, Helvetica, Arial, sans-serif"
		}
	}
});

export const themeExtended = {
	palette: {
		primary: {
			hover: fade('rgba(19, 127, 222)', .2)
		}
	}
}