import { NavLink } from 'react-router-dom';

export const NavMenu = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
      <NavLink to="/favorite">Favorite</NavLink>
    </>
  );
};
