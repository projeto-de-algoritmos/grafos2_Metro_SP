import React, { useEffect, useRef } from 'react';
import { DataSet, Network } from 'vis-network/standalone';
import './App.css';
import listaAdjacencias from './data/lista_adjacencias.json';

const App: React.FC = () => {
  const networkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nodesArray: { id: string; label: string }[] = [];
    const edgesArray: { from: string; to: string; label: string }[] = [];
    const addedEdges = new Set<string>();

    // Construir nós e arestas a partir do JSON
    Object.keys(listaAdjacencias).forEach((estacao) => {
      nodesArray.push({ id: estacao, label: estacao });

      listaAdjacencias[estacao].forEach((adjacente: any) => {
        const edgeId = `${estacao}-${adjacente.nodo}`;
        const reverseEdgeId = `${adjacente.nodo}-${estacao}`;

        if (!addedEdges.has(reverseEdgeId)) {
          edgesArray.push({
            from: estacao,
            to: adjacente.nodo,
            label: `Peso: ${adjacente.peso}`,
          });
          addedEdges.add(edgeId);
        }
      });
    });

    const nodes = new DataSet(nodesArray);
    const edges = new DataSet(edgesArray);

    const data = {
      nodes: nodes,
      edges: edges,
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
    }
  }, []);

  return (
    <div className="App">
      <h1>Mapa Interativo das Estações de Metrô</h1>
      <div ref={networkRef} style={{ height: '600px' }}></div>
    </div>
  );
};

export default App;