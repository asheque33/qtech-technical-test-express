const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4001;

// middleware
app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db('qtechDB');
    const productsCollection = db.collection('products');

    // -------get all products
    app.get('/products', async (req, res) => {
      const result = await productsCollection.find().toArray();
      res.status(200).json({
        success: true,
        message: 'Products retrieved successfully',
        data: result,
      });
    });
    // -------get single product
    app.get('/products/:_id', async (req, res) => {
      try {
        const id = req.params._id;
        if (!ObjectId.isValid(id)) {
          return res.status(400).json({
            success: false,
            message: 'Invalid product ID',
          });
        }

        const result = await productsCollection.findOne({
          _id: new ObjectId(id),
        });

        if (!result) {
          return res.status(404).json({
            success: false,
            message: 'Product not found',
          });
        }

        res.status(200).json({
          success: true,
          message: 'Product retrieved successfully',
          data: result,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: 'Server error',
          error: error.message,
        });
      }
    });

    app.listen(port, () => {
      console.log(`Server is running the port on ${port}`);
    });
  } finally {
  }
  app.get('/', (req, res) => {
    const serverStatus = {
      message: 'Server is running smoothly',
      timestamp: new Date().toLocaleDateString('en-GB'),
    };
    res.json(serverStatus);
  });
}
run().catch(console.dir);
