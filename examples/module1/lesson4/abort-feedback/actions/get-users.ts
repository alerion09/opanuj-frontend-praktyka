import { User } from '../types/user.ts';

export const getUsers = async (): Promise<User[] | null> => {
  const API_URL = '/api/data/users?timeout=10000';

  const timeout = new Promise<Error>((_, reject) =>
    setTimeout(
      () =>
        reject(new Error('Timeout')),
      5000
    )
  );

  const fetchUsers = async (): Promise<User[] | null> => {
    const result = await fetch(API_URL);
    const response = await result.json();
    if (!response.ok) {
      throw new Error('Error getting users');
    }
    return response;
  }

    return await Promise.race<any>([fetchUsers(), timeout]);
}