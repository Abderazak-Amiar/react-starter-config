import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/users', () => {
    return HttpResponse.json([
      {
        id: 1,
        name: 'John',
      },
      {
        id: 2,
        name: 'Mark',
      },
      {
        id: 3,
        name: 'Thomas',
      },
    ]);
  }),
  http.post('/api/messages', async ({ request }) => {
    const authToken = request.headers.get('Authorization');
    if (!authToken)
      return HttpResponse.json({ msg: 'Unauthorized' }, { status: 401 });
    const requestBody = await request.json();
    return HttpResponse.json(
      {
        content: requestBody?.toString,
        createdAt: new Date().toLocaleString(),
      },
      { status: 200 },
    );
  }),
];
