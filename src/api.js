class Api {
  constructor() {
    this.token = null;
  }

  async fetchToken() {
    const response = await fetch(
      "http://localhost:3000/api/v1/auth/anonymous?platform=subscriptions"
    );
    const { token } = await response.json();
    this.token = token;
  }

  async getData() {
    if (!this.token) {
      await this.fetchToken();
    }

    const response = await fetch(
      "http://localhost:3000/api/v1/core/preview-courses",
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }
    );

    return response.json();
  }

  async getCourse(courseId) {
    if (!this.token) {
      await this.fetchToken();
    }

    const response = await fetch(
      `http://localhost:3000/api/v1/core/preview-courses/${courseId}`,
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }
    );

    return response.json();
  }
}

export default new Api();
