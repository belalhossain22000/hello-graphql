import { db } from "../../db.js";

export const resolvers = {
  Query: {
    products: () => db.products,
    product: (parents: any, args: { productId: string }, context: any) => {
      const result = db.products.find((p) => p.id == args.productId);
      return result;
    },
    categories: () => db.categories,
    category: (parents: any, args: { categoryId: string }, context: any) => {
      const result = db.categories.find((c) => c.id == args.categoryId);
      return result;
    },
  },
  Product: {
    category: (parent: any) => {
      const category = db.categories.find((c) => c.id == parent.categoryId);
      return category;
    },
    reviews: (parent: any) => {
      const reviews = db.reviews.filter((r) => r.productId == parent.id);
      return reviews;
    },
  },

  Category:{
    products: (parent: any) => {
      const products = db.products.filter((p) => p.categoryId == parent.id);
      return products;
    }
  }
};
