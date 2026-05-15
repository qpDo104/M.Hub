 È scritto apposta per chi si occupa di Frontend e non vuole impazzire col Backend.
Crea un file chiamato README.md e incollaci questo:
🚀 Hub Marconi - Frontend Setup GuideBenvenuti nell'area di sviluppo dell'Hub Marconi. 
Se sei qui, ti occuperai della parte Frontend (Next.js).
Per far funzionare il sito sul tuo PC e vedere i dati reali, segui questi passaggi.
🛠 PrerequisitiNode.js installato (versione 18+).XAMPP (per far girare il database locale).
📥 Installazione Rapida1. Clonazione e DipendenzeBash# Entra nella cartella frontend
cd frontend
npm install
2. Preparazione Backend (Essenziale per i dati)Il frontend parla con un'API Laravel. Assicurati che il tuo "capo backend" ti abbia dato accesso alla cartella backend:Apri XAMPP e avvia Apache e MySQL.Nel terminale della cartella backend:Bashcomposer install
php artisan migrate
php artisan serve
Il backend deve restare attivo su http://127.0.0.1:8000.3.
Avvio FrontendBashnpm run dev
Vai su http://localhost:3000 e dovresti vedere i post caricati dal database.
📍 Punti Chiave per il FrontendAPI Base URL: http://127.0.0.1:8000/apiAxios:
Usiamo Axios per tutte le chiamate.Tailwind CSS: Lo stile è gestito con Tailwind.
Se vuoi cambiare colori, edita il file globals.css o usa le classi direttamente nei componenti.
Gestione Errori: Se vedi "Network Error", controlla che il backend sia acceso e che non ci siano blocchi CORS nel file config/cors.php del backend.
