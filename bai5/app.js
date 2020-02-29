function show() {
    let array = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus'];
    let array1 = ['Ursa Minor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major', 'Leo'];
    let name = document.getElementById("name").value;
    if (array.indexOf(name) !== -1) {
        let index = array1[array.indexOf(name)];
        document.getElementById("name1").value = index.toString();
    }else {
        document.getElementById("name1").value = " khong co ngoi sao nay";
    }
}