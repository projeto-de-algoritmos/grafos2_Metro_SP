import React, { useEffect, useRef, useState } from 'react';
import { DataSet, Network } from 'vis-network/standalone';
import './App.css';
import listaAdjacencias from './data/lista_adjacencias.json';
import { findShortestPath } from './utils';

const App: React.FC = () => {
  const networkRef = useRef<HTMLDivElement>(null);
  const edgesRef = useRef<DataSet<any>>(new DataSet());
  const [currentStartNode, setCurrentStartNode] = useState('Jabaquara');
  const [currentEndNode, setCurrentEndNode] = useState('Paulista');
  const [totalDistance, setTotalDistance] = useState<number | null>(null);

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
      new Network(networkRef.current, data, options);

      const paintPath = (path: string[], color: string) => {
        console.log("path", path);
        for (let i = 0; i < path.length - 1; i++) {
          const from = path[i];
          const to = path[i + 1];
          const edgeId = `${from}-${to}`;
          const edge = edgesRef.current.get(edgeId);
          if (edge) {
            edgesRef.current.update({ id: edgeId, color: { color } });
          } else {
            console.error(`Edge not found: ${edgeId}`);
            // Verificar se a aresta reversa existe
            const reverseEdgeId = `${to}-${from}`;
            const reverseEdge = edgesRef.current.get(reverseEdgeId);
            if (reverseEdge) {
              edgesRef.current.update({ id: reverseEdgeId, color: { color } });
            } else {
              console.error(`Reverse edge not found: ${reverseEdgeId}`);
            }
          }
        }
      };

      const startNode = currentStartNode;
      const endNode = currentEndNode;
      const { path: shortestPath, totalDistance: distance } = findShortestPath(startNode, endNode);
      setTotalDistance(distance)
      paintPath(shortestPath, 'red');
    }
  }, [currentStartNode, currentEndNode]);

  return (
    <div className="App">
      <h1>Mapa Interativo das Estações de Metrô de SP</h1>
      <div className="select-container">
        <div className='column'>
          <label htmlFor="starNode">Origem:</label>
          <select value={currentStartNode} id="startNode" onChange={ev => setCurrentStartNode(ev.target.value)}>
            {Object.keys(listaAdjacencias).sort().map(item => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className='column'>
          <label htmlFor="endNode">Destino:</label>
          <select value={currentEndNode} id="endNode" onChange={(ev) => setCurrentEndNode(ev.target.value)}>
            {Object.keys(listaAdjacencias).sort().map(item => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>
      {totalDistance ? (
        <div>
          <p>Distância Total:</p>
          <p>{totalDistance}</p>
        </div>  
      ) : null}
      <div ref={networkRef} style={{ height: '600px', marginBottom: '20px' }}></div>
    </div>
  );
};

export default App;