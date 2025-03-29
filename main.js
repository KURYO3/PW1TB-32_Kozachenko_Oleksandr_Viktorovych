function cal1() {
    // Отримання значень від користувача
    var H = document.getElementById("H").value; // Водень
    var C = document.getElementById("C").value; // Вуглець
    var S = document.getElementById("S").value; // Сірка
    var N = document.getElementById("N").value; // Азот
    var O = document.getElementById("O").value; // Кисень
    var W = document.getElementById("W").value; // Волога
    var A = document.getElementById("A").value; // Зола

    // Розрахунок коефіцієнтів
    var K_w_dry = 100 / (100 - W);
    var K_w_comb = 100 / (100 - W - A);

    // Розрахунок складу сухої маси палива
    var H_dry = H * K_w_dry;
    var C_dry = C * K_w_dry;
    var S_dry = S * K_w_dry;
    var N_dry = N * K_w_dry;
    var O_dry = O * K_w_dry;
    var A_dry = A * K_w_dry;

    // Розрахунок складу горючої маси палива
    var H_comb = H * K_w_comb;
    var C_comb = C * K_w_comb;
    var S_comb = S * K_w_comb;
    var N_comb = N * K_w_comb;
    var O_comb = O * K_w_comb;

    // Розрахунок нижчої теплоти згоряння для робочої маси
    var QPH = (339 * C + 1030 * H - 108.8 * (O - S) - 25 * W) / 1000;
    var Q_ri = QPH;
    var Q_i_daf = (QPH + 0.025 * W) * (100 / (100 - W - A));

    // Розрахунок нижчої теплоти згоряння для сухої маси
    var QD = (Q_ri + 0.025 * W) * (100 / (100 - W));

    // Виведення результатів
    document.getElementById("result").innerHTML = "Результат: " +
        "<br> Коефіцієнт переходу від робочої до сухої маси = " + K_w_dry.toFixed(2) + "" +
        "<br> Коефіцієнт переходу від робочої до горючої маси = " + K_w_comb.toFixed(2) + "" +
        "<br> Склад сухої маси палива становитиме: " + "" +
        "<br>Hc = " + H_dry.toFixed(2) + " %, Cc = " + C_dry.toFixed(2) + " %, Sс = " + S_dry.toFixed(2) + " %, " +
        "<br>Nс = " + N_dry.toFixed(2) + " %, Oс = " + O_dry.toFixed(2) + " %, Aс = " + A_dry.toFixed(2) + " %," + "" +
        "<br> Склад горючої маси палива становитиме: " + "" +
        "<br>Hг = " + H_comb.toFixed(2) + " %, Cг = " + C_comb.toFixed(2) + " %, Sг = " + S_comb.toFixed(2) + " %, " +
        "<br>Nг = " + N_comb.toFixed(2) + " %, Oг = " + O_comb.toFixed(2) + " %," + "" +
        "<br> Нижча теплота згоряння для робочої маси за заданим складом компонентів палива становить: " + QPH.toFixed(4) + " МДж/кг" + "" +
        "<br> Нижча теплота згоряння для сухої маси за заданим складом компонентів палива становить: " + QD.toFixed(2) + " МДж/кг" + "" +
        "<br> Нижча теплота згоряння для горючої маси за заданим складом компонентів палива становить: " + Q_i_daf.toFixed(1) + " МДж/кг";
}

function cal2() {
    // Отримання значень від користувача
    var C2 = document.getElementById("C2").value; // вуглець
    var H2 = document.getElementById("H2").value; // водень
    var O2 = document.getElementById("O2").value; // кисень
    var S2 = document.getElementById("S2").value; // сірка
    var X = document.getElementById("X").value; // нижча теплота згоряння горючої маси мазуту, МДж/кг
    var Y = document.getElementById("Y").value; // вологість робочої маси палива,%
    var Z = document.getElementById("Z").value; // зольність сухої маси,%
    var V = document.getElementById("V").value; // вміст ванадію (V), мг/кг

    // Розрахунок коефіцієнтів
    var w_comb = (100 - Y - Z) / 100;
    var dry_comb = (100 - Y) / 100;

    // Розрахунок складу робочої маси мазуту
    var cf2 = C2 * w_comb;
    var hf2 = H2 * w_comb;
    var of2 = O2 * w_comb;
    var sf2 = S2 * w_comb;
    var x32 = Z * dry_comb;
    var v2 = V * dry_comb;

    // Розрахунок нижчої теплоти згоряння мазуту на робочу масу
    var Q = X * ((100 - Y - x32) / 100) - 0.025 * Y;

    // Виведення результатів
    document.getElementById("result2").innerHTML = "Результат: " +
        "<br> Склад робочої маси мазуту становитиме: <br>Cр = " + cf2.toFixed(2) + " %, Hр = " + hf2.toFixed(2) + " %, Sр = " + sf2.toFixed(2) + " %, " +
        "<br>Oр = " + of2.toFixed(2) + " %, V = " + v2.toFixed(2) + " мг/кг, Aр = " + x32.toFixed(2) + " %," + "" +
        "<br> Нижча теплота згоряння мазуту на робочу масу для робочої маси за заданим складом компонентів палива становить: " + Q.toFixed(1) + " МДж/кг";
}
