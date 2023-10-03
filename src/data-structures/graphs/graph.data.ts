/**
 * Graphs
 * * consists of vertices/nodes/points and edges/connections
 * * vertex - a node
 * * edge - connection between vertices
 *
 * Types of graphs
 * * directed/undirected - drections assigned to distances between vertices
 * * weighted/unweighted - values assigned to distances between vertices
 * * tree structures are a special type of graph
 *
 * how to store a graph?
 * * adjacency matrix: a matrix that stores an edge between two nodes as a 1 and no edge as a 0
 * * adjacency list:
 *   - an array that contains a list of connected edges at the index that corresponds to a given vertex
 *   - a hash table that contains a list of connected edges at the key that corresponds to a given vertex
 *
 * BigO of adjacency matrix vs adjacency list
 * |V| - number of vertices
 * |E| - number of edges
 *
 * operation        | adjacency list  | adjacency matrix
 * add vertex       | O(1)            | O(|V^2|)
 * add edge         | O(1)            | O(1)
 * remove vertex    | O(|V| + |E|)    | O(|V^2|)
 * remove edge      | O(|E|)          | O(1)
 * query            | O(|V| + |E|)    | O(1)
 * storage          | O(|V| + |E|)    | O(|V^2|)
 *
 * adjacency list:
 * * pro: can take up less space (in sparse graphs)
 * * pro: faster to iterate over all edges
 * * con: can be slower to lookup specific edge
 *
 * adjacency matrix:
 * * con: takes up more space (in sparse graphs)
 * * con: slower to iterate over all edges
 * * pro: faster to lookup specific edge
 *
 * why is an adjacency list preferrable in most cases?
 * most data in the real-world tends to lend itself to sparser and/or larger graphs,
 * with lots of vertices but not densly packed with edges between them
 */

// Observer
type ListenerFn<Event> = (event: Event) => void;
type NoopFn = () => void;

type Observer<Event> = {
  subscribe(listener: ListenerFn<Event>): NoopFn;
  publish(event: Event): void;
};

function createObserver<Event>(): Observer<Event> {
  let listeners: ListenerFn<Event>[] = [];

  return {
    /**
     * subscribe function
     * @return unsubscribe function
     */
    subscribe(listener: ListenerFn<Event>): NoopFn {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter((l) => l !== listener);
      };
    },
    /**
     * publish function - goes over each listener fn in listeners and calls them with the published event
     */
    publish(event: Event): void {
      listeners.forEach((l) => l(event));
    },
  };
}

const deduplicate = <T>(array: T[]): T[] => [...new Set(array)];

type AdjacencyList = Record<string, string[]>;

export class UndirectedGraph {
  public adjacencyList: AdjacencyList;

  #afterAddObserver: Observer<AdjacencyList>;

  constructor(adjacencyList: AdjacencyList = {}) {
    this.adjacencyList = adjacencyList;
    this.#afterAddObserver = createObserver();
  }

  addVertex(vertex: string): AdjacencyList {
    if (Array.isArray(this.adjacencyList[vertex])) {
      throw new Error(`vertex ${vertex} was already added!`);
    }

    const newAdjacencyList: AdjacencyList = {
      ...this.adjacencyList,
      [vertex]: [],
    };

    this.#afterAddObserver.publish(newAdjacencyList);

    this.adjacencyList = newAdjacencyList;
    return this.adjacencyList;
  }

  removeVertex(vertexToRemove: string): AdjacencyList {
    const list = this.adjacencyList;
    if (!this.validateVertex(vertexToRemove)) {
      return list;
    }

    const { [vertexToRemove]: removed, ...rest } = this.adjacencyList;

    Object.keys(rest).forEach((vertex) => {
      rest[vertex] = rest[vertex].filter((v) => v !== vertexToRemove);
    });

    this.adjacencyList = rest;
    return this.adjacencyList;
  }

  removeVertex2(vertexToRemove: string): AdjacencyList {
    const list = this.adjacencyList;
    if (!this.validateVertex(vertexToRemove)) {
      return list;
    }

    while (list[vertexToRemove].length > 0) {
      const vertex: string | undefined = list[vertexToRemove].pop();
      if (vertex) {
        this.removeEdge(vertexToRemove, vertex);
      }
    }

    delete list[vertexToRemove];

    this.adjacencyList = list;
    return this.adjacencyList;
  }

  addEdge(vertex0: string, vertex1: string): AdjacencyList {
    const list = this.adjacencyList;
    if (![vertex0, vertex1].every((v) => this.validateVertex(v))) {
      return list;
    }

    // no circular references allowed
    if (vertex0 === vertex1) {
      return list;
    }

    list[vertex0] = deduplicate([...list[vertex0], vertex1]);
    list[vertex1] = deduplicate([...list[vertex1], vertex0]);

    this.adjacencyList = list;
    return this.adjacencyList;
  }

  removeEdge(vertex0: string, vertex1: string): AdjacencyList {
    const list = this.adjacencyList;
    if (![vertex0, vertex1].every((v) => this.validateVertex(v))) {
      return list;
    }

    // no circular references allowed
    if (vertex0 === vertex1) {
      return list;
    }

    list[vertex0] = list[vertex0].filter((v) => v !== vertex1);
    list[vertex1] = list[vertex1].filter((v) => v !== vertex0);

    this.adjacencyList = list;
    return this.adjacencyList;
  }

  validateVertex(vertex: string): boolean {
    if (!this.adjacencyList[vertex]) {
      throw new Error(`vertex ${vertex} not found!`);
    }

    return true;
  }

  /**
   * subscribe listener function to afterAdd observer
   * @param {function} listener function to be run when event is published
   * @return unsubscribe function
   */
  onAfterAdd(listener: ListenerFn<AdjacencyList>): NoopFn {
    return this.#afterAddObserver.subscribe(listener);
  }
}

// const graph = new UndirectedGraph();

// graph.onAfterAdd(console.log);

// graph.addVertex('Tokyo');
// graph.addVertex('Berlin');
// graph.addVertex('Berlin');
// graph.addVertex('New York');

// graph.addEdge('New York', 'Berlin');
// graph.addEdge('New York', 'B');
// graph.addEdge('New York', 'Tokyo');
// graph.addEdge('Tokyo', 'Berlin');
// graph.addEdge('New York', 'Berlin');
// graph.addEdge('Berlin', 'New York');
// graph.addEdge('New York', 'New York');

// graph.removeEdge('Berlin', 'N');
// graph.removeEdge('Berlin', 'New York');
// console.log('adjacencyList: ', graph.adjacencyList);
// graph.removeEdge('Berlin', 'New York');
// graph.removeEdge('Berlin', 'New York');
// graph.removeEdge('New York', 'New York');
// console.log('adjacencyList: ', graph.adjacencyList);
// graph.removeEdge('Tokyo', 'New York');
// // graph.removeEdge('SF', 'New York');

// graph.removeVertex2('New York');
// graph.removeVertex('New York');
// graph.removeVertex('New');
// console.log('adjacencyList: ', graph.adjacencyList);
