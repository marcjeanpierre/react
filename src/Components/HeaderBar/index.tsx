import * as React from 'react';
import { Grid, withStyles, WithStyles } from '@material-ui/core';
import styles, { Styles } from './styles';

interface P { name: String}
interface S {}

export class HeaderBar extends React.PureComponent<P & WithStyles<Styles> >{

    public static Display = withStyles(styles as any)(HeaderBar) as React.ComponentType<P>

    render(){
        const { classes } = this.props;
        return(
            <Grid container className={classes.headerBar}>
                <Grid item>Logo {this.props.name}</Grid>
                <Grid item>Menu</Grid>
            </Grid>
        )
    }

}