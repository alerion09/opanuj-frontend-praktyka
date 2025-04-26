import { createRoot } from 'react-dom/client';
import { CharactersList } from './CharactersList/CharactersList.tsx';

const rootElement = document.getElementById('app')!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);

  root.render(
    <CharactersList />
  )
}