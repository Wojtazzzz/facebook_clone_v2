import { useMutation } from "@/hooks/use_mutation"

type LoginPayload = {
  email: string,
  password: string
}

export const useLogin = () => {
  const {mutate} = useMutation({
    endpoint: '/users/login'
  });


  
      const login = (data: LoginPayload) => {
        mutate(
            {
              user: {
                  email: data.email,
                  password: data.password,
              }
          });
      }

    return {
            login
    }
}