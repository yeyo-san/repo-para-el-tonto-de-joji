import { Router } from 'express';
import upload from '../middlewares/multerConfig';
import path from 'path';

export const fileRouter = Router();

// Ruta para manejar la carga de archivos
fileRouter.post('/', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }
  res.send(`Archivo subido exitosamente: ${req.file.originalname}`);
});

// Ruta para obtener imágenes
fileRouter.get('/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, '../../public/uploads', filename);

  res.sendFile(filePath, err => {
    if (err) {
      res.status(404).send('Image not found');
    }
  });
});