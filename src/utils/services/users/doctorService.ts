import database from '@/utils/connections/dbConnection'
import { UserRequest } from '@/utils/interfaces/user';
import { Result, UserData, searchByNonNullFields, upsertData } from './userService';
import { SupabaseClient } from '@supabase/supabase-js';

export interface DoctorRequest {
    user_id: string | null;
    doctor_code: string | null;
    lastname: string | null;
    date_of_birth: Date | null;
    gender: number | null;
    cedula: string | null;
}

export interface DoctorResponse {
    id: string;
    created_at: Date;
    deleted_at: string | null;
    user_id: string | null;
    doctor_code: string | null;
    lastname: string | null;
    date_of_birth: Date | null;
    gender: number | null;
    cedula: string | null;
}

export async function addDoctor(user: UserRequest, doctor: DoctorRequest): Promise<Result<DoctorResponse>> {
    try {
        // Insertar o actualizar datos del usuario
        const { data: userData, error: userError } = await upsertData<UserRequest, UserData>('user', user, database);

        if (userError) {
            return { data: null, error: userError };
        }

        if (userData !== null) {
            doctor.user_id = userData[0].id;
        }

        // Insertar o actualizar datos del doctor
        const { data: doctorData, error: doctorError } = await upsertData<DoctorRequest, DoctorResponse>('doctor', doctor, database);

        if (doctorError) {
            console.error('Error al insertar/actualizar datos del doctor:', doctorError);
            return { data: null, error: doctorError };
        }

        return { data: doctorData, error: null };
    } catch (error: any) {
        console.error('Error en addDoctor:', error);
        return { data: null, error };
    }
}
export interface DoctorQuery {
    id: string | null
}

// Método para buscar doctores por ID
export async function searchDoctorById(doctorId: string | null): Promise<Result<DoctorResponse[]>> {
    const fields: DoctorQuery = { id: doctorId };
    return await searchByNonNullFields<DoctorQuery, DoctorResponse>('doctor', fields);
}

interface DoctorSearchCriteria {
    name: string | null;
    lastname: string | null;
}

// Método para buscar doctores por nombre y apellido
export async function searchDoctorByNameAndLastName(name: string | null, lastname: string | null, supabase: SupabaseClient): Promise<Result<DoctorResponse[]>> {
    const fields: DoctorSearchCriteria = { name, lastname };
    return await searchByNonNullFields<DoctorSearchCriteria, DoctorResponse>('doctor', fields);
}
