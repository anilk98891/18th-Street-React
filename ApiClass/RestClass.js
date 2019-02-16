import RestClient from 'react-native-rest-client';

export default class YourRestApi extends RestClient {
  constructor () {
    // Initialize with your base URL
    super('http://18.221.230.142/archer/api/v1_0');
  }

  login (email, password,country_code,device_type,push_token,device_id) {
    // Returns a Promise with the response.
    return this.POST('/users/login', { email, password,country_code,device_type,push_token,device_id });
  }
  getCurrentUser () {
    // If the request is successful, you can return the expected object
    // instead of the whole response.
    return this.GET('/auth')
      .then(response => response.user);
  }
};
