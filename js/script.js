//TIPE DATA
var gretingText = "Hello World!"
console.log('Ini text greting Card: ', gretingText)
//document.writeln(gretingText)

var myIdNumber = 36711307028500004
console.log('My ID Number: ', myIdNumber)

var myBoolean = true //false
console.log(myBoolean)


//ARITMETIKA
var a = 500
var b = 25
var resultKali = a * b
var resultBagi = a / b
var resultTambah = a + b
var resultKurang = a - b
var resultSisaBagi = a % b

console.log(resultKali)
console.log(resultBagi)
console.log(resultTambah)
console.log(resultKurang)
console.log(resultSisaBagi)


//PERBANDINGAN
var resultKurangDari = 5 < 3
console.log(resultKurangDari)

var resultLebihDari = 5 > 3
console.log(resultLebihDari)

var resultTipeData = 5 === "5"
console.log(resultTipeData)

var resultTidakCekTipeData = 5 == "5"
console.log(resultTidakCekTipeData)


//OPERATOR LOGIKA
const nilaiUjian = 50
const nilaiAbsen = 50

const lulusUjian = nilaiUjian >= 75
const lulusAbsen = nilaiAbsen >= 75

const lulusSempurna = lulusUjian && lulusAbsen
const lulusBiasa = lulusUjian || lulusAbsen

console.log('Lulus Sempurna: ', lulusSempurna)
console.log('Lulus Biasa: ' , lulusBiasa)


//CONDITIONAL

//SATU SYARAT
if(nilaiUjian >= 75){
    console.log('LULUS')
}else{
    console.log('TIDAK LULUS')
}

//BANYAK SYARAT
if(nilaiUjian >= 75 && nilaiAbsen >= 75){
    console.log('LULUS SEMPURNA')
}else if(nilaiUjian >= 75 && nilaiAbsen <= 75){
    console.log('LULUS BIASA')
}else if(nilaiUjian <= 75 && nilaiAbsen >= 75){
    console.log('LULUS BIASA')
}else{
    console.log('TIDAK LULUS')
}

//TERNERY OPERATOR CONDITIONAL
const hasilUjian = nilaiUjian >= 75 && nilaiAbsen >= 75 ? 'LULUS SEMPURNA' : (nilaiUjian >= 75 && nilaiAbsen <= 75) || (nilaiUjian <= 75 && nilaiAbsen >= 75) ? 'LULUS BIASA' : 'TIDAK LULUS'
console.log ('HASIL TERNERY OPERATOR : ', hasilUjian)


//ARRAY
const cars = [
    'Calya',
    'AGya',
    'Avanza',
    'Brio',
    'BRV',
    'Mobilio',
    'CRV',
    'BYD',
    'Tesla'
]

const motorBike = [
    'nmax',
    'adv',
    'pcx',
    'aerox',
    'vario',
    'ducati'
]

console.log("Car Brand: " , cars)
console.table(cars)
console.log('Data Index ke-4: ', cars[4])
console.log('Jumlah Data: ', cars.length)


//ARRAY METHODS
cars.push('BMW') //PUSH
console.table(cars)

const newData = cars.toString() // toString
console.log(newData)

const newDataJoin = cars.join(" - ") //join
console.log(newDataJoin)

const newDataShift = cars.shift() // shift
console.log(newDataShift)
console.log(cars)

delete cars[3] // delete
console.log(cars)
console.table(cars)

const concatData = cars.concat(motorBike) //concat
console.table(concatData)


//LOOPING
for(i = 0; i < cars.length; i++ ){
    console.log('HASIL LOOPING: ', cars[i])
}

//FOOD
const food = [
    {
        id : 1,
        rasa: 'Manis',
        warna: 'Merah',
        bentuk: 'Bulat'
    },
    {
        id : 2,
        rasa: 'Pahit',
        warna: 'Kuning',
        bentuk: 'Kotak'
    },
    {
        id : 3,
        rasa: 'Asam',
        warna: 'Hijau',
        bentuk: 'Bulat'
    }
]

food.forEach(foods => {
    for(let value in foods){
        console.log(`${foods[value]}`)
    }
})


//JQUERY SCRIPT
$(document).ready(function(){

    //SHOW HIDE
    $('#textReadMore').hide()

    $('#showText').click(function(){
        $('#textReadMore').show()
    })

    $('#hideText').click(function(){
        $('#textReadMore').hide()
    })


    //TOGGLE
    $('#textServices').hide()
    $('#showServices').click(function(){
        $('#textServices').toggle()
        if($(this).text() == 'Hide Services'){
            $(this).text('Show More Services →')
        }else{
            $(this).text('Hide Services')
        }
    })


})

