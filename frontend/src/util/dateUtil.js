const mesesPorEscrito = {}
mesesPorEscrito[0] = 'JAN';
mesesPorEscrito[1] = 'FEV';
mesesPorEscrito[2] = 'MAR';
mesesPorEscrito[3] = 'ABR';
mesesPorEscrito[4] = 'MAI';
mesesPorEscrito[5] = 'JUN';
mesesPorEscrito[6] = 'JUL';
mesesPorEscrito[7] = 'AGO';
mesesPorEscrito[8] = 'SET';
mesesPorEscrito[9] = 'OUT';
mesesPorEscrito[10] = 'NOV';
mesesPorEscrito[11] = 'DEZ';

class DateUtil {    
    static compare(dt1, dt2) {

        const dadosDt1 = `${dt1.getYear()}${dt1.getMonth()}${dt1.getDate()}`;
        const dadosDt2 = `${dt2.getYear()}${dt2.getMonth()}${dt2.getDate()}`;

        if (dadosDt1 === dadosDt2) {
            return 0;

        } else if (dt1.getTime() > dt2.getTime()) {
            return 1;

        } else {
            return -1;
        }
    }

    static ehDataHoje(dt) {
        const hoje = new Date();
        return DateUtil.compare(hoje, dt) === 0;
    };

    static ehDataAmanha(dt) {
        let amanha = new Date();
        amanha.setDate(amanha.getDate() + 1);

        return DateUtil.compare(amanha, dt) === 0;
    };

    static ehDataProximaSemana(dt) {
        let inicioProximaSemana = new Date();
        inicioProximaSemana.setDate(inicioProximaSemana.getDate() + (7 - inicioProximaSemana.getDay()));

        let fimProximaSemana = new Date();
        fimProximaSemana.setDate(inicioProximaSemana.getDate() + 6);

        return DateUtil.compare(dt, inicioProximaSemana) >= 0 &&
            DateUtil.compare(dt, fimProximaSemana) < 0;
    };

    static ehDataProximoFinalDeSemana(dt) {
        let inicioProximoFinalDeSemana = new Date();
        inicioProximoFinalDeSemana.setDate(inicioProximoFinalDeSemana.getDate() + (6 - inicioProximoFinalDeSemana.getDay()));

        let fimProximoFinalDeSemana = new Date();
        fimProximoFinalDeSemana.setDate(inicioProximoFinalDeSemana.getDate() + 1);

        return DateUtil.compare(dt, inicioProximoFinalDeSemana) >= 0 &&
            DateUtil.compare(dt, fimProximoFinalDeSemana) < 0;
    };

    static obtemMesFormatado(mes){
        return mesesPorEscrito[mes];
    }
}

export default DateUtil;