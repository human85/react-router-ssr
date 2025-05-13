import { atom, useAtom } from 'jotai';
import { NavLink } from 'react-router';
import { Welcome } from '../welcome/welcome';
import type { Route } from './+types/home';

export function meta({ params }: Route.MetaArgs) {
  return [{ title: 'New React Router App' }, { name: 'description' + params, content: 'Welcome to React Router!' }];
}

const priceAtom = atom(0);

export default function Home() {
  const [price, setPrice] = useAtom(priceAtom);

  return (
    <div className="text-center">
      <Welcome message="" />
      <p>change something</p>

      <p className="mt-2 text-center">
        <NavLink className="underline" to="/about">
          about
        </NavLink>
      </p>

      <div className="flex flex-col items-center justify-center gap-4">
        <button onClick={() => setPrice(price - 1)}>-1</button>
        <div>{price}</div>
        <button onClick={() => setPrice(price + 1)}>+1</button>
      </div>

      <p data-open={false}></p>

      <svg xmlns="http://www.w3.org/2000/svg" width="31" height="40" viewBox="0 0 31 40" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.144823 33.2229C-0.0125679 33.3377 -0.0470558 33.5584 0.0679609 33.7158C0.182794 33.8732 0.403473 33.9075 0.560681 33.7927L19.8275 19.728C22.1059 18.0647 22.0732 14.6542 19.7633 13.0348L1.26069 0.0639796C1.1011 -0.0479186 0.88115 -0.00921263 0.769435 0.150196C0.657537 0.309789 0.696243 0.529733 0.855652 0.641448L12.4019 8.73572C14.5298 10.3626 16.5856 12.5216 16.428 16.342C16.2516 20.6202 14.2335 22.7549 12.1372 24.4684L0.144823 33.2229Z"
          fill="black"
        />
        <path
          d="M30.8975 38.839C31.0089 38.9202 31.0333 39.0764 30.9518 39.1879C30.8705 39.2992 30.7144 39.3236 30.6031 39.2422L16.9653 29.2867C15.3526 28.1094 15.3758 25.6953 17.0108 24.549L30.1076 15.3677C30.2204 15.2886 30.3762 15.316 30.4552 15.429C30.5345 15.5418 30.5071 15.6975 30.3941 15.7766L22.2225 21.5052C20.7159 22.6569 19.2599 24.1851 19.3716 26.8901C19.4964 29.9174 20.9239 31.4284 22.4072 32.6411L30.8975 38.839Z"
          fill="black"
        />
      </svg>
    </div>
  );
}
