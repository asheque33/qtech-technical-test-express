# Mini E-Commerce API

Simple Express.js backend for the [QTech Frontend](https://shopeasy-neon.vercel.app/) Live.

## Tech Stack

- **Express.js** - Web framework
- **MongoDB** - Database
- **Node.js** - Runtime

## Quick Start

```bash
# Clone the repository
git clone https://github.com/asheque33/qtech-technical-test-express.git
cd qtech-technical-test-express

# Install dependencies
pnpm install

# Create .env file
MONGODB_URI=your_mongodb_connection_string
PORT=4000

# Start development server
pnpm dev

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

## Frontend Repository

[QTech Frontend](https://github.com/asheque33/qtech-technical-test-react)

---

**Made for Qtec Solution Limited Assessment**
