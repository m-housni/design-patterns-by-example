class Server {
  getData() {
    // get data from server
    return 'data';
  }
}
class ProxyServer {
  constructor() {
    this.server = new Server();
    this.cachedData = null;
  }
  getData() {
    if (!this.cachedData) {
      this.cachedData = this.server.getData();
      console.log('get data from server')
    } else {
      console.log('get data from cache')
    }
    return this.cachedData;
  }
}

const proxyServer = new ProxyServer(new Server());
proxyServer.getData(); // outputs "get data from server"
proxyServer.getData(); // outputs "get data from cache"
