import React from 'react';
import { strategies } from '../../services/auth/strategy/Strategy';
import Auth from '../../services/auth/Auth';
import { Button, createStyles, Dialog, DialogContent, DialogTitle, TextField, WithStyles, withStyles } from '@material-ui/core';

interface SignUpContainerProps extends WithStyles<typeof styles> {

}

interface SignUpContainerState {
    open: boolean;
    email: string;
    password: string;
}

const styles = createStyles({
    container: {
        maxWidth: 500,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    button: {
        marginTop: 5,
        justifySelf: 'bottom'
    }
});

class SignUpContainer extends React.Component<SignUpContainerProps, SignUpContainerState> {

    constructor(data: SignUpContainerProps) {
        super(data)

        this.state = {
            open: false,
            email: '',
            password: ''
        };
    }

    onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        if (e.target.name === 'email') {
            this.setState({ [e.target.name]: e.target.value })
        } else if (e.target.name === 'password') {
            this.setState({ [e.target.name]: e.target.value })
        }
    }

    submit() {
        const { email, password } = this.state;
        Auth.getInstance().register(strategies.USERNAMEPASSWORD, email, password);
    }

    openDialog() {
        this.setState({ open: true })
    }

    render() {
        const { classes } = this.props;
        const { open } = this.state;

        return <>
            <Button variant='contained' onClick={() => this.openDialog()}>Sign Up</Button>
            <Dialog
                onClose={() => this.setState({ open: false })}
                open={open}
            >
                <DialogTitle>Sign Up</DialogTitle>
                <DialogContent>
                    <form className={classes.container}>
                        <TextField
                            type='email'
                            name='email'
                            label='Email'
                            onChange={(e) => this.onChange(e)}
                        />
                        <TextField
                            type='password'
                            name='password'
                            label='Password'
                            onChange={(e) => this.onChange(e)}
                        />
                        <Button
                            onClick={() => this.submit()}
                            component='div'
                            color='primary'
                            variant='contained'
                            className={classes.button}
                        >
                            Register
                    </Button>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    }
}

export default withStyles(styles)(SignUpContainer)
