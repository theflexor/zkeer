import { api } from "../api-instace"

export const getModels = async () => {
  return api.get("/models")
}
