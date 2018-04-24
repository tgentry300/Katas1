const output = document.getElementById("scripts")

// Kata number 1
for (i = 0; i <= 20; i++) {
    output.innerHTML += "<p>Kata 1:" + i + "</p>"
}

// Kata number 2
for (i = 0; i <= 20; i++) {
    if (i % 2 == 0){
    output.innerHTML += "<p>Kata 2:" + i + "</p>"
    }
}

// Kata number 3
for (i = 0; i < 20; i++) {
    if (i % 2 == 1) {
    output.innerHTML += "<p>Kata 3:" + i + "</p>"
    }
}

// Kata number 4
for (i = 1; i <= 100; i++) {
    if (i % 5 == 0){
    output.innerHTML += "<p>Kata :" + i + "</p>"
    }
}

// Kata number 5
for (i = 1; i <= 100; i++) {
    var y = i*i
    if (y < 101)
    output.innerHTML += "<p>Kata 5:" + y + "</p>"
}

// Kata number 6
for (i = 20; i >= 1; i--)
output.innerHTML += "<p>Kata 6:" + i + "</p>"

// Kata number 7
for (i = 20; i >=2; i--) {
   if (i % 2 == 0)
   output.innerHTML += "<p>Kata 7:" + i + "</p>"
}

// Kata number 8
for (i = 20; i >= 1; i--){
    if (i % 2 == 1) 
    output.innerHTML += "<p>Kata 8:" + i + "</p>"
}

// Kata number 9
for (i = 100; i >=5; i--) {
    if (i % 5 == 0)
    output.innerHTML += "<p>Kata 9:" + i + "</p>"
}

// Kata number 10
for (i = 100; i >= 1; i--){
    var y = i * i
    if (y <= 100)
    output.innerHTML += "<p>Kata 10:" + y + "</p>"
}


