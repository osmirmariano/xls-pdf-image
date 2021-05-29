# xls-pdf-image
Biblioteca para converter arquivo xls e xlsx para pdf e imagem

## Aplicação ##
Converter XLS, XLSX para PDF
```js
const xlsPdfImage = require('doc-pdf-image');

let conversao = await xlsPdfImage.xlsToPdf('./exemplo/exemplo.xls');
conversao.success ? 'Arquivo convertido com sucesso' : 'Não foi possível converter';
```

Converter XLS, XLSX para IMAGEM (JEPG)
```js
const xlsPdfImage = require('doc-pdf-image');

let conversao = await xlsPdfImage.xlsToImage('./exemplo/exemplo.xls');
conversao.success ? 'Arquivo convertido com sucesso' : 'Não foi possível converter'
```

## License ##

Este projeto é licenciado sobre MIT License - [LICENSE.md](LICENSE) para mais detalhes vide arquivo

## Perfil ##
* E-mail: osmirmarianocc@gmail.com
