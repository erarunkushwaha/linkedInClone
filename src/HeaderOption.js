import React from 'react';
import './HeaderOption.css';
import {Avatar} from "@material-ui/core";
import {useSelector} from "react-redux";
import {selectUser} from "./features/counter/userSlice";

function HeaderOption({ avatar, Icon, title, onClick}) {

    const user = useSelector(selectUser);

    return (
        <div onClick={onClick} className={"headerOption"}>
            {Icon && <Icon className={'headerOption__icon'} />}
            { avatar && <Avatar src={ user?.photoUrl } className={'headerOption__icon'}  >{user?.email[0]} </Avatar> }
            {/*<Avatar src="https://image.flaticon.com/icons/png/512/174/174857.png" className={'headerOption__icon'}  />*/}
            <h3 className={"headerOption_title"}>{title}</h3>
        </div>
    );
}

export default HeaderOption;