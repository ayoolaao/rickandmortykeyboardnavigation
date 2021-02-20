import React from 'react';
import { useQuery, gql } from '@apollo/client';

const TEST = gql`
    query{
        characters {
            results {
                name
            }
        }
    }
`

const App = () => {
  const { data } = useQuery(TEST);
  console.log(data);

  return (
    <div className="App">
      Rick and Morty
    </div>
  );
}

export default App;
