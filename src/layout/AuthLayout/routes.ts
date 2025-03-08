export enum AuthRoutes {
  root = `/auth`,
  onboarding = `${AuthRoutes.root}/onboarding`,
  splash = `${AuthRoutes.root}/splash`,
  register = `${AuthRoutes.root}/register`,
  login = `${AuthRoutes.root}/login`,
  category = `${AuthRoutes.register}/category`,
}
