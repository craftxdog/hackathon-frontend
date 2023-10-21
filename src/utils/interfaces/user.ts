import { UserCredential } from "firebase/auth";
import { FirebaseUser } from "./firebase/user.firebase";

export interface UserRequest {
    firebase_id: string | null;
    username: string | null;
    name: string | null;
    // address: string | null;
    phone: string | null;
    email: string | null;
    image: string | null;
    city: string | null;
    department: string | null;
}

export interface Patient {
    lastname: string | null;
    gender: number | null;
    date_of_birth: Date | null;
    cedula: string | null;
    nroinss: string | null;
    user_id: string | null;
}

export function convertFirebaseUserToUserAndPatient(firebaseUser: UserCredential): { user: UserRequest, patient: Patient } {
    try {
        const { uid, displayName, email, phoneNumber, photoURL } = firebaseUser.user;

    const user: UserRequest = {
        firebase_id: uid || null,
        username: null, // Puedes asignar un valor aquí si tienes uno en el objeto FirebaseUser
        name: displayName || null,
        // address: null, // Asigna un valor si lo tienes en el objeto FirebaseUser
        phone: phoneNumber || null,
        email: email || null,
        image: photoURL || null,
        city: null, // Asigna un valor si lo tienes en el objeto FirebaseUser
        department: null, // Asigna un valor si lo tienes en el objeto FirebaseUser
    };

    const patient: Patient = {
        lastname: null, // Asigna un valor si lo tienes en el objeto FirebaseUser
        gender: null, // Asigna un valor si lo tienes en el objeto FirebaseUser
        date_of_birth: null, // Asigna un valor si lo tienes en el objeto FirebaseUser
        cedula: null, // Asigna un valor si lo tienes en el objeto FirebaseUser
        nroinss: null, // Asigna un valor si lo tienes en el objeto FirebaseUser
        user_id: uid,
    };

    return { user, patient };
    } catch (error: any) {
        console.log(error)
        throw error
    }
}

