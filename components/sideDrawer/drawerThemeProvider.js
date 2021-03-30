import React, { Children } from "react"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    overrides: {
        // Style sheet name
        MuiDrawer: {
            // Name of the rule
            paper: {
                background: "none",
            },
            paperAnchorDockedLeft: {
                borderRight: "none"
            }
        }
    }
});

export default function DrawerThemeProvider({children}) {
    return(
        <ThemeProvider theme={theme}> {children} </ThemeProvider>
    )
}