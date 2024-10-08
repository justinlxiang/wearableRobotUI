const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');


const app = express();
const PORT = 3000; // You can use any port you prefer

app.use('/api', createProxyMiddleware({
    target: 'http://localhost:5000/api',
    changeOrigin: true,
    onError: (err, req, res) => {
      console.error('Error fetching from target server:', err);
      res.status(500).send('Proxy server error');
    },
  }));
  
  app.listen(PORT, () => {
      console.log(`Proxy server is running on port ${PORT}`);
  });

// app.use(bodyParser.json());

// const upload = multer(); 

// app.post('/upload_feature_data', upload.array('files'), async (req, res) => {
//     console.log('Received request to /upload_feature_data');
//     try {
//         const formData = new FormData();
//         formData.append('gesture', req.body.gesture); // Updated method
//         console.log(req.body.gesture)
//         req.files.forEach(file => {
//             console.log(`Processing file: ${file.originalname}`);
//             console.log(`File size: ${file.size} bytes`);
//             console.log(`File buffer length: ${file.buffer.length}`);
//             if (file.buffer && file.buffer.byteLength > 0) {
//                 formData.append('files', file.buffer, file.originalname); // Updated method
//             } else {
//                 throw new Error(`File ${file.originalname} is empty or invalid`);
//             }
//         });

//         const response = await fetch('http://localhost:5000/upload_feature_data', {
//             method: 'POST',
//             body: formData,
//             headers: formData.getHeaders() // Added headers
//         });

//         const contentType = response.headers.get('content-type');
//         let data;
//         if (contentType && contentType.includes('application/json')) {
//             data = await response.json();
//         } else {
//             const text = await response.text();
//             data = { message: text };
//         }

//         console.log('Response from target server:', data);
//         res.json(data);
//     } catch (error) {
//         console.error('Error uploading feature data to target server:', error);
//         res.status(500).json({ error: 'Failed to upload feature data to target server' });
//     }
// });


// app.get('/gestures', async (req, res) => {
//     console.log('Received request to /gestures');
//     try {
//         const response = await fetch('http://localhost:5000/gestures');
//         const text = await response.text();
//         const data = text ? JSON.parse(text) : {};
//         console.log('Response from target server:', data);
//         res.json(data);
//     } catch (error) {
//         console.error('Error fetching gestures from target server:', error);
//         res.status(500).json({ error: 'Failed to fetch gestures from target server' });
//     }
// });

// app.post('/add_gesture', async (req, res) => {
//     console.log('Received request to /add_gesture with body:', req.body);
//     try {
//         const response = await fetch('http://localhost:5000/add_gesture', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(req.body)
//         });
//         const text = await response.text();
//         const data = text ? JSON.parse(text) : {};
//         console.log('Response from target server:', data);
//         res.json(data);
//     } catch (error) {
//         console.error('Error adding gesture to target server:', error);
//         res.status(500).json({ error: 'Failed to add gesture to target server' });
//     }
// });


// app.post('/start', async (req, res) => {
//     console.log('Received request to /start with body:', req.body);
//     try {
//         const response = await fetch('http://localhost:5000/start', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(req.body)
//         });
//         const text = await response.text();
//         const data = text ? JSON.parse(text) : {};
//         console.log('Response from target server:', data);
//         res.json(data);
//     } catch (error) {
//         console.error('Error starting process on target server:', error);
//         res.status(500).json({ error: 'Failed to start process on target server' });
//     }
// });

// app.get('/samples/:gesture', async (req, res) => {
//     const gesture = req.params.gesture;
//     try {
//         const response = await fetch(`http://localhost:5000/samples/${gesture}`);
//         const data = await response.json();
//         console.log('Response from target server:', data);
//         res.json(data);
//     } catch (error) {
//         console.error('Error fetching samples from target server:', error);
//         res.status(500).json({ error: 'Failed to fetch samples from target server' });
//     }
// });

// app.delete('/delete_gesture', async (req, res) => {
//     console.log('Received request to /delete_gesture with body:', req.body);
//     try {
//         const response = await fetch('http://localhost:5000/delete_gesture', {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(req.body)
//         });
//         const text = await response.text();
//         const data = text ? JSON.parse(text) : {};
//         console.log('Response from target server:', data);
//         res.json(data);
//     } catch (error) {
//         console.error('Error deleting gesture from target server:', error);
//         res.status(500).json({ error: 'Failed to delete gesture from target server' });
//     }
// });

// app.post('/train_model', async (req, res) => {
//     console.log('Received request to /train_model with body:', req.body);
//     try {
//         const response = await fetch('http://localhost:5000/train_model', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(req.body)
//         });
//         const text = await response.text();
//         const data = text ? JSON.parse(text) : {};
//         console.log('Response from target server:', data);
//         res.json(data);
//     } catch (error) {
//         console.error('Error training model on target server:', error);
//         res.status(500).json({ error: 'Failed to train model on target server' });
//     }
// });

// app.get('/download_model', async (req, res) => {
//     console.log('Received request to /download_model');
//     try {
//         const response = await fetch('http://localhost:5000/download_model');
//         const data = await response.json();
//         console.log('Response from target server:', data);
//         res.json(data);
//     } catch (error) {
//         console.error('Error downloading model from target server:', error);
//         res.status(500).json({ error: 'Failed to download model from target server' });
//     }
// });

