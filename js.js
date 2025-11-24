const name = prompt ("Nama Anda");

const nilai = prompt ("masukan nilai");
if (nilai > 80 ) {
    document.writeln ("lulus : A")
} else if ( nilai > 70) {
    document.writeln ("lulus : B")
} else if (nilai > 60) {
    document.writeln ("tidak lulus : C")
} else {
    document.writeln ("tidak lulus : D")
}