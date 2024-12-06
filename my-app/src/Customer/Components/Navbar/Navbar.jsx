import React, { useState, useEffect } from 'react';
import {
  Avatar,
  Box,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { AddShoppingCart, FavoriteBorder } from '@mui/icons-material';
import CategorySheet from './CategorySheet';
import { MainCategory } from '../../../Data/Category/MainCategory';
import { useNavigate } from 'react-router-dom';
import LoginSignupModal from '../../Pages/Auth/LoginSignupModal';

const Navbar = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const [selectedCategory, setSelectedCategory] = useState('men');
  const [showCategorySheet, setShowCategorySheet] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (token) {
      const userData = JSON.parse(localStorage.getItem('userData'));
      if (userData) {
        setUser(userData); 
      }
    }
  }, []);

  const handleLogin = (userData) => {
    console.log('Logged in user data:', userData);
    setUser(userData); 
    localStorage.setItem('userData', JSON.stringify(userData)); 
    setModalOpen(false);
  };

  const handleLogout = () => {
    setUser(null); 
    localStorage.removeItem('userToken'); 
    localStorage.removeItem('userData'); 
    navigate('/'); 
  };

  return (
    <div>
      <Box className="sticky top-0 left-0 right-0 bg-white" sx={{ zIndex: 2 }}>
        <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b">
          <div className="flex items-center gap-9">
            <div className="flex items-center gap-2">
              {!isLarge && (
                <IconButton>
                  <MenuIcon />
                </IconButton>
              )}
              <h1
                onClick={() => navigate('/')}
                className="logo cursor-pointer text-lg md:text-2xl  font-bold"
                style={{ color: '#6a1b9a' }}
              >
                Trendly
              </h1>
            </div>
            <ul className="hidden lg:flex items-center font-medium text-gray-800">
              {MainCategory.map((item) => (
                <li
                  key={item.categoryId}
                  onMouseLeave={() => setShowCategorySheet(false)}
                  onMouseEnter={() => {
                    setShowCategorySheet(true);
                    setSelectedCategory(item.categoryId);
                  }}
                  className="MainCategory hover:text-[#6a1b9a]  hover:border-b-2 h-[70px] px-4 border-[#6a1b9a] flex items-center cursor-pointer"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-1 lg:gap-4 items-center">
            <IconButton>
              <SearchIcon />
            </IconButton>

            {user ? (
              <div className="flex items-center">
                <Avatar>{user.fullName[0]}</Avatar>
                <span className="ml-2">{user.fullName}</span>
                <Button onClick={handleLogout} sx={{ ml: 2 }}>
                  Logout
                </Button>
              </div>
            ) : (
              <Button
                variant="contained"
                sx={{
                  color: 'white',
                  backgroundColor: theme.palette.primary.main,
                }}
                onClick={() => setModalOpen(true)}
              >
                Login
              </Button>
            )}

            <IconButton>
              <FavoriteBorder sx={{ fontSize: 29 }} />
            </IconButton>
            <IconButton onClick={() => navigate('/cart')}>
              <AddShoppingCart className="text-grey-700" sx={{ fontSize: 29 }} />
            </IconButton>



            {isLarge && (
              <Button onClick={() => navigate('/become-seller')} variant="outlined">
                Seller
              </Button>
            )}
          </div>
        </div>

        {showCategorySheet && (
          <div
            onMouseLeave={() => setShowCategorySheet(false)}
            onMouseEnter={() => setShowCategorySheet(true)}
            className="categorySheet absolute top-[4.41rem] left-20 right-20 border shadow-lg bg-white z-10"
          >
            <CategorySheet selectedCategory={selectedCategory} />
          </div>
        )}
      </Box>

      <LoginSignupModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default Navbar;




