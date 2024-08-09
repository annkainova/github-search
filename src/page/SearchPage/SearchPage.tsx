import { useSearchRepositoriesQuery } from '../../api/getRepo';
import SearchBar from '../../components/SearchBar/SearchBar';

const SearchPage = () => {
  const { data, error, isLoading } = useSearchRepositoriesQuery({
    queryString: 'react',
    first: 10,
  });

  console.log('Data:', data); 

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error occurred: {error.message}</p>;

  return (
    <SearchBar/>
    // <div>
    //   {data.data.search.edges.map(({ node }: any) => (
    //     <div key={node.name}>
    //       <h3>{node.name}</h3>
    //       <p>{node.description}</p>
    //       <p>Stars: {node.stargazerCount}</p>
    //       <p>Forks: {node.forkCount}</p>
    //       <p>Language: {node.primaryLanguage?.name}</p>
    //       <p>Updated at: {node.updatedAt}</p>
    //       <p>License: {node.licenseInfo?.name}</p>
    //     </div>
    //   ))}
    // </div>
  );
};

export default SearchPage;
