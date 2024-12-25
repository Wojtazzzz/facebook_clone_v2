import { fetchData } from "@/utils/fetch_data"
import { useMutation } from "@tanstack/react-query"

export const useLogin = () => {
    const {mutate} = useMutation({
        mutationFn: async (data: any) => {
          return  await fetchData({
            method: 'POST',
            endpoint: '/users/login',
            payload: {
                user: {
                    email: data.email,
                    password: data.password,
                }
            }
          })
        },
      })

      const login = (data: any) => {
        mutate(data);
      }

    return {
            login
    }
}