import { createStyles, Theme, makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { blue, orange } from "@material-ui/core/colors";



export const useStyles = makeStyles((theme: Theme) =>
    createStyles({

        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },

        table: {
            minWidth: 700,
            width: 'auto!important'
        },
        row: {
            '& > *': {
              borderBottom: 'unset',
            },
          },
    })
);

export const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: orange
    },
});