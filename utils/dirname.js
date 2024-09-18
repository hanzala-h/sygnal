import { dirname as dn } from "node:path";
import { fileURLToPath } from "node:url";

const dirname = (meta) => dn(fileURLToPath(meta.url));

export default dirname;
