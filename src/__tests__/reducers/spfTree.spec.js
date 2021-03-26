import treeReducer from 'reducers/spfTree';

const mockTree = {
  root: {
    name: 'what',
    expanded: false
  },
  'root.1': {
    fish: 'trout',
    expanded: false
  },
  'root.2': {
    whatever: 'who cares',
    expanded: true
  }
};

// TODO understand jest mocking way better
jest.mock('helpers/tree', () => ({
  setupTree: () => '',
  flatten: () => mockTree
}));

describe('reducers: spf tree', () => {

  it('should return correct state for success action', () => {
    const action = {
      type: 'SPF_INSPECT_SUCCESS',
      payload: {}
    };
    const expectedTree = { ...mockTree };
    expectedTree.root.expanded = true;
    expect(treeReducer(mockTree, action)).toEqual(expectedTree);
  });

  it('should return the correct state for the fail action', () => {
    const initial = treeReducer();
    const fail = treeReducer(null, { type: 'SPF_INSPECT_FAIL' });
    expect(fail).toEqual(initial);
  });

  it('should return the correct state for the expand action', () => {
    const state = treeReducer(mockTree, {
      type: 'SPF_TREE_EXPAND',
      payload: 'root.1'
    });
    expect(state).not.toBe(mockTree);
    expect(state['root.1']).not.toBe(mockTree['root.1']);
    expect(state.root).toBe(mockTree.root);
    expect(state['root.2']).toBe(mockTree['root.2']);
    expect(state['root.1']).toEqual({
      ...mockTree['root.1'],
      expanded: true
    });
  });

  it('should return the correct state for the collapse action', () => {
    const state = treeReducer(mockTree, {
      type: 'SPF_TREE_COLLAPSE',
      payload: 'root.2'
    });
    expect(state).not.toBe(mockTree);
    expect(state['root.2']).not.toBe(mockTree['root.2']);
    expect(state.root).toBe(mockTree.root);
    expect(state['root.1']).toBe(mockTree['root.1']);
    expect(state['root.2']).toEqual({
      ...mockTree['root.2'],
      expanded: false
    });
  });

});
