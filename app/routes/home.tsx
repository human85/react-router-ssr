import type { Route } from './+types/home';
import { Welcome } from '../welcome/welcome';
import { NavLink } from 'react-router';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }];
}

export default function Home() {
  return (
    <>
      <Welcome message="" />
      <p>change something</p>
      <p className="text-center">
        <NavLink to="/about">about</NavLink>
      </p>
    </>
  );
}
