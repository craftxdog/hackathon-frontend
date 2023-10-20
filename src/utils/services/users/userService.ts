import database from "@/utils/connections/dbConnection"

const addPatient = async (user:any, role_id:string) => {
    try {
        const { data, error } = await database
            .from('user_role')
            .insert({ user_id: user.uid, role_id: role_id })
            .select();

        return {
            data,
            error
        };
    } catch (error) {
        // Maneja errores aquí si es necesario
        console.error('Error en addPatient:', error);
        return {
            data: null,
            error
        };
    }
}


export default addPatient;