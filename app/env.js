// Environment Variables

export const dev = window.location.origin.includes('localhost')

// NOTE this variable will be used in the 'api' instance of axios in the AxiosService.js
export const baseURL = dev ? 'https://sandbox.codeworksacademy.com' : ''

// NOTE these allow to be authenticated through the sandbox API to do additional actions with the API
// 🐕🪪
export const domain = 'codeworksclassroom.auth0.com'
export const audience = 'https://codeworksclassroom.com'
export const clientId = 'pOXw2OGv1LsYi7LEBmDF04RLkXQvldml'

