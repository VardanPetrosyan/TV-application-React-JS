import { axios, userApi } from "../api"
import AuthResponse from "../models/AuthResponse"

export default class AuthService {
	static async registration(form) {
		try {
			const response = await userApi.post("/auth/registration", form)
			if (response.status !== 201) {
				throw new Error("Can not create the account")
			}
			return new AuthResponse(response.data)
		} catch (e) {
			console.log(e);
			return null
		}
	}
	static async login(userNameOrEmail, password) {
		try {
			const response = await userApi.post("/auth/login", { userNameOrEmail, password })
			if (response.status !== 200) {
				throw new Error("Can not login in system")
			}
			return new AuthResponse(response.data)
		} catch (e) {
			console.log(e);
			return null
		}
	}
	static async logout() {
		try {
			const response = await userApi.post("/auth/logout")
			if (response.status !== 204) {
				throw new Error("Something gones wrong during logout")
			}
			return true
		} catch (e) {
			console.log(e);
			return null
		}
	}

	static async refresh() {
		return await axios.get(process.env.REACT_APP_API + '/auth/refresh', { withCredentials: true })
	}
}