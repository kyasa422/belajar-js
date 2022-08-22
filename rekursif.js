function cetakAngka(n) {
    if (n <= 0) {
        return;
    }
    console.log(n);
    cetakAngka(n-9);
}

cetakAngka(10);