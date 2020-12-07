import { createStyles, Theme, makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { blue, orange, pink } from "@material-ui/core/colors";
import { dark } from "@material-ui/core/styles/createPalette";



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
        summaryRow: {
            '& > *': {
                borderBottom: 'unset',
            },
            '& /deep/ tbody /deep/ td': {
                fontWeight: 500
            }
        },
        detailedTable: {
            backgroundColor: '#1f1f1f'
        },
        totalRow: {
            backgroundColor: '#303030',

        },
        recordRow: {
            backgroundColor: '#212121'
        },
        unitInput: {
            '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0,
            }
        }
    })
);

export const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: blue,
        secondary: pink,
        background: {
            default: '#424242'
        }
    },
});