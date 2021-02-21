import { gql } from '@apollo/client';

export const RICK_AND_MORTY_CHARACTERS = gql`
    query{
        characters {
            results {
                id
                name
                status
                species
                location {
                    id
                    name
                    dimension
                }
                image
                gender
                origin {
                    id
                    name
                    dimension
                }
            }
        }
    }
`;
