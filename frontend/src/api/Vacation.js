import axios from "axios";

export const vacationInsert = async (params) => {
    try {
        const response = await axios.post('/api/vacation', params);
        return response;
    } catch (error) {
        throw error;
    }
};
export const vacationUpdate = async (id, params) => {
    try{
        const response = await axios.put(`/api/vacation/${id}`, params);
        return response;
    }catch (error){
        throw error;
    }
}