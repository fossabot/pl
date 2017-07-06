export function verifyOwnership (actionType, moduleName) {
  const regexp = new RegExp(`^${moduleName}/`, 'g');
  return !!actionType.match(regexp);
}
