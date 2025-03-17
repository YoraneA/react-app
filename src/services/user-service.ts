import apiClient from "./api-client.ts";

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

class UserService {
  getAllUsers() {
    const controller = new AbortController();

    const request = apiClient.get<User[]>(
      '/users',
      { signal: controller.signal }
    );

    return { request, cancel: () => controller.abort() };
  }
}

export default new UserService();