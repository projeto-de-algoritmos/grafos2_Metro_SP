import React, { useEffect, useRef } from 'react';
import { DataSet, Network } from 'vis-network/standalone';
import './App.css';
import listaAdjacencias from './data/lista_adjacencias.json';

const App: React.FC = () => {
  const networkRef = useRef<HTMLDivElement>(null);
  const edgesRef = useRef<DataSet<any>>(new DataSet());

  useEffect(() => {
    const nodesArray: { id: string; label: string }[] = [];
    const edgesArray: { id: string; from: string; to: string; label: string; length: number }[] = [];
    const addedEdges = new Set<string>();

    // Construir nós e arestas a partir do JSON
    Object.keys(listaAdjacencias).forEach((estacao) => {
      nodesArray.push({ id: estacao, label: estacao });

      listaAdjacencias[estacao].forEach((adjacente: any) => {
        const edgeId = `${estacao}-${adjacente.nodo}`;
        const reverseEdgeId = `${adjacente.nodo}-${estacao}`;

        if (!addedEdges.has(reverseEdgeId)) {
          edgesArray.push({
            id: edgeId,
            from: estacao,
            to: adjacente.nodo,
            label: `Peso: ${adjacente.peso}`,
            length: adjacente.peso,
          });
          addedEdges.add(edgeId);
        }
      });
    });

    const nodes = new DataSet(nodesArray);
    edgesRef.current = new DataSet(edgesArray);

    const data = {
      nodes: nodes,
      edges: edgesRef.current,
    };

    const options = {
      nodes: {
        shape: 'dot',
        size: 10,
        font: { size: 16, color: '#FFFFFF' },
        color: { background: '#97C2FC', border: '#2B7CE9' },
      },
      edges: {
        width: 2,
        color: '#848484',
        smooth: { enabled: true, type: 'continuous', roundness: 0.5 },
      },
      physics: {
        enabled: false,
      },
    };

    if (networkRef.current) {
      const network = new Network(networkRef.current, data, options);

      // Implementação do algoritmo de Dijkstra
      const dijkstra = (graph: any, startNode: string) => {
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

      const findShortestPath = (startNode: string, endNode: string) => {
        const { distances, previous } = dijkstra(listaAdjacencias, startNode);
        const path: string[] = [];
        let currentNode = endNode;

        while (currentNode) {
          path.unshift(currentNode);
          currentNode = previous[currentNode] as string;
        }
        console.log("path", path);
        return path;
      };

      const paintPath = (path: string[], color: string) => {
        console.log("path", path);
        for (let i = 0; i < path.length - 1; i++) {
          const from = path[i];
          console.log("from:", from);
          const to = path[i + 1];
          console.log("to:", to);
          const edgeId = `${from}-${to}`;
          console.log(edgeId);
          const edge = edgesRef.current.get(edgeId);
          if (edge) {
            edgesRef.current.update({ id: edgeId, color: { color } });
            console.log(edgesRef.current.get(edgeId));
          } else {
            console.error(`Edge not found: ${edgeId}`);
            // Verificar se a aresta reversa existe
            const reverseEdgeId = `${to}-${from}`;
            const reverseEdge = edgesRef.current.get(reverseEdgeId);
            if (reverseEdge) {
              edgesRef.current.update({ id: reverseEdgeId, color: { color } });
              console.log(edgesRef.current.get(reverseEdgeId));
            } else {
              console.error(`Reverse edge not found: ${reverseEdgeId}`);
            }
          }
        }
      };

      const startNode = 'Palmeiras-Barra Funda';
      const endNode = 'Se';
      const shortestPath = findShortestPath(startNode, endNode);
      paintPath(shortestPath, 'red');
    }
  }, []);

  return (
    <div className="App">
      <h1>Mapa Interativo das Estações de Metrô</h1>
      <div ref={networkRef} style={{ height: '600px', marginBottom: '20px' }}></div>
    </div>
  );
};

export default App;