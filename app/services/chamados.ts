import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../lib/firebase";

// Aluno cria um chamado
export async function criarChamado(numero: number, nome: string) {
  try {
    await addDoc(collection(db, "chamados"), {
      numero,
      nome,
      status: "aguardando",
      criadoEm: serverTimestamp(),
    });

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

// Professor inicia atendimento
export async function atenderChamado(id: string) {
  try {
    await updateDoc(doc(db, "chamados", id), {
      status: "atendendo",
    });

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

// Professor finaliza atendimento
export async function finalizarChamado(id: string) {
  try {
    await updateDoc(doc(db, "chamados", id), {
      status: "finalizado",
    });

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}