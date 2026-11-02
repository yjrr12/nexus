# Nexus AI para Vercel

Projeto inicial web com Next.js, funções Python do Vercel, yfinance e chat Groq. Não usa Ollama.

## Publicação
1. Envie esta pasta para um repositório GitHub.
2. Importe o repositório no Vercel; ele deve detectar Next.js.
3. Em Project Settings → Environment Variables, crie `GROQ_API_KEY` com sua chave secreta.
4. Opcional: `GROQ_MODEL` com o identificador de um modelo habilitado na sua conta Groq.
5. Faça Deploy.

## Desenvolvimento local
Requer Node.js 20+ e Python 3.12. Rode `npm install` e depois `npx vercel dev` (instale a CLI com `npm i -g vercel` e faça `vercel login` antes).

## Observações
- O Yahoo Finance pode atrasar, limitar ou não fornecer determinados símbolos/intervalos.
- A atualização de 5 minutos ocorre no navegador enquanto o usuário mantém a página aberta; não é um processo de atualização contínua em segundo plano.
- As funções Python do Vercel são invocadas sob demanda, não ficam executando 24 horas continuamente.
- Esta base tem uma lista inicial de ativos. Para copiar exatamente o app.py e as skills do projeto original, ainda é necessário comparar e integrar os arquivos originais.
- Nunca publique a chave Groq no código ou no GitHub. Configure-a nas Environment Variables do Vercel.
- Aplicativo educacional; não executa ordens.
