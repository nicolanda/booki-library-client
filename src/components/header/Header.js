import React from 'react';
import { NavbarBooks } from '../navbar/NavbarBooks';
import { NavbarUser } from '../navbar/NavbarUser';
import { SearchBar } from '../navbar/SearchBar';

export const Header = () => {
  /*
  todo: add funtionality to the search button
  todo: add buttons funtionality
  todo: add conditional rendering to the admin show and hide buttons
  */

  return (
    <div>
      <NavbarUser />
      <SearchBar />
      <NavbarBooks />
    </div>
  );
};
