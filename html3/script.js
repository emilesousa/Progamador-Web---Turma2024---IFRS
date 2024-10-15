function updateClocks() {
    // Obtém a data e hora atual
    const now = new Date();

    // Fuso horários para cada cidade
    const timeZones = {
        time1: 'America/New_York',
        time2: 'Europe/London',
        time3: 'Europe/Paris',
        time4: 'Asia/Tokyo',
        time5: 'America/Sao_Paulo',
    };

    // Atualiza cada relógio com a hora atual correspondente
    for (const [id, timeZone] of Object.entries(timeZones)) {
        const options = {
            timeZone: timeZone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false, // Formato de 24 horas
        };
        document.getElementById(id).innerText = now.toLocaleTimeString('pt-BR', options);
    }
}

// Atualiza os relógios a cada segundo
setInterval(updateClocks, 1000);

// Chama a função uma vez para definir o tempo inicial
updateClocks();
