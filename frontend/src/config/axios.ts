import axios from 'axios';

export const api = axios.create({
	baseURL: '/api',
  });

export const testAxiosGet = async () =>{
	const res = await axios.get("/api/HelloWorld/Test")
	return res
}

export const testAxiosPost = async () =>{
	const res = await axios.post("/api/HelloWorld/PostTest",
		{
			firstName:"first",
			lastName: "name"
		}
	)
	return res
}