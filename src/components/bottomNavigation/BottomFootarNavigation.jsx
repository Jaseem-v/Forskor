import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';


import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function BottomFooterNavigation() {
    const [value, setValue] = React.useState('home');

    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
        setValue(newValue);
        navigate(newValue == "home" ? "/" : `/${newValue}`);

    };

    // React.useEffect(() => {
    //     // console.log(value);
    //     navigate(value == "home" ? "/" : `/${value}`);

    // }, [value])

    const { cart } = useSelector((state) => state.cartReducer)

    const cartLength = cart.length


    return (
        <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
            <BottomNavigationAction
                label="Home"
                value="home"
                icon={<HomeIcon />}
            />
            <BottomNavigationAction
                label="Favorites"
                value="favorites"
                icon={<FavoriteIcon />}
            />
            <BottomNavigationAction
                label="Cart"
                value="cart"
                icon={<div className='bottom-navigation__icon'>
                    <ShoppingCartIcon />
                    <span>{cartLength}</span>
                </div>}
            />
            <BottomNavigationAction label="Settings" value="settings" icon={<SettingsIcon />} />
            <BottomNavigationAction label="User" value="splash" icon={<AccountCircleIcon />} />
        </BottomNavigation>
    );
}
