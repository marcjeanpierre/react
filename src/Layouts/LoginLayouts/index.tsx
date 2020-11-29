import * as React from 'react';
import { Grid, TextField, Button, withStyles, WithStyles } from '@material-ui/core';
import { ThreeSixty } from '@material-ui/icons';
import styles, { Styles } from './styles';

interface Login { email?: string; password?: string }
interface ErrorForm { email?: string; password?: string }


interface P { }
interface S { login: Login, error: ErrorForm }

export class LoginLayouts extends React.PureComponent<P & WithStyles<Styles>, S >{

    public state: Readonly<S> = { login: {email: '', password: ''}, error: {email: '', password: ''} }

    public static Display = withStyles(styles as any)(LoginLayouts) as React.ComponentType<P>

    render(){
        const { classes } = this.props;
        const { login, error } = this.state;
        return(
            <Grid container={true} className={classes.root} direction="column">
                <form className={classes.root} noValidate autoComplete="off" onSubmit={this.validationForm}>
                    <TextField id="email" name="email" type='email' label="Standard" value={login.email} onChange={(e)=>{ this.setState(prevState=>({...prevState,email: e.target.value } ) ) }}/>
                    <br/>

                    <TextField id="password" name="password" type='password' label="Standard" value={login.password}  onChange={(e)=>{ this.changeVal() }}/>
                    <p>{error.password}</p>
                    <br/>
                    <Button variant="contained" color="primary" type='submit'>
                    Login
                    </Button>
                </form>
            </Grid>
        )
    }

    changeVal = () => (e: React.ChangeEvent<HTMLInputElement>) => {
        const pass = e.target.value;
        this.setState({ login: { password: pass} })

        if(!RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$").test(pass))
            this.setState({ error:{password: 'Votre password est faux'}})
        
    }

    validationForm = () => (e: React.ChangeEvent<HTMLInputElement>) => {
         e.preventDefault()
        console.log(this.state.login);
    }

}