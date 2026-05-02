import { createContext,useState } from "react";


export const AuthContext = createContext()


export const AuthProvider = ({ children }) => { 

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

     const handleRegister = async ({ username, email, password }) => {
        setLoading(true)
        try {
            const response = await authAPI.register({ username, email, password })
            setUser(response.data.user) // ✅ Set user after register
        } catch (error) {
            console.error("Register failed:", error)
        } finally {
            setLoading(false) // ✅ Always stop loading
        }
    }

    const handleLogin = async ({ email, password }) => {
        setLoading(true)
        try {
            const response = await authAPI.login({ email, password })
            setUser(response.data.user) // ✅ Set user after login
        } catch (error) {
            console.error("Login failed:", error)
        } finally {
            setLoading(false)
        }
    }

    


    return (
        <AuthContext.Provider value={{user,setUser,loading,setLoading}} >
            {children}
        </AuthContext.Provider>
    )

    
}