import { Component } from 'react';
import searchIcon from '../../assets/Icons/searchIcon.svg';
import userIcon from '../../assets/Icons/profileIcon.svg'
import wishList from '../../assets/Icons/wishlist.png'
import cartIcon from '../../assets/Icons/cart.png'
export default class Header extends Component {
  render() {
    return (
      <div className='w-full h-20 flex items-center justify-between bg-pink-300 fixed px-6'>
        <h1 className='text-xl font-bold cursor-pointer'>E-Commerce</h1>
        <div className='flex justify-end gap-5'>

          <form className='relative flex items-center'>
            <input
              type='text'
              className='h-10 pl-4 pr-20 rounded-xl border outline-none'
              placeholder='search Products...'
            />
            <img
              src={searchIcon}
              alt="searchIcon"
              className='w-5 h-5 absolute right-3'
            />
          </form>
          <img src={userIcon} alt="userIcon" className='cursor-pointer w-10 h-10' />
          <img src={wishList} alt="wishlist" className='cursor-pointer w-10 h-10' />
          <img src={cartIcon} alt="cartIcon" className='cursor-pointer w-10 h-10' />
        </div>
      </div>
    );
  }
}
