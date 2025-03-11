interface SearchTitleProps {
  title?: string;
}

function SearchTitle(props: SearchTitleProps) {
  const { title } = props;

  const defaultTitle = 'Wyszukiwarka postaci Rick and Morty';

  return <h1 className="text-2xl">{title || defaultTitle}</h1>;
}

export default SearchTitle;
