const fs = require('fs');
const doc = require('libreoffice-convert');
const pdfToImage = require('../utils/pdf');

class XlsPdfImage {
    constructor() { };

    xlsToPdf(input) {
        return new Promise(async (resolve, rejects) => {
            let file = fs.readFileSync(input);
            doc.convert(file, '.pdf', undefined, (err, done) => {
                if (err) rejects(err);
                else {
                    fs.writeFileSync(input.replace(/.xls/g, '.pdf'), done)
                    fs.unlinkSync(input);
                    resolve({ success: true, text: 'Arquivo convertido com sucesso' });
                }
            });
        });
    }

    xlsToImage(input) {
        let file = fs.readFileSync(input);
        return new Promise(async (resolve, rejects) => {
            doc.convert(file, '.pdf', undefined, (err, done) => {
                if (err) rejects(err);

                fs.writeFileSync(input.replace(/.xls/g, '.pdf'), done);
                let baseFilePath = input.split(input.split('/')[input.split('/').length - 1])[0];
                pdfToImage(input.replace(/.xls/g, '.pdf'), {
                    format: 'jpeg',
                    outdir: `${baseFilePath}`,
                    singleFile: false,
                }).then(() => {
                    fs.unlinkSync(input);
                    fs.unlinkSync(input.replace(/.xls/g, '.pdf'));
                    resolve({ success: true, text: 'Arquivo convertido com sucesso' });
                }).catch((err) => {
                    console.log(err);
                    rejects({ success: false, err });
                });
            });
        });
    }
}

module.exports = new XlsPdfImage();