const handlers = {};

export const router = {
  /**
   * Add API endpoint handler
   * @param { String } method - request method - POST, GET...
   * @param { String } path - endpoint path
   * @param { Function } handler - API endpoint handler
   */
  route(method, path, handler) {
    if (handlers[path] && handlers[path][method]) {
      throw `Handler for ${method} '${path}' is exists`;
    }
    if (!handlers[path]) {
      handlers[path] = {};
    }
    handlers[path][method] = handler;
  },
  /**
   * Handle API call
   * @param { String } method - request method - POST, GET...
   * @param { String } path - endpoint path
   * @param { IncomingMessage } req - Request object
   * @param { ServerResponse } res - Response object
   */
  handleRequest(method, path, req, res) {
    if (handlers[path] && handlers[path][method]) {
      return handlers[path][method](req, res);
    } else {
      res.writeHead(404);
      return res.end();
    }
  }
};
