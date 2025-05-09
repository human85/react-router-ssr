import { NavLink, useLocation } from 'react-router';
import type { Route } from './+types/about';
import { useEffect } from 'react';
import Test from '~/components/test';

export async function loader(): Promise<{ title: string; body: string }> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

    if (!response.ok) {
      throw new Error(`Failed to fetch data from JSONPlaceholder: ${response.statusText}`);
    }

    const res = (await response.json()) as any;
    console.log(res);
    return res;
  } catch (error) {
    console.log('错了');

    throw new Error(`Failed to load data: `);
  }
}

export default function About({ loaderData }: Route.ComponentProps) {
  if (typeof window !== 'undefined') {
    console.log(location); // 仅在客户端中执行
  }

  useEffect(() => {
    console.log('useEffect');
  }, []);
  return (
    <div className="text-center pt-28">
      <p>
        This is the about page. It is a static page that can be used to provide information about the application or the
        team behind it.
      </p>
      <p>{loaderData.title}</p>
      <p>
        <NavLink to="/">home</NavLink>
      </p>

      <Test />
    </div>
  );
}
