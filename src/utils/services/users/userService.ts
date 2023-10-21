import database from '@/utils/connections/dbConnection'
import { Patient, UserRequest } from '@/utils/interfaces/user';
import { PostgrestError, SupabaseClient } from '@supabase/supabase-js';


export interface UserData {
  id: string;
}

export interface PatientData {
  user_id: string;
}

export interface Result<T> {
  data: T[] | null;
  error: PostgrestError | null;
}

export async function upsertData<T, TOut>(table: string, dataFrom: T, supabase: SupabaseClient): Promise<Result<TOut>> {
  const result = await supabase.from(table).upsert([dataFrom]).select();

  return {
    data: result.data,
    error: result.error,
  };
}

export async function searchByNonNullFields<T, TOut>(
  table: string,
  fields: Partial<T>
): Promise<Result<TOut[]>> {
  const query = database.from(table).select();

  // Filtra los campos que no son nulos
  for (const key in fields) {
    if (fields[key] !== null && fields[key] !== undefined) {
      query.or(`${key}.ilike.%${fields[key]}%`);
    }
  }
  // Realiza la consulta
  const { data, error } = await query.select();

  return { data, error };
}

// Método para buscar por ID
async function searchUserById(userId: string): Promise<Result<UserData[]>> {
  const fields = { id: userId };
  return await searchByNonNullFields<UserData, UserData>('user', fields);
}

interface UserSearchCriteria {
  name: string | null;
  lastname: string | null;
}
// Método para buscar por nombre y apellido
export async function searchUserByNameAndLastName(name: string | null, lastname: string | null): Promise<Result<UserData[]>> {
  const fields = { name, lastname };
  return await searchByNonNullFields<UserSearchCriteria, UserData>('user', fields);
}



export async function addPatient(user: UserRequest, patient: Patient): Promise<Result<PatientData>> {
  try {
    const { data: dataUser, error: errorUpsert } = await upsertData<UserRequest, UserData>('user', user, database);

    if (errorUpsert) {
      return { data: null, error: errorUpsert };
    }

    if (dataUser !== null) {
      patient.user_id = dataUser[0].id;
    }


    const { data, error } = await upsertData<Patient, PatientData>('patient', patient, database);

    if (error) {
      console.error('Error al insertar/actualizar datos de paciente:', error);
      return { data: null, error: error };
    }

    return {
      data: data, error
    };
  } catch (error: any) {
    console.error('Error en addPatient:', error);
    return { data: null, error };
  }
}


export default addPatient
