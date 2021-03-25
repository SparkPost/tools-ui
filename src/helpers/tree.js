
export function flatten({ top = {}, node, parent = null, id = 'root' }) {
  node.treeId = id;
  if (parent) {
    parent.children.push(id);
  }

  node.expanded = false;

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
