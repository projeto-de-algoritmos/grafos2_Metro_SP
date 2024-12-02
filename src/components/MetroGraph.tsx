import React, { useEffect, useRef } from 'react';
import { stationsData } from '../data/stationsData';
import * as d3 from 'd3';

const MetroGraph = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const width = 800;
    const height = 800;

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .style('border', '1px solid black');

    interface MetroNode extends d3.SimulationNodeDatum {
      id: string;
      group: string;
    }

    const nodes: MetroNode[] = stationsData.map(station => ({
      id: station.nome,
      group: station.linha,
    }));

    const links = [];
    for (let i = 0; i < stationsData.length - 1; i++) {
      links.push({
        source: stationsData[i].nome,
        target: stationsData[i + 1].nome,
        linha: stationsData[i].linha,
      });
    }

    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id((d: any) => d.id))
      .force('charge', d3.forceManyBody().strength(-100))
      .force('center', d3.forceCenter(width / 2, height / 2));

    const link = svg.append('g')
      .selectAll('linha')
      .data(links)
      .enter().append('linha')
      .attr('stroke-width', 2)
      .attr('stroke', '#999');

    const node = svg.append('g')
      .selectAll('circle')
      .data(nodes)
      .enter().append('circle')
      .attr('r', 8)
      .attr('fill', '#69b3a2')
      .call(d3.drag<SVGCircleElement, MetroNode>()
        .on('start', dragstart)
        .on('drag', dragged)
        .on('end', dragend) as any);

    node.append('title')
      .text((d: any) => d.id);

    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node
        .attr('cx', (d: any) => d.x)
        .attr('cy', (d: any) => d.y);
    });

    function dragstart(event: any, d: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event: any, d: any) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragend(event: any, d: any) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default MetroGraph;
