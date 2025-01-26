export enum MaintenanceRoutes {
  root = `/maintenance`,
  requests = `${MaintenanceRoutes.root}/requests`,
  technician = `${MaintenanceRoutes.root}/technician`,
  technicianList = `${MaintenanceRoutes.root}/technician-list`,
  trackRequest = `${MaintenanceRoutes.root}/track-request`,
}
