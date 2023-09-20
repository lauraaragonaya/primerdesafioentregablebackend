class ProductManager {
	constructor() {
	  this.products = [];
	  this.nextId = 1;
	}
  
	addProduct(product) {
	  if (
		!product ||
		!product.code ||
		!product.title ||
		!product.description ||
		!product.price ||
		!product.thumbnail ||
		!product.stock
	  ) {
		console.error("Todos los campos son obligatorios.");
		return;
	  }
  
	  const existingProduct = this.products.find(p => p.code === product.code);
	  if (existingProduct) {
		console.error("El producto con el mismo código ya existe.");
		return;
	  }
  
	  product.id = this.nextId++;
	  this.products.push(product);
	  console.log("Producto agregado:", product);
	}
  
	getProducts() {
	  return this.products;
	}
  
	getProductById(id) {
	  const product = this.products.find(p => p.id === id);
	  if (!product) {
		console.error("Producto no encontrado");
		return null;
	  }
	  return product;
	}
  }
  
  // Ejemplo de uso:
  const manager = new ProductManager();
  
  manager.addProduct({
	code: "001",
	title: "Mesa",
	description: "Mesa de madera liviana",
	price: 10.99,
	thumbnail: "img/mesa-90-x-90-cuadrada.jpg",
	stock: 100,
  });
  
  manager.addProduct({
	code: "002",
	title: "Silla",
	description: "Silla de madera liviana",
	price: 19.99,
	thumbnail: "img/silla-de-madera.jpg",
	stock: 50,
  });
  
  console.log("Todos los productos:", manager.getProducts());
  
  const productId = 2;
  const product = manager.getProductById(productId);
  if (product) {
	console.log(`Producto con ID ${productId}:`, product);
  }