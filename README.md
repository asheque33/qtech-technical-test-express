# Mini E-Commerce API

Simple Express.js backend for the [QTech Frontend](https://shopeasy-neon.vercel.app/) Live.

## Tech Stack

- **Express.js** - Web framework
- **MongoDB** - Database
- **Node.js** - Runtime

## Quick Start

```bash
# Install dependencies
pnpm install

# Create .env file
MONGODB_URI=your_mongodb_connection_string
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


## Development

```bash
# Start development server
pnpm dev

# Server runs on http://localhost:4000
```

## Frontend Repository

[QTech Frontend](https://github.com/asheque33/qtech-technical-test-react)

---

**Made for Qtec Solution Limited Assessment**
