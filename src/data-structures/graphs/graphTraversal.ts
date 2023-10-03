/*
 * graph traversal
 * visiting / updating / checking each vertex in a graph
 *
 * examples:
 * - peer to peer networking
 * - web crawlers
 * - finding "closest" matches/recommendations
 * - shortest path problems
 *   - GPS navigation
 *   - solving mazes
 *   - AI (shortes path to win a game)
 *
 */

import { UndirectedGraph } from './graph.data';

/**
 * depth first graph traversal
 * DFS(vertex):
 *   if vertex is empty
 *     return (this is base case)
 *   add vertex to results list
 *   mark vertex as visited
 *   for each neighbor in vertex's neighbors:
 *     if neighbor is not visited:
 *       recursively call DFS on neighbor
 */

const g = new UndirectedGraph();
g.onAfterAdd(console.log);
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

interface DepthFirstSearch {
  (
    this: UndirectedGraph,
    startingVertex: string,
    result?: string[],
    visited?: Record<string, boolean>
  ): string[];
}

interface ExtendedUndirectedGraph extends UndirectedGraph {
  depthFirstSearch: DepthFirstSearch;
}

const depthFirstSearch: DepthFirstSearch = function (
  this: UndirectedGraph,
  startingVertex: string,
  result: string[] = [],
  visited: Record<string, boolean> = {}
): string[] {
  if (!startingVertex) return result;

  result.push(startingVertex);
  visited[startingVertex] = true;

  this.adjacencyList[startingVertex].forEach((neighbor: string) => {
    if (!visited[neighbor]) {
      depthFirstSearch.call(this, neighbor, result, visited);
    }
  });

  return result;
};

function createExtendedUndirectedGraph(
  graph: UndirectedGraph
): ExtendedUndirectedGraph {
  const proxy = new Proxy<UndirectedGraph>(graph, {
    get(target: UndirectedGraph, propKey: string | symbol) {
      if (propKey === 'depthFirstSearch') {
        return depthFirstSearch.bind(target);
      } else {
        return target[propKey as keyof UndirectedGraph];
      }
    },
  }) as ExtendedUndirectedGraph;

  return proxy;
}

const otherG = createExtendedUndirectedGraph(g);
const result2 = otherG.depthFirstSearch('A'); // ["A", "B", "D", "E", "C", "F"]
console.log(result2);

class ExtendedUndirectedGraphImpl extends UndirectedGraph
  implements ExtendedUndirectedGraph {
  constructor() {
    super();
  }

  depthFirstSearch(startingVertex: string): string[] {
    return depthFirstSearch.call(this, startingVertex);
  }
}

const newG = new ExtendedUndirectedGraphImpl();
newG.onAfterAdd(console.log);
newG.addVertex('A');
newG.addVertex('B');
newG.addVertex('C');
newG.addVertex('D');
newG.addVertex('E');
newG.addVertex('F');

newG.addEdge('A', 'B');
newG.addEdge('A', 'C');
newG.addEdge('B', 'D');
newG.addEdge('C', 'E');
newG.addEdge('D', 'E');
newG.addEdge('D', 'F');
newG.addEdge('E', 'F');

const result3 = newG.depthFirstSearch('A'); // ["A", "B", "D", "E", "C", "F"]
console.log(result3);
