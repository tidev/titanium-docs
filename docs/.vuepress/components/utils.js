export function formatReturnTypes() {
  if (this.returnTypes.length === 0) {
    return 'void';
  }

  return `{${this.returnTypes.map(value => value.name).join(', ')}}`;
}