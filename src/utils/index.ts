import { Request } from "@modelcontextprotocol/sdk/types.js";

export function getParams() {
  const args: Record<string, string> = {};
  process.argv.slice(2).forEach((arg) => {
    if (arg.startsWith("--")) {
      const [key, value] = arg.slice(2).split("=");
      args[key] = value;
    }
  });
  return args;
}

export function getParamValue(name: string) {
  const args = getParams();
  if (!args || typeof args !== "object" || Object.keys(args).length === 0) {
    return "";
  }

  const value =
    args[name] ||
    args[name.toUpperCase()] ||
    args[name.toLowerCase()] ||
    process.env[name] ||
    process.env[name.toUpperCase()] ||
    process.env[name.toLowerCase()] ||
    "";

  return value;
}

export function getAuthValue(request: Request, name: string) {
  const auth: any = request.params?._meta?.auth;
  if (!auth || typeof auth !== "object" || Object.keys(auth).length === 0) {
    return "";
  }

  const value =
    auth?.[name] ||
    auth?.[name.toUpperCase()] ||
    auth?.[name.toLowerCase()] ||
    process.env[name] ||
    process.env[name.toUpperCase()] ||
    process.env[name.toLowerCase()] ||
    "";

  return value;
}
