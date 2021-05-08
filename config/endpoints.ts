import {LOCAL_IP, LOCAL_PORT} from '@env'

export const Endpoints = {
    GraphQLEndpoint: (LOCAL_IP && LOCAL_PORT) ? `${LOCAL_IP}:${LOCAL_PORT}` : 'localhost:8000'
}