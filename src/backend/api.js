import axiosInstance from './axiosInstance';

const setAuthToken = (token) => {
  if (token) {
    // Set the token in the Axios instance headers
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('AuthToken', token);
  } else {
    delete axiosInstance.defaults.headers.common['Authorization'];
  }
};

export const signup = async (userData) => {
  try {
    const response = await axiosInstance.post(`/auth/signup`, userData);
    const { token } = response.data;
    setAuthToken(token);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Signup failed');
  }
};

export const login = async (credentials) => {
  try {
    const response = await axiosInstance.post(`/auth/login`, credentials);
    const { token } = response.data;
    setAuthToken(token); // Set the token for future requests
    return response.data; // Return user data and token if needed
  } catch (error) {
    throw error.response ? error.response.data : new Error('Login failed');
  }
};

export const logout = () => {
  setAuthToken(null); // Clear the token on logout
};

export const getUser = async (userId) => {
  try {
    const response = await axiosInstance.get(`/auth/${userId}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Update failed');
  }
};

export const updateUser = async (userData) => {
  try {
    const response = await axiosInstance.put(`/user`, userData);
    return response.data; // Return updated user data
  } catch (error) {
    throw error.response ? error.response.data : new Error('Update failed');
  }
};

export const addPost = async (postData) => {
  try {
    const response = await axiosInstance.post(`/posts`, postData);
    return response.data; // Return the newly created post
  } catch (error) {
    throw error.response ? error.response.data : new Error('Adding post failed');
  }
};

// Update an existing post
export const updatePost = async (postId, postData) => {
  try {
    const response = await axiosInstance.patch(`/posts/${postId}`, postData);
    return response.data; // Return the updated post
  } catch (error) {
    throw error.response ? error.response.data : new Error('Updating post failed');
  }
};

// Get a list of posts
export const getPosts = async () => {
  try {
    const response = await axiosInstance.get(`/posts`);
    return response.data; // Return the list of posts
  } catch (error) {
    throw error.response ? error.response.data : new Error('Fetching posts failed');
  }
};

// Delete a post
export const deletePost = async (postId) => {
  try {
    const response = await axiosInstance.delete(`/posts/${postId}`);
    return response.data; // Return response indicating post deletion
  } catch (error) {
    throw error.response ? error.response.data : new Error('Deleting post failed');
  }
};
