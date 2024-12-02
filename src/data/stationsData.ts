// Passo 1: Organização dos Dados das Estações
interface Estacao {
  nome: string;
  linha: string;
  ordem: number;
}

export const stationsData: Estacao[] = [
    {"nome": "Jabaquara", "linha": "Linha 1 - Azul", "ordem": 1},
    {"nome": "Conceição", "linha": "Linha 1 - Azul", "ordem": 2},
    {"nome": "São Judas", "linha": "Linha 1 - Azul", "ordem": 3},
    {"nome": "Saúde", "linha": "Linha 1 - Azul", "ordem": 4},
    {"nome": "Praça da Árvore", "linha": "Linha 1 - Azul", "ordem": 5},
    {"nome": "Santa Cruz", "linha": "Linha 1 - Azul", "ordem": 6},
    {"nome": "Vila Mariana", "linha": "Linha 1 - Azul", "ordem": 7},
    {"nome": "Ana Rosa", "linha": "Linha 1 - Azul", "ordem": 8},
    {"nome": "Paraíso", "linha": "Linha 1 - Azul", "ordem": 9},
    {"nome": "Vergueiro", "linha": "Linha 1 - Azul", "ordem": 10},
    {"nome": "São Joaquim", "linha": "Linha 1 - Azul", "ordem": 11},
    {"nome": "Japão-Liberdade", "linha": "Linha 1 - Azul", "ordem": 12},
    {"nome": "Sé", "linha": "Linha 1 - Azul", "ordem": 13},
    {"nome": "São Bento", "linha": "Linha 1 - Azul", "ordem": 14},
    {"nome": "Luz", "linha": "Linha 1 - Azul", "ordem": 15},
    {"nome": "Tiradentes", "linha": "Linha 1 - Azul", "ordem": 16},
    {"nome": "Armênia", "linha": "Linha 1 - Azul", "ordem": 17},
    {"nome": "Portuguesa-Tietê", "linha": "Linha 1 - Azul", "ordem": 18},
    {"nome": "Carandiru", "linha": "Linha 1 - Azul", "ordem": 19},
    {"nome": "Santana", "linha": "Linha 1 - Azul", "ordem": 20},
    {"nome": "Jardim São Paulo-Ayrton Senna", "linha": "Linha 1 - Azul", "ordem": 21},
    {"nome": "Parada Inglesa", "linha": "Linha 1 - Azul", "ordem": 22},
    {"nome": "Tucuruvi", "linha": "Linha 1 - Azul", "ordem": 23},
  
    // Linha 2 - Verde
    {"nome": "Vila Prudente", "linha": "Linha 2 - Verde", "ordem": 1},
    {"nome": "Tamanduateí", "linha": "Linha 2 - Verde", "ordem": 2},
    {"nome": "Sacomã", "linha": "Linha 2 - Verde", "ordem": 3},
    {"nome": "Alto do Ipiranga", "linha": "Linha 2 - Verde", "ordem": 4},
    {"nome": "Santos-Imigrantes", "linha": "Linha 2 - Verde", "ordem": 5},
    {"nome": "Chácara Klabin", "linha": "Linha 2 - Verde", "ordem": 6},
    {"nome": "Ana Rosa", "linha": "Linha 2 - Verde", "ordem": 7},
    {"nome": "Paraíso", "linha": "Linha 2 - Verde", "ordem": 8},
    {"nome": "Brigadeiro", "linha": "Linha 2 - Verde", "ordem": 9},
    {"nome": "Trianon-Masp", "linha": "Linha 2 - Verde", "ordem": 10},
    {"nome": "Consolação", "linha": "Linha 2 - Verde", "ordem": 11},
    {"nome": "Clínicas", "linha": "Linha 2 - Verde", "ordem": 12},
    {"nome": "S. N. Sra. de Fátima-Sumaré", "linha": "Linha 2 - Verde", "ordem": 13},
    {"nome": "Vila Madalena", "linha": "Linha 2 - Verde", "ordem": 14},
  
    //Linha 3 - Vermelha
    {"nome": "Corinthians-Itaquera", "linha": "Linha 3 - Vermelha", "ordem": 1},
    {"nome": "Artur Alvim", "linha": "Linha 3 - Vermelha", "ordem": 2},
    {"nome": "Patriarca-Vila Ré", "linha": "Linha 3 - Vermelha", "ordem": 3},
    {"nome": "Guilhermina-Esperança", "linha": "Linha 3 - Vermelha", "ordem": 4},
    {"nome": "Vila Matilde", "linha": "Linha 3 - Vermelha", "ordem": 5},
    {"nome": "Penha", "linha": "Linha 3 - Vermelha", "ordem": 6},
    {"nome": "Carrão-Assaí Atacadista", "linha": "Linha 3 - Vermelha", "ordem": 7},
    {"nome": "Tatuapé", "linha": "Linha 3 - Vermelha", "ordem": 8},
    {"nome": "Belém", "linha": "Linha 3 - Vermelha", "ordem": 9},
    {"nome": "Bresser-Mooca", "linha": "Linha 3 - Vermelha", "ordem": 10},
    {"nome": "Brás", "linha": "Linha 3 - Vermelha", "ordem": 11},
    {"nome": "Pedro II", "linha": "Linha 3 - Vermelha", "ordem": 12},
    {"nome": "Sé", "linha": "Linha 3 - Vermelha", "ordem": 13},
    {"nome": "Anhangabaú", "linha": "Linha 3 - Vermelha", "ordem": 14},
    {"nome": "República", "linha": "Linha 3 - Vermelha", "ordem": 15},
    {"nome": "Santa Cecília", "linha": "Linha 3 - Vermelha", "ordem": 16},
    {"nome": "Marechal Deodoro", "linha": "Linha 3 - Vermelha", "ordem": 17},
    {"nome": "Palmeiras-Barra Funda", "linha": "Linha 3 - Vermelha", "ordem": 18},
  
    // Linha 4 - Amarela
    {"nome": "Luz", "linha": "Linha 4 - Amarela", "ordem": 1},
    {"nome": "República", "linha": "Linha 4 - Amarela", "ordem": 2},
    {"nome": "Higienópolis-Mackenzie", "linha": "Linha 4 - Amarela", "ordem": 3},
    {"nome": "Paulista", "linha": "Linha 4 - Amarela", "ordem": 4},
    {"nome": "Oscar Freire", "linha": "Linha 4 - Amarela", "ordem": 5},
    {"nome": "Fradique Coutinho", "linha": "Linha 4 - Amarela", "ordem": 6},
    {"nome": "Faria Lima", "linha": "Linha 4 - Amarela", "ordem": 7},
    {"nome": "Pinheiros", "linha": "Linha 4 - Amarela", "ordem": 8},
    {"nome": "Butantã", "linha": "Linha 4 - Amarela", "ordem": 9},
    {"nome": "São Paulo-Morumbi", "linha": "Linha 4 - Amarela", "ordem": 10},
    {"nome": "Vila Sônia", "linha": "Linha 4 - Amarela", "ordem": 11},
  
    //Linha 5 - Lilás
    {"nome": "Capão Redondo", "linha": "Linha 5 - Lilás", "ordem": 1},
    {"nome": "Campo Limpo", "linha": "Linha 5 - Lilás", "ordem": 2},
    {"nome": "Vila das Belezas", "linha": "Linha 5 - Lilás", "ordem": 3},
    {"nome": "Giovanni Gronchi", "linha": "Linha 5 - Lilás", "ordem": 4},
    {"nome": "Santo Amaro", "linha": "Linha 5 - Lilás", "ordem": 5},
    {"nome": "Largo Treze", "linha": "Linha 5 - Lilás", "ordem": 6},
    {"nome": "Adolfo Pinheiro", "linha": "Linha 5 - Lilás", "ordem": 7},
    {"nome": "Alto da Boa Vista", "linha": "Linha 5 - Lilás", "ordem": 8},
    {"nome": "Borba Gato", "linha": "Linha 5 - Lilás", "ordem": 9},
    {"nome": "Brooklin", "linha": "Linha 5 - Lilás", "ordem": 10},
    {"nome": "Campo Belo", "linha": "Linha 5 - Lilás", "ordem": 11},
    {"nome": "Eucaliptos", "linha": "Linha 5 - Lilás", "ordem": 12},
    {"nome": "Moema", "linha": "Linha 5 - Lilás", "ordem": 13},
    {"nome": "AACD-Servidor", "linha": "Linha 5 - Lilás", "ordem": 14},
    {"nome": "Hospital São Paulo", "linha": "Linha 5 - Lilás", "ordem": 15},
    {"nome": "Santa Cruz", "linha": "Linha 5 - Lilás", "ordem": 16},
    {"nome": "Chácara Klabin", "linha": "Linha 5 - Lilás", "ordem": 17},
  
    //Linha 15 - Prata
    {"nome": "Vila Prudente", "linha": "Linha 15 - Prata", "ordem": 1},
    {"nome": "Oratório", "linha": "Linha 15 - Prata", "ordem": 2},
    {"nome": "São Lucas", "linha": "Linha 15 - Prata", "ordem": 3},
    {"nome": "Camilo Haddad", "linha": "Linha 15 - Prata", "ordem": 4},
    {"nome": "Vila Tolstói", "linha": "Linha 15 - Prata", "ordem": 5},
    {"nome": "Vila União", "linha": "Linha 15 - Prata", "ordem": 6},
    {"nome": "Jardim Planalto", "linha": "Linha 15 - Prata", "ordem": 7},
    {"nome": "Sapopemba", "linha": "Linha 15 - Prata", "ordem": 8},
    {"nome": "Fazenda da Juta", "linha": "Linha 15 - Prata", "ordem": 9},
    {"nome": "São Mateus", "linha": "Linha 15 - Prata", "ordem": 10},
    {"nome": "Jardim Colonial", "linha": "Linha 15 - Prata", "ordem": 11},
  ];