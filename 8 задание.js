let map = new Map();
map.set(1, 'a');
map.set(2, 'b');
map.set(3, 'c');
for (let number of map.keys()){
    console.log(`Ключ — ${number}, значение — ${map.get(number)}`);
}