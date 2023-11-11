// Dichiarazione globale
var taskCompleted = 0;

function addTask(taskName) {
  // TDZ per taskStatus
  // console.log(taskStatus); questo genera un errore se decommentato

  let taskStatus = "Iniziato"; // 'taskStatus' è in TDZ prima di questa linea
  console.log("Iniziato attività: ${taskName}");

  // Simula il completamento dell'attività
  completeTask(); // Chiamiamo una funzione per completare l'attività

  function completeTask() {
    taskStatus = "Completato";
    taskCompleted += 1; // incrementiamo il contatore delle attività completate
    console.log('Attività "${taskName}" ${taskStatus}.');
  }
}

function showReport() {
  // 'taskCompleted' è disponibile perchè è stata dichiarata con var all'inizio dello script
  console.log("Numero totale di attività completate: ${tasksCompleted}");
}

// Aggiunta di alcune attività
addTask("Apprendimento javascript");
addTask("Esercitazione");

// Mostra il report
showReport(); // Mostra il numero di attività completate
