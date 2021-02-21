import { gql } from '@apollo/client';

export const RICK_AND_MORTY_CHARACTERS = gql`
    query{
        characters {
            results {
                id
                name
                image
                gender
            }
        }
    }
`;
