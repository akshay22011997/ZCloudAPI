async function login(request, username, password) {
  const response = await request.post('/auth/login', {
    data: { username, password },
  });
  return response.json();
}

module.exports = { login }; 