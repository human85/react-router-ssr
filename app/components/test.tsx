import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import type { loader } from '../routes/about';

export async function getData(): Promise<{ title: string; body: string }> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

    if (!response.ok) {
      throw new Error(`Failed to fetch data from JSONPlaceholder: ${response.statusText}`);
    }

    const res = (await response.json()) as any;
    console.log(res);
    return res;
  } catch {
    console.log('错了');

    throw new Error(`Failed to load data: `);
  }
}

export default function Test() {
  const d = useLoaderData<typeof loader>();
  const [data, setData] = useState<{ title: string; body: string } | null>(null);

  useEffect(() => {
    getData().then(setData);
  }, []);
  return (
    <div className={cn('pt-28 text-center md:pt-32')}>
      <p>
        {d.title}
        <br />
        {d.body}
        test
      </p>
      <span suppressHydrationWarning>{Date.now()}</span>

      <p>Client Data: {data?.title}</p>
    </div>
  );
}
