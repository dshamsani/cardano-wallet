export const getTitle = (title?: string) => {
  const base = 'Cardano Wallet'
  const separator = ' | '

  if (title) {
    return title + separator + base
  }

  return base
}
