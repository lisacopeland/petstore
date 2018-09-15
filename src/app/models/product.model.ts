/**
 * Schema for the product data retrieved by the product service
 *
 * @export
 * @class Product
 */
export class Product {

  constructor(public name: string,
    public description: string,
    public price: number,
    public imageUrl: string,
    public _id: string) { }

    public static productTranslate(responseData: any) {
      return new Product(
          responseData.name,
          responseData.description,
          parseFloat(responseData.price),
          responseData.imageUrl,
          responseData._id);
  }
}
