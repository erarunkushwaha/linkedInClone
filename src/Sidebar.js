import React from 'react';
import './Sidebar.css';
import {Avatar} from "@material-ui/core";
import {selectUser} from "./features/counter/userSlice";
import {useSelector} from "react-redux";

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem  = ( topic ) => (
        <div className="sidebar__recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className={"sidebar"}>
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=715&q=80" alt=""/>
                <Avatar src={user.photoUrl} className={"sidebar__avatar"} > {user.email[0]}</Avatar>
                <h3>{user.displayName}</h3>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                <p>who view you</p>
                    <p className="sidebar__statNumber">
                        2,345
                    </p>
                </div>
                <div className="sidebar__stat">
                    <p> view on post</p>
                    <p className="sidebar__statNumber">
                        8,345
                    </p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('vue.js')}

                {recentItem('mernstack')}

                {recentItem('reactnative')}

                {recentItem('arunkumar')}

            </div>

        </div>
    );
}

export default Sidebar;