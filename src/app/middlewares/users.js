import api from '../../lib/api';

export default async (req, res, next) => {
  try {
    const response = await api.get('/users');
    req.users = response.data;
    return next();
  } catch (err) {
    return res.status(400).json({ error: 'API communication failed' });
  }
};
