import PocketBase from "pocketbase"

export const pb = new PocketBase(process.env.REACT_APP_POCKETBASE_URL);
