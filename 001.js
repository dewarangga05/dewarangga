<!DOCTYPE html>
<html lang="en">
<head>
    <title>Percabangan if/else/if</title>
</head>
<body>
    <script>
        var nilai = prompt("Inputkan nilai:");
        var grade = "";

        if(nilai >= 90) grade = "A"
        else if(nilai >= 80) grade = "B"
        else if(nilai >= 70) grade = "C"
        else if(nilai >= 60) grade = "D"
        else if(nilai >= 50) grade = "E"
        else grade = "E";

        document.write(`<p>Grade anda: ${grade}</p>`);
    </script>
</body>
</html>