import axios from 'axios';


const API_URL  = import.meta.env.VITE_API_URL || 'http://localhost:3131';
console.log("API_URL:", API_URL); //

export const createTask = async (description, token) => {

    try {
        const response = await axios.post(`${API_URL}/task`, { description }, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
        return response.data;
      } catch (error) {
        console.error("Erro ao criar task:", error);
        throw error;
      }
    };

    export const getTasks = async (token) => {
      try {
        const response = await axios.get(`${API_URL}/tasks/all`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data.tasks; // retorna array de tarefas
      } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
        throw error;
      }
    };
    
    export const changeTaskStatus = async (taskId, status, token) => {
      try {
        const response = await axios.put(`${API_URL}/task/${taskId}`, { status }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Response das tasks:", response.data); // <--- aqui
        return response.data
        
      } catch (error) {
        console.error("Erro ao alterar status da tarefa:", error);
        throw error;
      }
    }

    export const deleteTask = async (taskId, token) => {
      try {
          const response = await axios.delete(`${API_URL}/task/${taskId}`, {
              headers: {
                  Authorization: `Bearer ${token}`,
              },
          });
          return response.data; 
      } catch (error) {
          console.error("Erro ao deletar tarefa:", error);
          throw error;
      }
  };
  
  