import listaAdjacencias from '../data/lista_adjacencias.json'
export const dijkstra = (graph: any, startNode: string) => {
  const distances: { [key: string]: number } = {};
  const visited: { [key: string]: boolean } = {};
  const previous: { [key: string]: string | null } = {};

  Object.keys(graph).forEach((node) => {
    distances[node] = Infinity;
    visited[node] = false;
    previous[node] = null;
  });

  distances[startNode] = 0;

  const getClosestNode = () => {
    let closestNode: string | null = null;
    let minDistance = Infinity;

    Object.keys(distances).forEach((node) => {
      if (!visited[node] && distances[node] < minDistance) {
        closestNode = node;
        minDistance = distances[node];
      }
    });

    return closestNode;
  };

  let currentNode = getClosestNode();

  while (currentNode) {
    const distance = distances[currentNode];
    const neighbors = graph[currentNode];

    neighbors.forEach((neighbor: any) => {
      const totalDistance = distance + neighbor.peso;

      if (totalDistance < distances[neighbor.nodo]) {
        distances[neighbor.nodo] = totalDistance;
        previous[neighbor.nodo] = currentNode;
      }
    });

    visited[currentNode] = true;
    currentNode = getClosestNode();
  }

  return { distances, previous };
};

export const findShortestPath = (startNode: string, endNode: string) => {
  const { previous, distances } = dijkstra(listaAdjacencias, startNode);
  const path: string[] = [];
  const totalDistance = distances[endNode]
  let currentNode = endNode;

  while (currentNode) {
    path.unshift(currentNode);
    currentNode = previous[currentNode] as string;
    // totalDistance += distances[currentNode]
  }
  return {
    path,
    totalDistance
  }
};
