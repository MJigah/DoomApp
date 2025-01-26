export enum BillingRoutes {
  root = `/billing`,
  billingLists = `${BillingRoutes.root}/lists`,
  billingReceipt = `${BillingRoutes.root}/receipt`,
  billingSuccess = `${BillingRoutes.root}/success`,
  makePayment = `${BillingRoutes.root}/payment`,
}
