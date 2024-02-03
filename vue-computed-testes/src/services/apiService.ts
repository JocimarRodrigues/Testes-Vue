// URL da API que você deseja acessar
const apiUrl = ' http://localhost:3000';

// Realizar a requisição usando o Fetch API
// fetch(apiUrl)
//   .then(response => {
//     // Verificar se a resposta da requisição foi bem-sucedida (status 2xx)
//     if (!response.ok) {
//       throw new Error(`Erro na requisição: ${response.status}`);
//     }

//     // Parsear a resposta como JSON
//     return response.json();
//   })
//   .then(data => {
//     // Manipular os dados obtidos da requisição
//     console.log('Dados da requisição:', data);
//   })
//   .catch(error => {
//     // Lidar com erros durante a requisição
//     console.error('Erro na requisição:', error.message);
//   });

     const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/usuarios`);
    
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }
    
        const data = await response.json();
        return data;
      } catch (error: any) {
        throw new Error(`Erro na requisição: ${error.message}`);
      }
    };

    const fetchUserById = async (userId: Number) => {
      try {
        const response = await fetch(`${apiUrl}/usuarios/${userId}`)
        
        if(!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }
        const data = await response.json()
        return data
      } catch (error: any) {
        throw new Error(`Erro na requisição: ${error.message}`);
      }
    }



  export default {
    fetchData,
    fetchUserById
  }