# 🌦️ AR Clima – Realidade Aumentada com Modelos 3D do Tempo

Este projeto é um site de realidade aumentada (AR) que exibe modelos 3D de condições climáticas em tempo real, usando AR.js, A-Frame e dados da OpenWeatherMap. O modelo 3D exibido muda automaticamente conforme o clima da sua localização.

---

## 🚀 Como Executar

1. **Pré-requisitos:**  
   - Node.js instalado

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor:**
   ```bash
   npm start
   ```
   O site estará disponível em [http://localhost:3000](http://localhost:3000)

4. **Acesse de outro dispositivo na mesma rede:**  
   - Descubra o IP do seu computador (ex: `ipconfig` no Windows)
   - Acesse `http://SEU_IP:3000` no navegador do celular

---

## 📱 Como Usar

1. **Permita o acesso à localização e à câmera** no navegador.
2. **Aponte a câmera para o marcador Hiro** (imprima [este marcador Hiro](https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/HIRO.jpg)).
3. O modelo 3D correspondente ao clima atual será exibido sobre o marcador.
4. As informações do clima aparecem em painéis sobrepostos na tela.

---

## 🗂️ Estrutura do Projeto

- `index.html` – Interface principal, lógica AR, integração com clima e exibição dos modelos.
- `server.js` – Servidor Express para servir arquivos estáticos e a página principal.
- `models/` – Pasta com todos os modelos 3D `.glb` usados para representar diferentes condições climáticas.
- `package.json` – Dependências e scripts do projeto.

---

## 🌤️ Modelos 3D Disponíveis

Os modelos são exibidos automaticamente conforme o clima retornado pela OpenWeatherMap:

- ☀️ 3d_sol.glb – Céu limpo
- ☁️ 3d_nublado.glb – Nublado
- 🌧️ 3d_chuva.glb – Chuva/garoa
- ⛈️ 3d_trovoada.glb – Trovoada
- ❄️ 3d_neve.glb – Neve
- 🌫️ 3d_ceu_nuvens.glb – Névoa, fumaça, poeira, etc.
- 🌪️ 3d_tempestade.glb – Tempestade, tornado, squall
- Outros modelos extras: 3d_sol_com_nuvem.glb, 3d_sol_forte.glb, Box.glb

---

## 🔗 Tecnologias Utilizadas

- **A-Frame** e **AR.js** – Realidade aumentada marker-based (Hiro)
- **Express.js** – Servidor web
- **OpenWeatherMap API** – Dados climáticos em tempo real
- **Three.js** (via A-Frame) – Renderização 3D
- **GLB** – Formato dos modelos 3D

---

## ⚠️ Limitações e Pontos Importantes

- **Projeção AR só funciona com marcador Hiro** (não há AR de superfície/plane detection).
- **No celular, a projeção do modelo 3D pode não funcionar em todos os navegadores**.  
  - O AR.js funciona melhor no Chrome/Android.  
  - No iOS/Safari, pode não funcionar ou apresentar bugs (limitação do AR.js/WebXR).
- **Permissões de câmera e localização são obrigatórias**.
- **A detecção do marcador pode ser sensível à iluminação**.
- **O site é responsivo, mas a experiência pode variar conforme o aparelho**.
- **Apenas um modelo é exibido por vez, de acordo com o clima atual**.
- **O site não faz AR de superfície (plane detection)**, apenas AR marker-based.
- **O vídeo da câmera pode piscar ou sumir em alguns aparelhos** devido a limitações do AR.js/A-Frame no mobile.
- **O site não funciona em apps de redes sociais (Instagram, Facebook, etc.)** – use o navegador do sistema.

---

## 💡 Dicas

- Sempre use o navegador Chrome no Android para melhor compatibilidade.
- Imprima o marcador Hiro em boa qualidade para melhor detecção.
- Se a câmera não abrir, recarregue a página e permita as permissões.
- Se o modelo não aparecer, tente ajustar a distância e o ângulo do marcador.

---

## 📦 Scripts Úteis

- `npm start` – Inicia o servidor local em HTTP
- `npm run start:https` – Inicia um proxy HTTPS local (requer configuração extra)

---

## ✨ Créditos

- [AR.js](https://ar-js-org.github.io/AR.js-Docs/)
- [A-Frame](https://aframe.io/)
- [OpenWeatherMap](https://openweathermap.org/)
- Modelos 3D: pasta `/models`

---

Se quiser personalizar, adicionar novos modelos ou melhorar a responsividade, basta editar o `index.html` e os arquivos em `/models`. 