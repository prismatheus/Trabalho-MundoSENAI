import jwt from 'jsonwebtoken'
const secret = process.env.SECRET_KEY

const auth =  (req, res, next) => {
    try {
        console.log('autenticando...');
        
        //import o token que ira para o header da req
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
          return res.status(401).send({ mensagem: 'Acesso negado: token ausente ou inválido' });
        }
        
        const token = authHeader.split(' ')[1]; // Pega só o token
       console.log('Token extraído:', token);// Log do cabeçalho


        

        
        if (!token) {
            console.log('token: ',token);
            return res.status(401).send({ mensagem: 'Acesso negado D:' })      
        }

        // se tiver token usaremos o  jtw para validar
        const contentToken = jwt.verify(token, secret)
        // identifica para qual user foi gerado o token
        req.id = contentToken.id
        next()
    } catch (erro) {
        console.error('Erro no auth middleware:', erro.name, erro.message);
        return res.status(401).send({ mensagem: 'Token inválido ou expirado', erro: erro.message });
      }
}
export { auth }