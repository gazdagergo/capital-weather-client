export const checkStatusOk = response => {
  if (response.status === 200) {
    return response.data;
  }
  return response;
}

export const toCamelCase = s => (
  s.replace(/([-_][a-z])/ig, ($1) => (
    $1.toUpperCase()
      .replace('-', '')
      .replace('_', '')
  ))
)

export const toCamelCaseObject = obj => (
  Object.entries(obj).reduce((acc, [key, value]) => (
    {...acc, [toCamelCase(key)]: value }
  ), {})
)