import apiClient from "./apiClient";

const artistsApi = {
    create: (data:{label: string}) => apiClient.post("/artists",data)
}
export default artistsApi;