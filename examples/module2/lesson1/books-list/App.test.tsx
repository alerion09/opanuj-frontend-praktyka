// @vitest-environment jsdom
import { afterEach, describe, expect, test } from 'vitest';
import type { Book } from './types/book.ts';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import App from './App.tsx';

describe('Books list', () => {
  afterEach(cleanup);
  const books: Book[] = [
    { id: 1, author: 'Franz Kafka', title: 'Proces' },
    { id: 2, author: 'Andrzej Pilipiuk', title: 'Oko Jelenia' },
  ];

  test('Should add book to the list', () => {
    render(<App />)
    const titleInput = screen.getByLabelText('Title');
    fireEvent.change(titleInput, { target: { value: books[0].title } });

    const authorInput = screen.getByLabelText('Author');
    fireEvent.change(authorInput, { target: { value: books[0].author } });
    fireEvent.click(screen.getByText('Add book'));

    expect(screen.getByText(`Title: ${books[0].title}`)).toBeDefined();
    expect(screen.getByText(`Author: ${books[0].author}`)).toBeDefined();
  })

  test('Should remove book from the list', () => {
    render(<App />)
    fireEvent.change(screen.getByLabelText('Title'), { target: { value: books[0].title } });
    fireEvent.change(screen.getByLabelText('Author'), { target: { value: books[0].author } });
    fireEvent.click(screen.getByText('Add book'));

    fireEvent.change(screen.getByLabelText('Title'), { target: { value: books[1].title } });
    fireEvent.change(screen.getByLabelText('Author'), { target: { value: books[1].author } });
    fireEvent.click(screen.getByText('Add book'));

    expect(screen.getByText(`Title: ${books[0].title}`)).toBeDefined();
    expect(screen.getByText(`Author: ${books[0].author}`)).toBeDefined();
    expect(screen.getByText(`Title: ${books[1].title}`)).toBeDefined();
    expect(screen.getByText(`Author: ${books[1].author}`)).toBeDefined();

    fireEvent.click(screen.getByText('Remove last book'));
    expect(screen.getByText(`Title: ${books[0].title}`)).toBeDefined();
    expect(screen.getByText(`Author: ${books[0].author}`)).toBeDefined();
    expect(screen.queryByText(`Title: ${books[1].title}`)).toBeFalsy();
    expect(screen.queryByText(`Author: ${books[1].author}`)).toBeFalsy();
  })
})