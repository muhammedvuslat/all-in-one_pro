// src/utils/fetchWithToast.js
import { toast } from "react-toastify";

export const fetchWithToast = async (promiseFn, messages = {}) => {
  const {
    loading = "Loading...", // Bekleme sırasında gösterilecek mesaj
    success = "Operation successful", // Başarılı olunca gösterilecek mesaj
    error = "Something went wrong", // Hata olunca gösterilecek mesaj
  } = messages;

  // 1. Loading toast'ını başlat
  const toastId = toast.loading(loading);

  try {
    // 2. Asıl API çağrısını çalıştır
    const result = await promiseFn();

    // 3. Başarılı olursa toast'ı güncelle
    toast.update(toastId, {
      render: success,
      type: "success",
      isLoading: false,
      autoClose: 2000,
      hideProgressBar: true,
    });

    return result; // Veriyi geri döndür
  } catch (err) {
    // 4. Hata olursa toast'ı güncelle
    toast.update(toastId, {
      render: error,
      type: "error",
      isLoading: false,
      autoClose: 3000,
      hideProgressBar: true,
    });

    throw err; // Hata üstteki koda fırlatılır (istersen yakalayabilirsin)
  }
};
