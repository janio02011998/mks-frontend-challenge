import { http } from '@/config/http';

export async function getAll({
  page = 1,
  rows = 8,
  sortBy = 'id',
  orderBy = 'DESC',
}) {
  const query = {
    page,
    rows,
    sortBy,
    orderBy,
  };

  try {
    const url = '/products';
    const response = await http.get(url, {
      params: query,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
