class PersonProvider {
    constructor() {      
    }
  
    findById (id) {
        // Recuperar o array de pessoas do localStorage
        var people = JSON.parse(localStorage.getItem("people"));
        
        // Verificar se o array de pessoas existe
        if (people === null) {
          console.log("Não há nenhum registro de pessoas no localStorage.");
          return null;
        }
        
        // Procurar por uma pessoa com o ID especificado
        for (var i = 0; i < people.length; i++) {
          if (people[i].id === id) {
            return people[i];
          }
        }
        
        // Se a pessoa não for encontrada, retornar null
        console.log("Não foi encontrado nenhum registro com o ID especificado.");
        return null;
      }

    findByParams (params, value) {
      // Recuperar o array de pessoas do localStorage
        var people = JSON.parse(localStorage.getItem("people"));
        
        // Verificar se o array de pessoas existe
        if (people === null) {
          console.log("Não há nenhum registro de pessoas no localStorage.");
          return false;
        }
        
        // Armazenar os resultados da busca
        var results = [];
        
        // Percorrer o array de pessoas
        for (var i = 0; i < people.length; i++) {
          if (people[i][params] === value) {
            // Adicionar a pessoa à lista de resultados
            results.push(people[i]);
          }
        }
  
        // Verificar se houve resultados
        if (results.length === 0) {
          console.log("Não foi encontrado nenhum registro com os parâmetros especificados.");
          return false;
        }
        
        console.log("Resultados da busca:", results);
        return results;
    }

    save (data) { 
      // Gerar um ID para a pessoa
      var id = Math.random().toString(36).substr(2, 9);
      
      // Criar um objeto Pessoa
      var person = {
        id: id,
        name: data.name,
        document: data.document,
        dtBirth: data.dtBirth, 
        email: data.email, 
        phone: data.phone
      };
      
      // Recuperar o array de pessoas do localStorage, se houver
      var people = JSON.parse(localStorage.getItem("people")) || [];
      
      // Adicionar a nova pessoa ao array
      people.push(person);
      
      // Salvar o array de pessoas no localStorage
      localStorage.setItem("people", JSON.stringify(people));
      
      // Retornar o objeto da pessoa criada
      return person;
    }

    update (data) {
        // Recuperar o array de pessoas do localStorage
        var people = JSON.parse(localStorage.getItem("people"));
        
        // Verificar se o array de pessoas existe
        if (people === null) {
          console.log("Não há nenhum registro de pessoas no localStorage.");
          return false;
        }
        
        // Procurar por uma pessoa com o ID especificado
        for (var i = 0; i < people.length; i++) {
          if (people[i].id === id) {
            // Atualizar os atributos da pessoa encontrada
            people[i].name = data.name;
            people[i].document = data.document;
            people[i].dtBirth = data.dtBirth;
            people[i].email = data.email;
            people[i].telefone = data.telefone;
            
            // Salvar o array de pessoas atualizado no localStorage
            localStorage.setItem("people", JSON.stringify(people));
            
            console.log("Registro de pessoa atualizado com sucesso.");
            return true;
          }
        }
        
        // Se a pessoa não for encontrada, retornar false
        console.log("Não foi encontrado nenhum registro com o ID especificado.");
        return false;
      }

    delete (id){
        // Recuperar o array de pessoas do localStorage
        var people = JSON.parse(localStorage.getItem("people"));
        
        // Verificar se o array de pessoas existe
        if (people === null) {
          console.log("Não há nenhum registro de pessoas no localStorage.");
          return false;
        }
        
        // Procurar por uma pessoa com o ID especificado
        for (var i = 0; i < people.length; i++) {
          if (people[i].id === id) {
            // Remover a pessoa encontrada do array
            people.splice(i, 1);
            
            // Salvar o array de pessoas atualizado no localStorage
            localStorage.setItem("people", JSON.stringify(people));
            
            console.log("Registro de pessoa excluído com sucesso.");
            return true;
          }
        }
        
        // Se a pessoa não for encontrada, retornar false
        console.log("Não foi encontrado nenhum registro com o ID especificado.");
        return false;
      }
    }
  
