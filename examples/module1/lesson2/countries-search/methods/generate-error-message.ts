export const generateErrorMessage = (errorCode: number) => {
  if (errorCode === 404) {
    return 'No countries found'
  } else {
    return 'Failed to fetch'
  }
}