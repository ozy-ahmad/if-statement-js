console.log('Nilai Project React Native')

const nilaiInput = window.prompt('Input nilai project react native')
const nilai = Number(nilaiInput)

if (nilai >=0 && nilai <=60) {
    window.alert('kurang')
} else if (nilai >=61 && nilai <75) {
    window.alert('cukup')
} else if (nilai >=75 && nilai <90) {
    window.alert('baik')
} else if (nilai >=90 && nilai <= 100) {
    window.alert('sangat baik')
} else {
    window.alert('masukan nilai dengan benar')
}
console.log('')