import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom'
import firebase from '../../firebase'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        margin: '0 auto',
        width: '40%',
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
    accountBox: {
        position: 'fixed',
        right: 0,
    }
}));

function Header(props) {
    const classes = useStyles();

    const [auth, setAuth] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [pesquisa, setPesquisa] = useState()


    const open = Boolean(anchorEl);

    useEffect(() => {
        
       if(firebase.getCurrentUser()){
           setAuth(true)
       }
       
    }, [])

 
    /*  */
    async function handleLogout() {
       /*  handleClose() */
       try {
        await firebase.logout()
          } catch(error) {
              alert(error.message)
          }
          props.history.replace('/')
    }

    function handleMenu(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }
    
    //TODO ir buscando enquanto pesquisa é feita...??? 
    if (typeof pesquisa !== 'undefined') {
        console.log('\npesquisando...\n')
        console.log(pesquisa)
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Pesquisar…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'Search' }}
                            value={pesquisa}
                            onChange={e => setPesquisa(e.target.value)}
                        />
                    </div>
                    {(
                        <div className={classes.accountBox}>
                            <IconButton
                                aria-label="Account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                              { auth ? 
                                (<div>
                                <MenuItem onClick={handleClose}><Link to="conta">Conta</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link to="conta">Salvos</Link></MenuItem>
                                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                </div>)
                                :
                                (<div> 
                                <MenuItem onClick={handleClose}><Link to="login">Login</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link to="registro">Registro</Link></MenuItem>
                                </div>)
                              }
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header
