// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  registerUrl: "http://localhost:3001/api/auth/register",
  registerValidate: "http://localhost:3001/api/auth/register/validateIdAndEmail",
  loginUrl: "http://localhost:3001/api/auth/login",
  productsCount: "http://localhost:3001/api/products/count",
  productsUrl: "http://localhost:3001/api/products/",
  productsByCategoryId: "http://localhost:3001/api/products/byCategoryId/",
  productsByName: "http://localhost:3001/api/products/byName/",
  categoriesUrl: "http://localhost:3001/api/categories",
  ordersCount: "http://localhost:3001/api/orders/count",
  cartUrl: "http://localhost:3001/api/cart",
  cartItemUrl: "http://localhost:3001/api/cart/item",
  deleteCartItem: "http://localhost:3001/api/cart/item/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
