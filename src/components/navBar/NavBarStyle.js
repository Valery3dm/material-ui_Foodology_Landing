import { makeStyles } from '@material-ui/core';

const useStylesNavBar = makeStyles( theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    navWrapper: {
        display: 'flex',
        width: 500,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
}));

export default useStylesNavBar;
