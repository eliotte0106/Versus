import React from 'react'
import './style.css';
import { CommentListItem } from 'types/interface';
import defaultProfileImage from 'assets/image/user.png';

interface Props {
    commentListItem: CommentListItem;
}

// component: Comment List Item
export default function CommentItem({ commentListItem }: Props) {
    // properties
    const { username, profileImage, writeDatetime, content} = commentListItem;

    // render: Comment list Item
  return (
    <div className='comment-list-item'>
        <div className='comment-list-item-top'>
            <div className='comment-list-item-profile-box'>
                <div className='comment-list-item-profile-image' style = { {backgroundImage: `url(${profileImage ? profileImage : defaultProfileImage})`} }></div>
            </div>
            <div className='comment-list-item-username'>{username}</div>
            <div className='comment-list-item-divider'>{'|'}</div>
            <div className='comment-list-item-time'>{writeDatetime}</div>
        </div>
        <div className='comment-list-item-main'>
            <div className='comment-list-item-content'>{content}</div>
        </div>
    </div>
  )
}
