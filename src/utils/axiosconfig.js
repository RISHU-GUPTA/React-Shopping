import axios from 'axios';
export const instance = axios.create({
    baseURL: 'https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/',
    timeout: 4000  
}
);