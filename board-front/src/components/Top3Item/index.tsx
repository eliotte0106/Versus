import React from 'react'
import './style.css';
import defaultProfileImage from 'assets/image/user.png';
import { BoardListItem } from 'types/interface';
import { useNavigate } from 'react-router-dom';

interface Props {
    top3ListItem: BoardListItem
}

// component: Top3 List Item
export default function Top3Item({ top3ListItem }: Props) {

    // properties
    const { boardNumber, title, content, boardTitleImage } = top3ListItem;
    const { favoriteCount, commentCount, viewCount } = top3ListItem;
    const { writeDatetime, writerUsername, writerProfileImage } = top3ListItem;

    // function: navigate
    //const navigator = useNavigate();

    // event handler: Board item click event
    const onClickHandler = () => {
        //navigator(boardNumber);
    }

    // render: Top3 List Item
  return (
    <div className='top-3-list-item' style={{ backgroundImage: `url(${boardTitleImage})` }} onClick={onClickHandler}>
        <div className='top-3-list-item-main-box'>
            <div className='top-3-list-item-top'>
                <div className='top-3-list-item-profile-box'>
                    <div className='top-3-list-item-profile-image' style={{backgroundImage: `url(${writerProfileImage ? writerProfileImage : defaultProfileImage})`}}></div>
                </div>
                <div className='top-3-list-item-write-box'>
                    <div className='top-3-list-item-username'>{writerUsername}</div>
                    <div className='top-3-list-item-write-date'>{writeDatetime}</div>
                </div>
            </div>
            <div className='top-3-list-middle'>
                <div className='top-3-list-item-title'>{title}</div>
                <div className='top-3-list-item-content'>{content}</div>
            </div>
            <div className='top-3-list-bottom'>
                <div className='top-3-list-item-counts'>
                    {`comment ${commentCount} like ${favoriteCount} view ${viewCount}`}
                </div>
            </div>
        </div>
    </div>
  )
}
