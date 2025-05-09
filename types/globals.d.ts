export {}

// Create a type for the roles
export type Roles = 'Admin' | 'Member'

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles
    }
  }
}