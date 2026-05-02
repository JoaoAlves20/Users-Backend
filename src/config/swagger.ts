import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Users API',
            version: '1.0.0',
            description: 'Documentação da API com CRUD de usuários, autenticação JWT e autorização (ADMIN ou USER)'
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerformat: 'JWT'
                }
            }
        }
    },
    apis: ['./src/docs/*.yml']
}

export const swaggerSpec = swaggerJSDoc(options);