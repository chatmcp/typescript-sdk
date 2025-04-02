# MCP Typescript SDK by ChatMCP

## How to use

1. install sdk

```shell
npm i @chatmcp/sdk
```

2. update MCP Server

```typescript
import { RestServerTransport } from "@chatmcp/sdk/server/rest.js";

async function main() {
  const port = 9593;
  const endpoint = "/rest";

  const transport = new RestServerTransport({ port, endpoint });
  await server.connect(transport);

  await transport.startServer();
}
```

3. request api

```curl
curl -X POST http://127.0.0.1:9593/rest \
-H "Content-Type: application/json" \
-d '{
  "jsonrpc": "2.0",
  "id": "1",
  "method": "initialize",
  "params": {
    "protocolVersion": "1.0",
    "capabilities": {},
    "clientInfo": {
      "name": "your_client_name",
      "version": "your_version"
    }
  }
}'
```
