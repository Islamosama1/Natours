/* eslint-disable   */

import axios from 'axios';
import { showAlert } from './alerts';
// import Swal from 'sweetalert2';

export const login = async (email, password) => {
  try {
    const response = await axios.post('/api/v1/users/login', {
      email,
      password,
    });

    // console.log(response);

    if (response.data.status === 'success') {
      showAlert('success', 'Logged in successfully!');
      window.location = '/';
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
    // Swal.fire({
    //   title: 'Error!',
    //   text: 'Do you want to continue',
    //   icon: 'error',
    //   confirmButtonText: 'Cool',
    // });
  }
};

export const logout = async () => {
  try {
    const res = await axios.get('/api/v1/users/logout');
    if ((res.data.status = 'success')) location.reload(true);
  } catch (err) {
    showAlert('error', 'Error logging out!');
  }
};
