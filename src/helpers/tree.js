import _ from 'lodash';

export function setupTree(node) {
  const defaults = {
    expanded: false, // default everything to collapsed, expand root later
    displayType: node.type
  };
  const walked = Object.assign(defaults, node);

  // mx and a records have child records, but no value of their own, flatten them to simplify the tree
  if (node.type === 'mx' || node.type === 'a') {
    return node.children.map((child) => {
      child.displayType = node.type;
      return setupTree(child);
    });
  }

  if (node.children && node.children.length) {
    walked.children = _.flatten(node.children.map(setupTree));
  }

  return walked;
}

export function flatten({ top = {}, node, parent = null, id = 'root' }) {
  node.treeId = id;
  if (parent) {
    parent.children.push(id);
  }

  node.status = 'valid';
  if (node.warnings && node.warnings.length) {
    node.status = 'warning';
  }
  if (node.errors && node.errors.length) {
    node.status = 'error';
  }

  if (node.children) {
    const children = [...node.children];
    node.children = [];
    children.forEach((child, i) => flatten({ top, node: child, parent: node, id: `${id}.${i}` }));
  }
  top[id] = node;
  return top;
}
