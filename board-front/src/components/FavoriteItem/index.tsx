import React from 'react';
import { FavoriteListItem } from 'types/interface';
import defaultProfileImage from 'assets/image/user.png';
import './style.css';

// props
interface Props {
    favoriteListItem: FavoriteListItem;
}

// component: favorite list item
export default function FavoriteItem({ favoriteListItem}: Props) {
    const {profileImage, username} = favoriteListItem;

    // render: favorite list item
    return (
        <div className='favorite-list-item'>
            <div className='favorite-list-item-profile-box'>
                <div className='favorite-list-item-profile-image' style={ {backgroundImage: `url(${profileImage ? profileImage : defaultProfileImage})`} }></div>
            </div>
            <div className='favorite-list-item-username'>{username}</div>
        </div>
    )
}
