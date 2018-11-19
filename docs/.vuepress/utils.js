export function formatReturnTypes() {
  if (this.returnTypes.length === 0) {
    return 'void';
  }

  return `{${this.returnTypes.map(value => value.name).join(', ')}}`;
}

export function getLinkForType(typeName) {
  return `/api/${typeName.toLowerCase().replace(/\./g, '/')}.html`;
}