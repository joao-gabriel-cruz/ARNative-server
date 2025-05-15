# AR Website

Este é um site de realidade aumentada usando AR.js e Three.js.

## Como executar

1. Certifique-se de ter o Node.js instalado em seu computador
2. Abra o terminal na pasta do projeto
3. Execute os seguintes comandos:

```bash
npm install
npm start
```

4. O servidor será iniciado em `http://localhost:3000`
5. Para acessar de outros dispositivos na mesma rede:
   - Descubra o IP do seu computador (use `ipconfig` no Windows)
   - Acesse `http://SEU_IP:3000` de qualquer dispositivo na mesma rede

## Marcadores necessários

Para usar a AR, você precisará imprimir os seguintes marcadores:
- [Marcador Hiro](https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/HIRO.jpg)
- [Marcador Kanji](https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/KANJI.jpg)

## Tecnologias utilizadas

- Express.js para o servidor
- AR.js para realidade aumentada
- Three.js para renderização 3D
- A-Frame para componentes AR 