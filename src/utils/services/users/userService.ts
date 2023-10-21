import database from '@/utils/connections/dbConnection'
import { Patient, UserRequest } from '@/utils/interfaces/user';
import { PostgrestError, PostgrestSingleResponse, SupabaseClient } from '@supabase/supabase-js';


interface UserData {
  id: string;
}

interface PatientData {
  user_id: string;
  // Otras propiedades de paciente
}

interface Result<T> {
  data: T[] | null;
  error: PostgrestError | null;
}
async function upsertData<T, TOut>(table: string, dataFrom: T, supabase: SupabaseClient): Promise<Result<TOut>> {
  const result = await supabase.from(table).upsert([dataFrom]).select();

  return {
    data: result.data,
    error: result.error,
  };
}


async function addPatient(user: UserRequest, patient: Patient): Promise<Result<PatientData>> {
  try {
    const { data: dataUser, error: errorUpsert } = await upsertData<UserRequest,UserData>('user', user, database);

    if (errorUpsert) {
      return { data: null, error: errorUpsert };
    }

    if (dataUser !== null) {
      patient.user_id = dataUser[0].id;
    }


    const { data, error } = await upsertData<Patient,PatientData>('patient', patient, database);

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
