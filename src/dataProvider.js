import { fetchUtils } from 'react-admin';


const apiUrl = 'http://patty.scrumware.eu';
const httpClient = fetchUtils.fetchJson;

export default {
    getList: (resource, params) => {

        const url = `${apiUrl}/${resource}`;

        return httpClient(url).then(res => {
            
            const response = {}
            response.data = res.json.content
            response.total = res.json.size
           
            return response
        });
    },

    getOne: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
            data: json,
    })),

    update: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
        method: 'PUT',
        body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json })),

};