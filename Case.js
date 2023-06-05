// membuat class arrayStatistics
class arrayStatistics {
    constructor(array) {
        this.array = array;
    }
  
    // membuat method untuk menghitung nilai rata-rata
    getAverage() {
        let sum = 0;
        for (let i = 0; i < this.array.length; i++) {
            sum += this.array[i];
        }    
        return sum / this.array.length;
    }
  
    // membuat method untuk mencari nilai tertinggi
    getMax() {
        return Math.max(...this.array);
    }
  
    // membuat method untuk mencari nilai terendah
    getMin() {
        return Math.min(...this.array);
    }

    // membuat method untuk mengurutkan nilai siswa dari nilai tertinggi ke nilai terendah
    sortDescending() {
        return this.array.sort((a, b) => a - b);
    }
};
  
// meminta pengguna memasukkan data array
process.stdout.write("Masukkan nilai siswa (tekan enter untuk setiap elemen, ketik 'q' untuk berhenti):\n");  
    let array = [];
    process.stdin.on("data", (input) => {
        const data = input.toString().trim();
        if (data === "q") {
            // membuat instance dari class arrayStatistics
            const myArray = new arrayStatistics(array);
            
            // menampilkan nilai siswa yang diurutkan dari nilai terendah ke nilai tertinggi
            const sortedArray = myArray.sortDescending();
            process.stdout.write(`Nilai siswa yang diurutkan dari nilai terendah ke nilai tertinggi: ${sortedArray}\n`);

            // menampilkan nilai rata-rata, nilai tertinggi, dan nilai terendah
            process.stdout.write(`Nilai rata-rata: ${myArray.getAverage()}\n`);
            process.stdout.write(`Nilai tertinggi: ${myArray.getMax()}\n`);
            process.stdout.write(`Nilai terendah: ${myArray.getMin()}\n`);

            // menghitung serta menampilkan jumlah siswa yang lulus dan tidak lulus nilainya
            const lulus = array.filter((value) => value >= 60).length;
            const tidakLulus = array.filter((value) => value < 60).length;
            process.stdout.write(`Jumlah siswa yang lulus nilainya: ${lulus}\n`);
            process.stdout.write(`Jumlah siswa yang tidak lulus nilainya: ${tidakLulus}\n`);

            // menampilkan nilai siswa yang bernilai 90 dan 100
            const filteredArray = array.filter((value) => value === 90 || value === 100);
            process.stdout.write(`Siswa yang bernilai 90 dan 100: ${filteredArray}\n`);

            process.exit();
        } 
            else {
                array.push(Number(data));
        }
});
