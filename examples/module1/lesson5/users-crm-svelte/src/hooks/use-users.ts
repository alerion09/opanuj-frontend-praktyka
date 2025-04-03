import { createQuery } from '@tanstack/svelte-query';
import type { User } from '../model/User.ts';

export const useUsers = () => {
  return createQuery<User[]>({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3000/api/data/users');
      if (!response.ok) throw new Error('Failed to fetch users');
      return response.json();
    },
  });
}