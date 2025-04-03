import { createMutation, useQueryClient } from '@tanstack/svelte-query';
import type { User } from '../model/User.ts';

export const useAddUser = () => {
  const queryClient = useQueryClient();

  return createMutation({
    mutationFn: async ({ name, status }: Pick<User, 'name' | 'status'>) => {
      const response = await fetch('http://localhost:3000/api/data/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, status }),
      });
      if (!response.ok) throw new Error('Failed to add user');
      return response.json();
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
  });
}