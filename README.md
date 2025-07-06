# Mini E-Commerce API

Simple Express.js backend for the React e-commerce frontend.

## Tech Stack

- **Express.js** - Web framework
- **MongoDB** - Database
- **Node.js** - Runtime

## Quick Start

```bash
# Install dependencies
pnpm install

# Create .env file
MONGODB_URI=mongodb_url
PORT=4000

# Start server
pnpm start
```

## API Endpoints

### Get All Products
```
GET /products
```

### Get Single Product
```
GET /products/:_id
```

### Server Status
```
GET /
```

## Response Format

```json
{
  "success": true,
  "message": "Products retrieved successfully",
  "data": [...products]
}
```

## Product Schema

```javascript
{
  _id: "MongoDB ObjectId",
  title: "Product Name",
  price: 42000,
  images: ["image1.jpg"],
  description: "Product description",
  stockCount: 25,
  inStock: true,
  // ... other fields
}
```

## Development

```bash
# Start development server
pnpm dev

# Server runs on http://localhost:4000
```

## Frontend Repository

[React Frontend](https://github.com/asheque33/qtech-technical-test-react)

---

**Made for Qtec Solution Limited Assessment**
