import { makeStyles, lighten } from '@material-ui/core/styles';
import { fontSizePxToRem} from '../theme/typography'



const globalStyles = makeStyles((theme) => ({
    domainChip: {
        marginBottom: theme.spacing(1),
    },
    link: {
        color: theme.palette.primary.main,
        '& :hover': {
            color: theme.palette.primary.main
        }
    },
    smallText: {
        fontSize: fontSizePxToRem(13),
    },
    genreChip: {
        borderRadius: '5px',
        backgroundColor: lighten('rgb(220, 0, 78)', 0.2)
    },
    eventTitle: {
        display: 'flex',
        alignItems: 'center',

        '& span': {
            display: 'inline-block',
            marginRight: theme.spacing(1)
        }
    }
}));


export default globalStyles;
