/*
Runtime
    44ms
    Beats 50.23% of users with JavaScript

Memory
    49.15MB
    Beats 85.67% of users with JavaScript
*/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
function minMeetingRooms(intervals) {
    if (intervals.length === 0) return 0;

    // Ordena os intervalos por horário de início
    intervals.sort((a, b) => a[0] - b[0]);

    // Um array para representar o heap, inicializado com o fim da primeira reunião
    const endTimes = [intervals[0][1]];
    let rooms = 1;

    // Função para ajustar o heap (emular um min-heap com array)
    function minHeapify() {
        endTimes.sort((a, b) => a - b);
    }

    // Processa cada intervalo de reunião
    for (let i = 1; i < intervals.length; i++) {
        // Se a reunião atual começa depois que a reunião mais cedo termina, reutilize a sala
        if (intervals[i][0] >= endTimes[0]) {
            endTimes.shift(); // Remove o menor elemento do heap (final da reunião mais cedo)
        } else {
            // Necessita de uma nova sala
            rooms++;
        }

        // Adiciona o tempo de término da reunião atual no heap
        endTimes.push(intervals[i][1]);
        // Mantém o heap organizado
        minHeapify();
    }

    return rooms;
}

result = minMeetingRooms([[2,11],[6,16],[11,16]])

console.log('final result', result)