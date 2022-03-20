import movieApi from "../api"

export default class StorieService {
	static async getFeatured(whareclouse = null) {
		let url = "/Featured"
		try {
			const response = await movieApi.get(url)
			if (response.status > 200 && response.status<300) {
				throw new Error("Can not find movie.")
			}
			return response.data
		} catch (e) {
			console.log(e);
			return null
		}
	}
	static async getTrendingNow(whareclouse = null) {
		let url = `/TendingNow`
		try {
			const response = await movieApi.get(url)
			if (response.status > 200 && response.status<300) {
				throw new Error("Can not find movie.")
			}
			return response.data
		} catch (e) {
			console.log(e);
			return null
		}
	}

	static async setFeatured(data) {
		let url = "/Featured"
		try {
			const response = await movieApi.post(url, data)

			if (response.status < 200 && response.status>300) {
				throw new Error("Error.")
			}
			return response.data
		} catch (e) {
			console.log(e);
			return null
		}
	}
	
}